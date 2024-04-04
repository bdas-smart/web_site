import bcrypt from "bcrypt"
import { SALT } from "../enums";
import mongoose from "mongoose";
export const hashString = async (str: string)=>{
    const salt = await bcrypt.genSalt(SALT);
    const hashedScript = await bcrypt.hash(str, salt);
}
export const validateObjectId = (id) => {
    if (!mongoose.isValidObjectId(id)) {
        return { error: "Invalid ID!" };
    }
    return true;
};