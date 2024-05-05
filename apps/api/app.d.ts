// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as express from 'express';

interface Context {
  tokens?: {
    access_token: string;
    refresh_token: string;
  };
}

declare global {
  namespace Express {
    interface Request {
      context: Context;
    }
  }
}
