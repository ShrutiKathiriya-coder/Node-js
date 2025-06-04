const http = require("http");
var server = http.createServer((req, res) => {
    console.log(req.url);
    var style = `<style>
        body { 
                font-family: Arial, sans-serif;
                text-align: center; 
                background: #222; 
                color: white;
                padding: 50px; 
            }
            h1{ 
                color:rgb(133, 97, 251); 
            }
    </style>`;
    res.write("<html><head>" + style + "</head><body>");
    switch (req.url) {
        case '/':
            res.write("<h1>Home Page</h1>");
            res.write("<p>Welcome to our cool server! A home page is the main web page that a visitor will view when they navigate to a website.</p>");
            break;
        case '/about':
            res.write("<h1>About Page</h1>");
            res.write("<p>An About Us page exists to share a business’ story and history and provide a deeper connection with customers.</p>");
            break;
        case '/contacts':
            res.write("<h1>Contacts Page</h1>");
            res.write("<p>Multiple Contact Methods: Anticipate your customers' needs by offering a variety of contact details.</p>");
            break;
        case '/services':
                res.write("<h1>services Page</h1>");
                res.write("<p>Wlecome to a services page ,Multiple Contact Methods: Anticipate your customers' needs by offering a variety of contact details.</p>");
                break;
        default:
            res.write("<h1>404 Not Found</h1>");
            res.write("<p>Page doesn't exist.</p>");
    }
    res.write("</body></html>"); 
    res.end();
});
var PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server is started on http://localhost:${PORT}`);
});
