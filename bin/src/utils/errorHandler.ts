import { Response } from 'express';

export const handleError = async (
  error: unknown,
  code: number,
  res: Response,
  message?: string,
) => {
  if (error && error instanceof Error) {
    console.log(error);
    return res.status(code).json({ error: message ?? 'Internal server error' });
  }
};
