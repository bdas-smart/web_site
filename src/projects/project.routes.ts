import { Router } from "express";
import asyncWrapper from "../shared/async-wrapper";
import {
  getAllProject,
  getAllProjectLanding,
  deleteProject,
  createProject,
  getOneProject,
  getOneProjectLanding,
  updateOneProject
} from "./project.controller";

const projectRoutes = Router();
projectRoutes.route("/").get(asyncWrapper(getAllProject)).post(asyncWrapper(createProject));
projectRoutes.route("/landing").get(asyncWrapper(getAllProjectLanding));
projectRoutes.route("/landing/:id").get(asyncWrapper(getOneProjectLanding));
projectRoutes
  .route("/:id")
  .get(asyncWrapper(getOneProject))
  .delete(asyncWrapper(deleteProject))
  .put(asyncWrapper(updateOneProject));

export default projectRoutes;
