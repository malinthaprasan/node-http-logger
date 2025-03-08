const http = require("http");
const server = http.createServer((request, response) => {
    const requestStart = Date.now();
  
    let errorMessage = null;
    let body = [];
    request.on("data", chunk => {
      body.push(chunk);
    });
    request.on("end", () => {
      body = Buffer.concat(body).toString();
    });
    request.on("error", error => {
      errorMessage = error.message;
    });
  
    response.on("finish", () => {
      const { rawHeaders, httpVersion, method, socket, url } = request;
      const { remoteAddress, remoteFamily } = socket;
  
      const { statusCode, statusMessage } = response;
      const headers = response.getHeaders();
  
      console.log(
        JSON.stringify({
          timestamp: Date.now(),
          processingTime: Date.now() - requestStart,
          rawHeaders,
          body,
          errorMessage,
          httpVersion,
          method,
          remoteAddress,
          remoteFamily,
          url,
          response: {
            statusCode,
            statusMessage,
            headers
          }
        })
      );
    });
  
    process(request, response);
  });

  const process = (request, response) => {
    setTimeout(() => {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end('{"message": "logged"}');
    }, 100);
  };

  server.listen(3000);
  console.log("Server is running on port 3000");
