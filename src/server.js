import express from "express";

// express function
const PORT = 4000;
const app = express();

// middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log("Allowed You may continue");
    next();
}

// request, respond given by express
const handleHome = (req, res, next) => {    
    return res.send("Home Page");
}
const handleLogin = (req, res, next) => {
    return res.send("Login Page");
}
const handleProtected = (req, res) => {
    return res.send("");
}

// middleWare + URL
app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected)
app.get("/login", handleLogin);

// Server Composition
const handleListening = () => console.log(`Server Listening on port http://localhost:${PORT}`)
app.listen(4000, handleListening)