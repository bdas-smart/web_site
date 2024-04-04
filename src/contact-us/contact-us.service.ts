import Joi from "joi";
import ContactEntity from "../models/contact-us.model";
import { NotFoundError } from "../shared/app-error";

export const findOne = async (filter, projections?, options?) => {
  const item = await ContactEntity.findOne(filter, projections, options);
  return item;
};
export const createContactUsService = async (body) => {
    const item = await ContactEntity.create(body);
    return item;
  };
export const countDocuments =  async (filters)=>{
    const count =  await ContactEntity.count(filters);
    return count
}
export const findAll = async (filter, projections?, options?) => {
    const item = await ContactEntity.find(filter, projections, options);
    const count = await countDocuments(filter)
    return {rows : item, count};
  };

  export const updateOne = async (filter, projections, options) => {
    const item = await ContactEntity.findByIdAndUpdate(filter, projections, options);
    return item;
  };
  export const updateAll = async (filter, body) => {
    const item = await ContactEntity.updateMany(filter,body);
    return item;
  };
  export const findOneOrThrowError = async (filter, projections?, options?) => {
    const item = await findOne(filter, projections, options)
    if(!item){
        throw new NotFoundError()
    }
    return item;
  };
  export const deleteOne = async (filter, ) => {
    const item = await ContactEntity.findByIdAndDelete(filter);
    return item;
  };

  export const validateCreateContactUs = (body) => {
    const schema = Joi.object({
        name: Joi.string().trim().required(),
        email: Joi.string().email().required(),
        reason: Joi.string().trim().required(),
    });
    const { error } = schema.validate(body);
   
    return error
  };




