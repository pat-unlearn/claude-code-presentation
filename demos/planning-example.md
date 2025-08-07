# Planning Mode Demo Example

## Prompt
"Build a secure REST API with JWT authentication, rate limiting, and proper error handling"

## Claude's Planning Response

### 🎯 Analysis
I'll build a production-ready REST API with the following key components:
- JWT-based authentication system
- Rate limiting to prevent abuse
- Comprehensive error handling
- Security best practices

### 🏗️ Architecture Plan

#### 1. Project Structure
```
src/
├── controllers/     # Route handlers
├── middleware/      # Auth, rate limiting, error handling
├── models/         # Data models
├── services/       # Business logic
├── utils/          # Helper functions
├── routes/         # Route definitions
└── config/         # Configuration
```

#### 2. Authentication Flow
- Login endpoint generates JWT tokens
- Refresh token mechanism for long-lived sessions
- Middleware validates tokens on protected routes
- Password hashing with bcrypt

#### 3. Rate Limiting Strategy
- Redis-based distributed rate limiting
- Different limits per endpoint type
- User-specific rate limits
- Graceful degradation when limits exceeded

#### 4. Error Handling
- Centralized error middleware
- Structured error responses
- Security-conscious error messages
- Request logging for debugging

### 📋 Implementation Steps

1. **Setup & Dependencies** (5 min)
   - Initialize Node.js project
   - Install required packages (express, jsonwebtoken, redis, etc.)
   - Configure environment variables

2. **Database & Models** (10 min)
   - Set up database connection
   - Create user model with password hashing
   - Add migration for user table

3. **Authentication System** (15 min)
   - Implement login/register endpoints
   - Create JWT middleware
   - Add refresh token logic
   - Password reset functionality

4. **Rate Limiting** (8 min)
   - Configure Redis connection
   - Implement rate limiting middleware
   - Set up different limits per route type

5. **Error Handling** (7 min)
   - Create centralized error handler
   - Add request validation
   - Implement security headers

6. **Testing** (10 min)
   - Unit tests for auth functions
   - Integration tests for API endpoints
   - Rate limiting edge cases

7. **Documentation** (5 min)
   - OpenAPI/Swagger documentation
   - Usage examples
   - Security considerations

### ⚠️ Edge Cases Considered

- **Token Expiration**: Graceful handling of expired tokens
- **Rate Limit Exceeded**: Queue requests vs reject immediately
- **Database Failures**: Connection pooling and retry logic
- **Memory Leaks**: Proper cleanup of Redis connections
- **Security**: Input validation, SQL injection prevention
- **Scalability**: Stateless design for horizontal scaling

### 🔒 Security Checklist

- ✅ Password hashing with salt
- ✅ JWT secret rotation capability
- ✅ Input sanitization and validation
- ✅ CORS configuration
- ✅ Security headers (helmet.js)
- ✅ Rate limiting by IP and user
- ✅ SQL injection prevention
- ✅ XSS protection

### 📊 Success Metrics

- All endpoints respond within 100ms under normal load
- 99.9% uptime with proper error handling
- Rate limits prevent abuse without blocking legitimate users
- Zero security vulnerabilities in dependency scan
- 95%+ test coverage

## Execution Ready!
With this comprehensive plan, implementation becomes a straightforward execution of well-defined steps. Each potential issue has been anticipated and addressed.

**Estimated Total Time**: 1 hour
**Confidence Level**: High - all major scenarios planned for