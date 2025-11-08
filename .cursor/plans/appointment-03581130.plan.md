<!-- 03581130-3405-4463-9191-878557843274 51d4e665-b2b1-4218-bfd5-4d46b779e915 -->
# Backend Quote API Integration Plan

## Overview

Establish a POST endpoint in the FRC backend to accept quote requests and update the frontend `QuoteForm` to send data to it.

## Backend API Specification

### Endpoint

- **URL**: `/api/quotes` (or `/api/quote-requests`)
- **Method**: `POST`
- **Content-Type**: `application/json`

### Request Payload

```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "address": "string (required)",
  "phone": "string (required)",
  "gymName": "string (required)",
  "members": "number (required, > 0)",
  "equipments": "number (required, >= 0)",
  "serviceType": "string",
  "contactTime": "string (required)"
}
```

### Response

**Success (201 Created)**:

```json
{
  "success": true,
  "message": "Quote request received successfully",
  "requestId": "uuid-or-id"
}
```

**Validation Error (400 Bad Request)**:

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Invalid email format",
    "members": "Must be greater than zero"
  }
}
```

**Server Error (500)**:

```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Frontend Integration Steps

1. **Update API Configuration**

   - Define backend base URL (environment variable `NEXT_PUBLIC_API_URL`)
   - Create an API utility or update existing API helpers

2. **Modify QuoteForm Component**

   - Replace placeholder `console.log` in `handleSubmit` with actual fetch/axios call to `POST /api/quotes`
   - Set loading state during submission
   - Handle success: show confirmation message, optionally reset form
   - Handle errors: parse backend validation errors and display inline

3. **Error Handling & UX**

   - Show spinner/disable button during submission
   - Display backend validation messages in the same format as client-side errors
   - Provide user-friendly fallback for network/server errors

## Implementation Checklist

- Backend team creates `/api/quotes` endpoint with schema validation
- Backend stores quote requests in database (quotes table)
- Backend sends confirmation email (optional)
- Frontend engineer updates `QuoteForm.js` to call the endpoint
- Test with valid/invalid payloads
- Deploy and verify in staging environment

### To-dos

- [ ] Audit the existing appointment page structure and dependencies.
- [ ] Implement the new quote form component with styling and validation.
- [ ] Render the form on the appointment page with submission stub ready for backend hook-up.