import express, { Application, Request, Response } from "express";
import cors from "cors";
import APP_ROUTER from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", APP_ROUTER);

app.get("/api/v1", (req: Request, res: Response) => {
  res.send("Test route running");
});

app.use(globalErrorHandler);
export default app;
