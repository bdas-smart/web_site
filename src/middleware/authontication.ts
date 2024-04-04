import * as jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"
export class Auth {
  static async isDriver(req: any, res: Response, next: NextFunction) {
    let token = req.headers.authorization?.split(' ')[1];
    if (token) {
      const payload: any = jwt.verify(token, process.env.DRIVER_SECRET || "driverSecret")
      req.user = payload
      next()
    } else {
      res.sendStatus(401)
    }

  }

  static async isCustomer(req: any, res: Response, next: NextFunction) {
    let token = req.headers.authorization?.split(' ')[1];
    if (token) {
      const payload: any = jwt.verify(token, process.env.CUSTOMER_SECRETE || "customerSecret")
      req.user = payload
      next()
    } else {
      res.sendStatus(401)
    }

  }

  static createDriverToken(driver: any) {
    return jwt.sign(driver, process.env.DRIVER_SECRET || "driverSecret", {
      expiresIn: process.env.TOKEN_EXPIRATION || '30d',
    })
  }

  static createCustomerToken(customer: any) {
    return jwt.sign({_id : customer._id, email: customer.email}, process.env.CUSTOMER_SECRETE || "customerSecret", {
      expiresIn: process.env.TOKEN_EXPIRATION || '30d',
    })

  }

}