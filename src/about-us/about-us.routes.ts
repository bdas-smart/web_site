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
aboutUsRoutes.route("/").get(asyncWrapper(getAllAboutUs)).post(asyncWrapper(createAboutUs));
aboutUsRoutes.route("/landing").get(asyncWrapper(getAllAboutUsLanding));
aboutUsRoutes.route("/landing/:id").get(asyncWrapper(getOneAboutUsLanding));
aboutUsRoutes
  .route("/:id")
  .get(asyncWrapper(getOneAboutUs))
  .delete(asyncWrapper(deleteAboutUs))
  .put(asyncWrapper(updateOneAboutUs));

export default aboutUsRoutes;
