# Specialized Agent Examples

## Security Agent Demo

### Input Code (Vulnerable)
```javascript
// User authentication endpoint - VULNERABLE VERSION
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  // SQL Injection vulnerability
  const query = `SELECT * FROM users WHERE email = '${email}'`;
  const user = await db.query(query);
  
  // Plain text password comparison
  if (user && user.password === password) {
    // Weak JWT secret
    const token = jwt.sign({ id: user.id }, 'secret123');
    res.json({ token });
  } else {
    // Information disclosure
    res.status(401).json({ error: 'Invalid email or password' });
  }
});
```

### Security Agent Analysis
```
🔍 SECURITY ANALYSIS RESULTS

❌ CRITICAL VULNERABILITIES FOUND:

1. SQL Injection (Line 5)
   - Risk: High
   - Issue: Direct string interpolation in SQL query
   - Impact: Database compromise, data theft
   - Fix: Use parameterized queries or ORM

2. Plain Text Password (Line 9)
   - Risk: High  
   - Issue: Storing/comparing passwords in plain text
   - Impact: Credential theft if database compromised
   - Fix: Use bcrypt for password hashing

3. Weak JWT Secret (Line 11)
   - Risk: Medium
   - Issue: Hardcoded weak secret
   - Impact: Token forgery, authentication bypass
   - Fix: Use strong, environment-based secret

4. Information Disclosure (Line 14)
   - Risk: Low
   - Issue: Different messages for invalid email vs password
   - Impact: Email enumeration attacks
   - Fix: Generic error message

🛡️ RECOMMENDED FIXES APPLIED
```

### Security Agent Fixed Code
```javascript
// Secure authentication endpoint
app.post('/api/login', [
  // Input validation middleware
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  // Rate limiting
  rateLimit({ windowMs: 15 * 60 * 1000, max: 5 })
], async (req, res) => {
  try {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Invalid input provided' 
      });
    }

    const { email, password } = req.body;
    
    // Safe database query using ORM
    const user = await User.findOne({ 
      where: { email: email.toLowerCase() }
    });
    
    // Secure password comparison with timing attack protection
    const isValidPassword = user ? 
      await bcrypt.compare(password, user.hashedPassword) : 
      await bcrypt.compare(password, 'dummy_hash');
    
    if (user && isValidPassword) {
      // Strong JWT with expiration
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      
      // Secure cookie settings
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 3600000
      });
      
      res.json({ success: true });
    } else {
      // Generic error message to prevent enumeration
      res.status(401).json({ 
        error: 'Invalid credentials' 
      });
    }
  } catch (error) {
    logger.error('Login error:', error);
    res.status(500).json({ 
      error: 'Authentication failed' 
    });
  }
});
```

## Performance Agent Demo

### Input Code (Inefficient)
```javascript
// Product listing with N+1 query problem
app.get('/api/products', async (req, res) => {
  const products = await Product.findAll();
  
  // N+1 Query Problem - fires one query per product
  for (let product of products) {
    product.category = await Category.findById(product.categoryId);
    product.reviews = await Review.findByProductId(product.id);
    product.averageRating = await Review.getAverageRating(product.id);
  }
  
  res.json(products);
});

// Inefficient search without indexing
app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  
  // Table scan on large dataset
  const results = await Product.findAll({
    where: {
      name: { contains: query },
      description: { contains: query }
    }
  });
  
  res.json(results);
});
```

### Performance Agent Analysis
```
⚡ PERFORMANCE ANALYSIS RESULTS

🐌 PERFORMANCE ISSUES DETECTED:

1. N+1 Query Problem (Lines 4-8)
   - Impact: Database overload, slow response times
   - Issue: 1 + N queries instead of 2-3 optimized queries
   - Load Impact: 1000 products = 3001 queries instead of 3
   - Fix: Use eager loading/joins

2. Missing Database Indexes (Line 17)
   - Impact: Full table scans, exponential slowdown
   - Issue: Search queries not using indexes
   - Load Impact: O(n) instead of O(log n) complexity
   - Fix: Add full-text search indexes

3. No Caching Strategy (Both endpoints)
   - Impact: Repeated expensive operations
   - Issue: Database hit on every request
   - Fix: Implement Redis caching

4. No Pagination (Line 3)
   - Impact: Memory exhaustion, slow transfers
   - Issue: Loading all records at once
   - Fix: Implement cursor-based pagination

🚀 OPTIMIZATIONS APPLIED
```

### Performance Agent Optimized Code
```javascript
// Optimized product listing with caching and pagination
app.get('/api/products', 
  cache('products_list', 300), // 5-minute cache
  async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    try {
      // Single optimized query with eager loading
      const products = await Product.findAndCountAll({
        include: [
          {
            model: Category,
            attributes: ['id', 'name']
          },
          {
            model: Review,
            attributes: [],
            required: false
          }
        ],
        attributes: [
          'id', 'name', 'price', 'description',
          // Calculate average rating in database
          [sequelize.fn('AVG', sequelize.col('Reviews.rating')), 'averageRating'],
          [sequelize.fn('COUNT', sequelize.col('Reviews.id')), 'reviewCount']
        ],
        group: ['Product.id', 'Category.id'],
        limit,
        offset,
        order: [['createdAt', 'DESC']]
      });

      res.json({
        data: products.rows,
        pagination: {
          page,
          limit,
          total: products.count,
          pages: Math.ceil(products.count / limit)
        }
      });
    } catch (error) {
      logger.error('Products fetch error:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  }
);

// Optimized search with full-text indexing
app.get('/api/search',
  // Rate limiting for expensive operations
  rateLimit({ windowMs: 60000, max: 30 }),
  // Cache search results
  cache('search', 600, (req) => `search_${req.query.query}_${req.query.page}`),
  async (req, res) => {
    const { query, page = 1, limit = 20 } = req.query;
    
    if (!query || query.length < 2) {
      return res.status(400).json({ 
        error: 'Search query must be at least 2 characters' 
      });
    }

    try {
      // Use full-text search with PostgreSQL
      const results = await Product.findAndCountAll({
        where: {
          [Op.or]: [
            // Full-text search on indexed columns
            sequelize.literal(`
              to_tsvector('english', name || ' ' || description) 
              @@ plainto_tsquery('english', :query)
            `),
            // Fallback for partial matches
            {
              name: { [Op.iLike]: `%${query}%` }
            }
          ]
        },
        replacements: { query },
        include: [
          {
            model: Category,
            attributes: ['id', 'name']
          }
        ],
        limit: parseInt(limit),
        offset: (parseInt(page) - 1) * parseInt(limit),
        // Rank results by relevance
        order: [
          [sequelize.literal(`
            ts_rank(to_tsvector('english', name || ' ' || description), 
                    plainto_tsquery('english', '${query}'))
          `), 'DESC']
        ]
      });

      res.json({
        data: results.rows,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: results.count,
          pages: Math.ceil(results.count / parseInt(limit))
        },
        searchQuery: query
      });
    } catch (error) {
      logger.error('Search error:', error);
      res.status(500).json({ error: 'Search failed' });
    }
  }
);

// Required database indexes (migration)
/*
CREATE INDEX CONCURRENTLY idx_products_search 
ON products USING GIN(to_tsvector('english', name || ' ' || description));

CREATE INDEX CONCURRENTLY idx_products_name_trigram 
ON products USING GIN(name gin_trgm_ops);

CREATE INDEX CONCURRENTLY idx_products_category 
ON products(category_id);

CREATE INDEX CONCURRENTLY idx_reviews_product 
ON reviews(product_id);
*/
```

## Architecture Agent Demo

### Input Code (Poor Structure)
```javascript
// Monolithic controller doing everything
app.post('/api/orders', async (req, res) => {
  // Validation mixed with business logic
  if (!req.body.items || req.body.items.length === 0) {
    return res.status(400).json({ error: 'No items' });
  }
  
  // Direct database access in controller
  let total = 0;
  for (let item of req.body.items) {
    const product = await db.query('SELECT price FROM products WHERE id = ?', [item.id]);
    total += product.price * item.quantity;
  }
  
  // Business logic scattered throughout
  if (total > 50) {
    total = total * 0.9; // 10% discount
  }
  
  // Payment processing in controller
  const paymentResult = await stripe.charges.create({
    amount: total * 100,
    currency: 'usd',
    source: req.body.token
  });
  
  // Order creation mixed with everything else
  const order = await db.query('INSERT INTO orders ...');
  
  res.json({ order, total });
});
```

### Architecture Agent Refactored Code
```javascript
// Clean architecture with separation of concerns

// 1. Input Validation Layer
const orderValidationSchema = Joi.object({
  items: Joi.array().items(
    Joi.object({
      productId: Joi.number().required(),
      quantity: Joi.number().min(1).max(10).required()
    })
  ).min(1).required(),
  paymentToken: Joi.string().required(),
  shippingAddress: addressValidationSchema.required()
});

// 2. Domain Models
class Order {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.items = data.items.map(item => new OrderItem(item));
    this.status = data.status || OrderStatus.PENDING;
    this.createdAt = data.createdAt || new Date();
  }

  calculateTotal() {
    const subtotal = this.items.reduce((sum, item) => 
      sum + item.calculateLineTotal(), 0);
    return this.applyDiscounts(subtotal);
  }

  applyDiscounts(subtotal) {
    // Business rule: Free shipping over $50
    const shipping = subtotal > 50 ? 0 : 10;
    
    // Business rule: 10% bulk discount over $200
    const discount = subtotal > 200 ? subtotal * 0.1 : 0;
    
    return {
      subtotal,
      discount,
      shipping,
      total: subtotal - discount + shipping
    };
  }
}

// 3. Repository Layer
class OrderRepository {
  async create(orderData) {
    return await prisma.$transaction(async (tx) => {
      const order = await tx.order.create({
        data: {
          userId: orderData.userId,
          status: orderData.status,
          total: orderData.total,
          items: {
            create: orderData.items.map(item => ({
              productId: item.productId,
              quantity: item.quantity,
              price: item.price
            }))
          }
        },
        include: { items: true }
      });

      // Update inventory
      for (const item of orderData.items) {
        await tx.product.update({
          where: { id: item.productId },
          data: {
            inventory: { decrement: item.quantity }
          }
        });
      }

      return order;
    });
  }

  async findById(id) {
    return await prisma.order.findUnique({
      where: { id },
      include: { 
        items: { include: { product: true } },
        user: true 
      }
    });
  }
}

// 4. Service Layer
class OrderService {
  constructor(orderRepo, productService, paymentService, inventoryService) {
    this.orderRepository = orderRepo;
    this.productService = productService;
    this.paymentService = paymentService;
    this.inventoryService = inventoryService;
  }

  async createOrder(userId, orderData) {
    // Validate inventory availability
    await this.inventoryService.validateAvailability(orderData.items);
    
    // Get current product prices
    const itemsWithPrices = await this.productService
      .enrichWithPricing(orderData.items);
    
    // Create order domain object
    const order = new Order({
      userId,
      items: itemsWithPrices
    });

    // Calculate pricing
    const pricing = order.calculateTotal();
    
    // Reserve inventory
    const reservation = await this.inventoryService
      .reserveItems(orderData.items);
    
    try {
      // Process payment
      const payment = await this.paymentService.processPayment({
        amount: pricing.total,
        token: orderData.paymentToken,
        description: `Order for user ${userId}`
      });

      // Create order in database
      const savedOrder = await this.orderRepository.create({
        ...order,
        total: pricing.total,
        paymentId: payment.id
      });

      // Confirm inventory reservation
      await this.inventoryService.confirmReservation(reservation.id);

      // Send confirmation email
      await this.notificationService.sendOrderConfirmation(savedOrder);

      return {
        order: savedOrder,
        pricing,
        payment
      };
    } catch (error) {
      // Release inventory on failure
      await this.inventoryService.releaseReservation(reservation.id);
      throw error;
    }
  }
}

// 5. Controller Layer (Clean and Focused)
class OrderController {
  constructor(orderService) {
    this.orderService = orderService;
  }

  async createOrder(req, res, next) {
    try {
      // Input validation
      const { error, value } = orderValidationSchema.validate(req.body);
      if (error) {
        return res.status(400).json({
          success: false,
          error: 'Validation failed',
          details: error.details
        });
      }

      // Delegate to service layer
      const result = await this.orderService.createOrder(
        req.user.id, 
        value
      );

      res.status(201).json({
        success: true,
        data: result,
        message: 'Order created successfully'
      });
    } catch (error) {
      next(error); // Let error middleware handle it
    }
  }
}

// 6. Dependency Injection Setup
const orderRepository = new OrderRepository();
const productService = new ProductService();
const paymentService = new PaymentService(stripeClient);
const inventoryService = new InventoryService();
const orderService = new OrderService(
  orderRepository, 
  productService, 
  paymentService, 
  inventoryService
);
const orderController = new OrderController(orderService);

// 7. Route Definition
router.post('/orders', 
  authenticate,
  orderController.createOrder.bind(orderController)
);
```

### Benefits of Architecture Agent Refactoring

✅ **Separation of Concerns**: Each layer has a single responsibility  
✅ **Testability**: Each component can be unit tested in isolation  
✅ **Maintainability**: Changes to business logic don't affect controllers  
✅ **Reusability**: Services can be reused across different controllers  
✅ **Scalability**: Easy to add new features without breaking existing code  
✅ **Error Handling**: Centralized error management  
✅ **Transaction Management**: Proper database transaction handling  