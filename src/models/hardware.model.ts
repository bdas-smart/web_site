import mongoose, { Schema } from "mongoose";

const hardwareSchema = new Schema(
    {
        image: { type: String,},
        description: { type: String,  },
        status: { type: Boolean, default : true },
        name: { type: String},
     
    },
    { timestamps: true }
);

const SoftwareEntity = mongoose.model("Hardware", hardwareSchema);
export default SoftwareEntity;