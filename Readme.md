# HTTP Request Logger

A simple Node.js server that logs detailed information about incoming HTTP requests.

## Features

- Logs comprehensive request details including:
  - Timestamps
  - Processing time
  - Headers
  - Request body
  - HTTP version
  - Method
  - Remote address info
  - URL
  - Response details (status code, headers)
- JSON formatted logs
- Basic request handling with configurable delay

## Installation

1. Clone this repository
2. Run `npm install`

## Usage

Start the server:

```bash
node server.js
```

## Start using docker:

```bash
docker build -t http-request-logger .
docker run -p 3000:3000 http-request-logger
```
## Use the docker image in docker hub

```bash
docker run -p 3000:3000 malinthaprasan/http-request-logger:latest
```


