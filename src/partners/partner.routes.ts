import { Router } from "express";
import asyncWrapper from "../shared/async-wrapper";
import {
  getAllPartner,
  getAllPartnerLanding,
  deletePartner,
  createPartner,
  getOnePartner,
  getOnePartnerLanding,
  updateOnePartner
} from "./partner.controller";

const partnerRoutes = Router();
partnerRoutes.route("/").get(asyncWrapper(getAllPartner)).post(asyncWrapper(createPartner));
partnerRoutes.route("/landing").get(asyncWrapper(getAllPartnerLanding));
partnerRoutes.route("/landing/:id").get(asyncWrapper(getOnePartnerLanding));
partnerRoutes
  .route("/:id")
  .get(asyncWrapper(getOnePartner))
  .delete(asyncWrapper(deletePartner))
  .put(asyncWrapper(updateOnePartner));

export default partnerRoutes;
