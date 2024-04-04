import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
    {
        image: { type: String,},
        description: { type: String,  },
        status: { type: Boolean, default : true },
        name: { type: String},
     
    },
    { timestamps: true }
);

const ProjectEntity = mongoose.model("Project", projectSchema);
export default ProjectEntity;