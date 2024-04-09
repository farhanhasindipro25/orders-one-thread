import mongoose from "mongoose";
import { GenericErrorMessage } from "../interfaces/error-message/GenericErrorMessage";
import httpStatus from "http-status";

const handleCastError = (error: mongoose.Error.CastError) => {
  const errors: GenericErrorMessage[] = [
    {
      path: error.path,
      message: "Invalid ID",
    },
  ];

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: "Cast Error",
    errorMessages: errors,
  };
};

export default handleCastError;
