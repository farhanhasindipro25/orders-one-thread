export type APIResponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  data?: T | null | undefined;
};
