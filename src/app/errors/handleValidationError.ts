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
  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: "ValidationError",
    errorMessages: errors,
  };
};

export default handleValidationError;
