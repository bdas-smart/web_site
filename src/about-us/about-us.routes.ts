import { Router } from "express";
import asyncWrapper from "../shared/async-wrapper";
import {
  getAllAboutUs,
  getAllAboutUsLanding,
  deleteAboutUs,
  createAboutUs,
  getOneAboutUs,
  getOneAboutUsLanding,
  updateOneAboutUs
} from "./about-us.controller";

const aboutUsRoutes = Router();
aboutUsRoutes.route("/").get(asyncWrapper(getAllAboutUs)).post(asyncWrapper(getAllAboutUsLanding));
aboutUsRoutes.route("/landing").get(asyncWrapper(deleteAboutUs));
aboutUsRoutes.route("/landing/:id").get(asyncWrapper(createAboutUs));
aboutUsRoutes
  .route("/:id")
  .get(asyncWrapper(getOneAboutUs))
  .delete(asyncWrapper(getOneAboutUsLanding))
  .put(asyncWrapper(updateOneAboutUs));

export default aboutUsRoutes;
