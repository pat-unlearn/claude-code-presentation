# CLAUDE.md Example

This is an example of a comprehensive CLAUDE.md file that demonstrates how context persistence works across sessions.

---

## CLAUDE.md Template

```markdown
# Project: TechCorp E-Commerce Platform

## Project Overview
Modern e-commerce platform built for scalability and performance. Serves 100K+ daily active users with real-time inventory management.

## Architecture
- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL for transactional data, Redis for caching
- **Frontend**: React with TypeScript
- **Infrastructure**: Docker containers on AWS EKS
- **Message Queue**: AWS SQS for order processing
- **CDN**: CloudFront for static assets

## Technology Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.18+
- **Database ORM**: Prisma
- **Authentication**: JWT with refresh tokens
- **Testing**: Jest + Supertest
- **Code Quality**: ESLint + Prettier
- **Documentation**: OpenAPI 3.0

## Coding Standards

### JavaScript/TypeScript
- Use TypeScript strict mode
- Prefer async/await over Promises
- Use meaningful variable and function names
- Maximum function length: 50 lines
- Always include JSDoc for public functions

### Database
- Use Prisma migrations for schema changes
- Always use transactions for multi-table operations
- Index frequently queried columns
- Use connection pooling (max 20 connections)

### API Design
- Follow RESTful conventions
- Use HTTP status codes correctly
- Include request/response examples in docs
- Version APIs with /v1, /v2 prefixes
- Always validate input data

### Security
- All endpoints require authentication except /health
- Use rate limiting: 100 requests/minute per user
- Sanitize all user input
- Log security events to CloudWatch
- Rotate JWT secrets monthly

### Testing
- Minimum 90% code coverage
- Unit tests for business logic
- Integration tests for API endpoints
- Mock external services in tests
- Test error scenarios

## Business Rules

### Inventory Management
- Real-time stock updates across all channels
- Automatic backorder when stock < 10
- Reserved inventory timeout: 15 minutes
- Bulk discount: 10% for orders > $500

### Order Processing
- Orders auto-cancel if unpaid after 30 minutes
- Free shipping on orders over $50
- Same-day shipping cutoff: 2 PM local time
- Maximum 5 items per product in single order

### User Management
- Email verification required for new accounts
- Password reset tokens expire in 1 hour
- Account locked after 5 failed login attempts
- GDPR compliance: data export/deletion on request

### Pricing
- Tax calculated based on shipping address
- International shipping: flat $15 fee
- Return policy: 30 days, original condition
- Price changes don't affect pending orders

## Development Workflow
1. Create feature branch from `develop`
2. Write tests first (TDD approach)
3. Implement feature with proper error handling
4. Run full test suite locally
5. Update API documentation if needed
6. Create PR with detailed description
7. Code review required before merge
8. Squash commits when merging

## Deployment
- **Staging**: Auto-deploy from `develop` branch
- **Production**: Manual deploy from `main` branch
- **Rollback**: Available within 5 minutes
- **Database**: Migrations run automatically
- **Monitoring**: CloudWatch alarms for errors

## Environment Variables
```env
DATABASE_URL=postgresql://user:pass@host:5432/dbname
REDIS_URL=redis://redis-host:6379
JWT_SECRET=your-secret-key
AWS_REGION=us-east-1
NODE_ENV=production
PORT=3000
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
```

## Common Patterns

### Error Handling
```javascript
// Always use this error handler
const handleAsyncError = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
```

### Database Queries
```javascript
// Use transactions for multi-table operations
const result = await prisma.$transaction(async (tx) => {
  const order = await tx.order.create({...});
  await tx.inventory.update({...});
  return order;
});
```

### API Response Format
```javascript
// Standard success response
res.json({
  success: true,
  data: result,
  message: "Operation completed successfully"
});

// Standard error response
res.status(400).json({
  success: false,
  error: {
    code: "VALIDATION_ERROR",
    message: "Invalid input provided",
    details: validationErrors
  }
});
```

## Dependencies
- express: Web framework
- prisma: Database ORM
- jsonwebtoken: JWT authentication
- bcrypt: Password hashing
- joi: Input validation
- redis: Caching layer
- winston: Logging
- helmet: Security headers
- cors: Cross-origin resource sharing

## Current Sprint Goals
- [ ] Implement order history pagination
- [ ] Add product recommendation engine
- [ ] Optimize checkout performance
- [ ] Implement abandoned cart recovery
- [x] Add inventory alerts
- [x] Upgrade to Node.js 18

## Known Issues
- Checkout occasionally times out under high load (investigating)
- Search results inconsistent for partial matches (P2)
- Mobile UI needs accessibility improvements (P3)

## Team Contacts
- **Tech Lead**: Sarah Chen (sarah.chen@techcorp.com)
- **DevOps**: Mike Rodriguez (mike.r@techcorp.com)
- **Product**: Lisa Wang (lisa.wang@techcorp.com)

---
Last Updated: 2024-01-15
Version: 2.1
```

## How This Context Helps

### Session 1 (Monday)
**User**: "Add product search functionality"

**Claude Response**: "I'll implement product search following your established patterns:
- Using PostgreSQL full-text search as per your architecture
- Following TypeScript strict mode standards
- Adding comprehensive Jest tests for 90% coverage
- Using the standard API response format
- Including proper input validation with Joi
- Adding rate limiting protection"

### Session 2 (Friday) 
**User**: "Add checkout flow optimization"

**Claude Response**: "I'll optimize the checkout flow based on your business rules:
- Implementing 15-minute inventory reservation timeout
- Adding automatic order cancellation after 30 minutes if unpaid
- Applying free shipping logic for orders over $50
- Using Prisma transactions for multi-table operations
- Following your established error handling patterns
- Ensuring same-day shipping cutoff logic (2 PM local)"

### Key Benefits
1. **Consistency**: Every session follows the same standards
2. **Context Awareness**: Remembers business rules and technical constraints
3. **Best Practices**: Automatically applies your team's conventions
4. **Efficiency**: No need to re-explain project structure each time
5. **Quality**: Built-in adherence to testing and security requirements