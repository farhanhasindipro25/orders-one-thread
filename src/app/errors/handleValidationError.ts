import mongoose from "mongoose";
import { GenericErrorResponse } from "../interfaces/responses/GenericErrorResponse";
import { GenericErrorMessage } from "../interfaces/error-message/GenericErrorMessage";
import httpStatus from "http-status";

const handleValidationError = (
  error: mongoose.Error.ValidationError
): GenericErrorResponse => {
  const errors: GenericErrorMessage[] = Object.values(error.errors).map(
    (element: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: element?.path,
        message: element?.message,
      };
    }
  );
  const statusCode = httpStatus.BAD_REQUEST;
  return {
    statusCode,
    message: "ValidationError",
    errorMessages: errors,
  };
};

export default handleValidationError;
