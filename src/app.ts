import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import APP_ROUTER from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import httpStatus from "http-status";

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", APP_ROUTER);

app.get("/api/v1", (req: Request, res: Response) => {
  res.send("Welcome to orders-one-thread");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "API Route Not Found!",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "An API route with your given path does not seem to exist!",
      },
    ],
  });
  next();
});

app.use(globalErrorHandler);
export default app;
