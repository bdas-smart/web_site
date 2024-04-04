import { Router } from "express";
import asyncWrapper from "../shared/async-wrapper";
import {
  getAllContact,
  getOneContactUs,
  deleteContactUs,
  createContactUs,
} from "./contact-us.controller";

const contactRoutes = Router();
contactRoutes.route("/").get(asyncWrapper(getAllContact));

contactRoutes
  .route("/:id")
  .get(asyncWrapper(getOneContactUs))
  .delete(asyncWrapper(deleteContactUs));
contactRoutes.route("/").post(asyncWrapper(createContactUs));

export default contactRoutes;
