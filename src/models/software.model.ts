import mongoose, { Schema } from "mongoose";

const softwareSchema = new Schema(
    {
        image: { type: String,},
        description: { type: String,  },
        status: { type: Boolean, default : true },
        name: { type: String},
     
    },
    { timestamps: true }
);

const SoftwareEntity = mongoose.model("Software", softwareSchema);
export default SoftwareEntity;