const http = require('http');

const handleALLRequests = (requestobject, responseobject) => {
  console.log("Request received");
  console.log(requestobject);

const url = requestobject.url;
if(url === '/'){
  responseobject.write("Hello, Elijah welcomes you"); //html can be typed eg; responseobject.write("<h1><h1>")
}else if(url === '/Services'){
  responseobject.write("How can I help you");
}else if(url === '/Contact'){
  responseobject.write("Contact page");
}else{
  responseobject.write("Page not found");
}  
  responseobject.end();                              //add /n to moved text to next line
}

const server = http.createServer(handleALLRequests);

server.listen(3000, '0.0.0.0', () => console.log("Hello, Elijah welcomes you and server is ready to accept request"));