import { Response } from "express";
import { APIResponse } from "../interfaces/responses/APIResponse";

const sendResponse = <T>(res: Response, data: APIResponse<T>): void => {
  const responseData: APIResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  };
  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
