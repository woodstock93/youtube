import express from "express";
import morgan from "morgan";

// express function
const PORT = 4000;
const app = express();
const morganLogger = morgan("dev");

// request, respond given by express
const home = (req, res, next) => {
    console.log("Home Home Home ...")
    return res.send("Home Page");
}
const login = (req, res) => {
    console.log("Login Login Login ...")
    return res.send("Login Page");
}
const handleProtected = (req, res) => {
    return res.send("");
}

// middleWare + URL
app.use(morganLogger);
app.get("/", home);
app.get("/protected", handleProtected)
app.get("/login", login)

// Server Composition
const handleListening = () => console.log(`Server Listening on port http://localhost:${PORT}`)
app.listen(4000, handleListening)