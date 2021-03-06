import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req,res) => res.send('Hello From my ass');
const handleProfile = (req,res) => res.send("You are on my profile");


app.use(cookieParser());
app.use(bodyParser());
app.use(morgan("dev"));
app.use(helmet());
app.get("/",handleHome);
app.get("/profile",handleProfile);


app.listen(PORT,handleListening);