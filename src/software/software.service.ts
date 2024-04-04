import Joi from "joi";
import SoftwareModel from "../models/software.model";
import { NotFoundError } from "../shared/app-error";

export const findOne = async (filter, projections?, options?) => {
  const item = await SoftwareModel.findOne(filter, projections, options);
  return item;
};
export const createSoftwareService = async (body) => {
    const item = await SoftwareModel.create(body);
    return item;
  };
export const countDocuments =  async (filters)=>{
    const count =  await SoftwareModel.count(filters);
    return count
}
export const findAll = async (filter, projections?, options?) => {
    const item = await SoftwareModel.find(filter, projections, options);
    const count = await countDocuments(filter)
    return {rows : item, count};
  };

  export const updateOne = async (filter, body) => {
    const item = await SoftwareModel.updateOne(filter, body);
    return item;
  };
  export const updateAll = async (filter, body) => {
    const item = await SoftwareModel.updateMany(filter,body);
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
    const item = await SoftwareModel.findByIdAndDelete(filter);
    return item;
  };

  export const validateCreateSoftware = (body) => {
    const schema = Joi.object({
        name: Joi.string().trim(),
        description  : Joi.string().trim(),
        image: Joi.string(),
    });
    const { error } = schema.validate(body);
   
    return error
  };
  export const validateUpdateSoftware = (body) => {
    const schema = Joi.object({
        name: Joi.string().trim(),
        image: Joi.string(),
        description  : Joi.string().trim(),
        status : Joi.boolean()
    });
    const { error } = schema.validate(body);
   
    return error
  };





