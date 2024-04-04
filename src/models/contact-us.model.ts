import mongoose, { Schema } from "mongoose";

const contactUsSchema = new Schema(
    {
        name: { type: String,},
        email: { type: String,  },
        reason: { type: String, },
     
    },
    { timestamps: true }
);

const ContactEntity = mongoose.model("ContactUs", contactUsSchema);
export default ContactEntity;