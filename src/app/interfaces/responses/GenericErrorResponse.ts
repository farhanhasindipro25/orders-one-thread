import { GenericErrorMessage } from "../error-message/GenericErrorMessage";

export type GenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: GenericErrorMessage[];
};
