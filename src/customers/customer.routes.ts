import { Router } from "express";
import asyncWrapper from "../shared/async-wrapper";
import {
  getAllCustomer,
  createCustomer,
  getAllCustomerLanding,
  getOneCustomerLanding,
  getOneCustomer,
  deleteCustomer,
  updateOneCustomer,
 
} from "./customer.controller";

const customerRoutes = Router();
customerRoutes.route("/").get(asyncWrapper(getAllCustomer)).post(asyncWrapper(createCustomer));
customerRoutes.route("/landing").get(asyncWrapper(getAllCustomerLanding));
customerRoutes.route("/landing/:id").get(asyncWrapper(getOneCustomerLanding));
customerRoutes
  .route("/:id")
  .get(asyncWrapper(getOneCustomer))
  .delete(asyncWrapper(deleteCustomer))
  .put(asyncWrapper(updateOneCustomer));

export default customerRoutes;
