import { ZodError, ZodIssue } from 'zod';
import { GenericErrorMessage } from '../interfaces/error-message/GenericErrorMessage';

const handleZodError = (error: ZodError) => {
  const errors: GenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};

export default handleZodError;
