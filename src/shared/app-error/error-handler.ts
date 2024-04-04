
// import { InternalServerError, NotFoundError } from "../shared/app-error.mjs";
import { NextFunction, Request, Response, ErrorRequestHandler } from "express";

export default class AppErrorHandler {
    static async errorHandler (err: any, req: Request, res: Response, next: NextFunction){
        // Handle the error here
      
        // Set an appropriate HTTP status code
        res.status(err.statusCode ||500).json({
          error:err.message || 'Internal Server Error',
        });
      };

      
}
