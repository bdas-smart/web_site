import { Router } from "express";
import asyncWrapper from "../shared/async-wrapper";
import {
  getAllHardware,
  getAllHardwareLanding,
  deleteHardware,
  createHardware,
  getOneHardware,
  getOneHardwareLanding,
  updateOneHardware
} from "./hardware.controller";

const hardwareRoutes = Router();
hardwareRoutes.route("/").get(asyncWrapper(getAllHardware)).post(asyncWrapper(createHardware));
hardwareRoutes.route("/landing").get(asyncWrapper(getAllHardwareLanding));
hardwareRoutes.route("/landing/:id").get(asyncWrapper(getOneHardwareLanding));
hardwareRoutes
  .route("/:id")
  .get(asyncWrapper(getOneHardware))
  .delete(asyncWrapper(deleteHardware))
  .put(asyncWrapper(updateOneHardware));

export default hardwareRoutes;
