import mongoose, { Schema } from "mongoose";

const partnerSchema = new Schema(
    {
        image: { type: String,},   
        status: { type: Boolean, default : true },
        name: { type: String},
     
    },
    { timestamps: true }
);

const PartnerEntity = mongoose.model("Partner", partnerSchema);
export default PartnerEntity;