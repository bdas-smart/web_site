import mongoose, { Schema } from "mongoose";

const customerSchema = new Schema(
    {
        image: { type: String,},
        status: { type: Boolean, default : true },
        name: { type: String},
     
    },
    { timestamps: true }
);

const SoftwareEntity = mongoose.model("Customer", customerSchema);
export default SoftwareEntity;