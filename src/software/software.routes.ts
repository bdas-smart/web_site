import { Router } from "express";
import asyncWrapper from "../shared/async-wrapper";
import {
  getAllSoftware,
  getAllSoftwareLanding,
  deleteSoftware,
  createSoftware,
  getOneSoftware,
  getOneSoftwareLanding,
  updateOneSoftware
} from "./software.controller";

const softwareRoutes = Router();
softwareRoutes.route("/").get(asyncWrapper(getAllSoftware)).post(asyncWrapper(createSoftware));
softwareRoutes.route("/landing").get(asyncWrapper(getAllSoftwareLanding));
softwareRoutes.route("/landing/:id").get(asyncWrapper(getOneSoftwareLanding));
softwareRoutes
  .route("/:id")
  .get(asyncWrapper(getOneSoftware))
  .delete(asyncWrapper(deleteSoftware))
  .put(asyncWrapper(updateOneSoftware));

export default softwareRoutes;
