import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");
app.set("views", "./dist/views");

const port = 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
