# Adobe Express Add-On Testing (TypeScript, React, Vitest)

## About

This is a minimal example of an Adobe Express add-on built with TypeScript and React. It uses Vitest for unit testing. It
is intended to demonstrate the difficulties with testing Adobe Express add-ons of this nature. It also includes the
necessary setup for Testing Library and MSW.

## Tools

- HTML
- CSS
- React
- TypeScript
- Vitest

## Setup

1. To install the dependencies, run `npm install`.
2. To build the application, run `npm run build`.
3. To start the application, run `npm run start`.
4. To run the tests, run `npm run test`.

## Issues

When running the tests, the following error is thrown:

```
FAIL  src/lib/example.test.ts [ src/lib/example.test.ts ]
Error: Only URLs with a scheme in: file, data, and node are supported by the default ESM loader. Received protocol 'https:'
Serialized Error: { code: 'ERR_UNSUPPORTED_ESM_URL_SCHEME' }
```
