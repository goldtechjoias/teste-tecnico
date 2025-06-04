import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    res
      .status(403)
      .json({ message: "This origin is not allowed to access the API." });
  }
  next(err);
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3333, () => {
  console.info(`Server started successfully at port 3333`);
});
