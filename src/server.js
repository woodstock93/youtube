import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRotuer";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

// express function
const PORT = 4000;
const app = express();
const morganLogger = morgan("dev");

// cwd directory is the directory which start node JS. And it is package.json path
console.log(process.cwd());

// set view engine and views path
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// middleWare
app.use(morganLogger);

// Rotuer 정의 => 함수 정의 => Router.HttpMethod(Path, callBackFuntion)
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);


// Server Composition
const handleListening = () => console.log(`Server Listening on port http://localhost:${PORT}`)
app.listen(4000, handleListening)

