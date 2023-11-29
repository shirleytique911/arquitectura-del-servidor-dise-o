import express from "express";
import session from "express-session";
import connectMongo from "connect-mongo";
import mongoose from "mongoose";
import handlebars from "express-handlebars";

import __dirname from "./utils.js";
import cartRouter from "./routes/cart.routes.js";
import productRouter from "./routes/product.routes.js";
import viewsRouter from "./routes/view.routes.js";
import messageRouter from "./routes/message.routes.js";
import sessionRouter from "./routes/sessions.routes.js";
import usersRouter from "./routes/users.routes.js";
import { initializatedPassport, initPassportGit } from "./config/passport.config.js";
import config from "./config/config.js";

const app = express();
const PORT = config.port;

const MongoStore = connectMongo(session);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser());

mongoose
  .connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection successful to the database");
  })
  .catch((error) => {
    console.error("Connection failed to the database" + error);
  });

app.use(
  session({
    store: new MongoStore({
      mongoUrl: config.mongoUrl,
      ttl: 3000,
    }),
    secret: config.secretKey,
    resave: false,
    saveUninitialized: false,
  })
);

initializatedPassport();
initPassportGit();
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/", viewsRouter);
app.use("/message", messageRouter);
app.use("/session", sessionRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
