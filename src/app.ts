import express from "express";
import "dotenv/config";
import { connect } from "mongoose";
import cors from "cors";
import AppErrorHandler from "./shared/app-error/error-handler";
import contactRoutes from "./contact-us/contact-us.routes";
import path from "path";
import uploadRoutes from "./upload/upload.routes";
import partnerRoutes from "./partners/partner.routes";
import aboutUsRoutes from "./about-us/about-us.routes";
import projectRoutes from "./projects/project.routes";
import customerRoutes from "./customers/customer.routes";
import hardwareRoutes from "./hardware/hardware.routes";
import softwareRoutes from "./software/software.routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
app.use(express.static('public'));
app.use('/upload', uploadRoutes);
app.use("/contact", contactRoutes)
app.use("/partner", partnerRoutes)
app.use("/about-us", aboutUsRoutes)
app.use("/project", projectRoutes)
app.use("/customer", customerRoutes)
app.use("/hardware", hardwareRoutes)
app.use("/software", softwareRoutes)

app.use(AppErrorHandler.errorHandler);

const PORT = process.env.PORT || 3000;

const start = async (): Promise<void> => {
  try {
    await connect(process.env.MONGO_URI || "");
    console.log(`connected to DB ...`);

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
