# @entrext/support-client

A TypeScript client library for submitting support tickets and feedback to the Entrext support system.

## Overview

`@entrext/support-client` provides a simple and type-safe way to integrate support and feedback functionality into your applications. It allows users to submit bugs, feature requests, feedback, and general support inquiries through a unified client interface.

## Installation

```bash
npm install @entrext/support-client
```

## Usage

### Basic Setup

```typescript
import { createSupportClient } from '@entrext/support-client';

const supportClient = createSupportClient({
  endpoint: 'https://your-support-api.com/submit',
  anonKey: 'your-anonymous-api-key'
});
```

### Submitting a Ticket

```typescript
await supportClient.submitTicket({
  product: 'my-app',
  category: 'bug',
  message: 'The login button is not working',
  metadata: {
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString()
  }
});
```

## API Reference

### `createSupportClient(config)`

Creates and returns a configured support client instance.

**Parameters:**
- `config.endpoint` (string, required): The API endpoint URL for submitting support tickets
- `config.anonKey` (string, required): Anonymous API key for authentication

**Throws:** Error if `endpoint` or `anonKey` are not provided

### `submitTicket(input)`

Submits a support ticket to the configured endpoint.

**Parameters:**
- `product` (string, required): The product or application name
- `category` (SupportCategory, required): The type of support request
  - `"bug"` - Bug reports
  - `"feedback"` - General feedback
  - `"feature"` - Feature requests
  - `"support"` - General support inquiries
- `message` (string, required): The support message or description
- `metadata` (Record<string, any>, optional): Additional context or metadata

**Returns:** Promise<any> - The server response

**Throws:** Error if the request fails

## Example

```typescript
import { createSupportClient } from '@entrext/support-client';

const client = createSupportClient({
  endpoint: process.env.SUPPORT_ENDPOINT,
  anonKey: process.env.SUPPORT_ANON_KEY
});

// Submit a bug report
await client.submitTicket({
  product: 'web-dashboard',
  category: 'bug',
  message: 'Dashboard crashes when loading large datasets',
  metadata: {
    browserVersion: '120.0',
    dataSize: '500MB'
  }
});
```

## License

ISC
