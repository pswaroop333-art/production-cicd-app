const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    if (req.url === "/") {
        res.end(JSON.stringify({
            message: "Hello from Node.js!"
        }));
    }

});

server.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});
