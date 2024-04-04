import Joi from "joi";
import HardWareModel from "../models/hardware.model";
import { NotFoundError } from "../shared/app-error";

export const findOne = async (filter, projections?, options?) => {
  const item = await HardWareModel.findOne(filter, projections, options);
  return item;
};
export const createHardwareService = async (body) => {
    const item = await HardWareModel.create(body);
    return item;
  };
export const countDocuments =  async (filters)=>{
    const count =  await HardWareModel.count(filters);
    return count
}
export const findAll = async (filter, projections?, options?) => {
    const item = await HardWareModel.find(filter, projections, options);
    const count = await countDocuments(filter)
    return {rows : item, count};
  };

  export const updateOne = async (filter, body) => {
    const item = await HardWareModel.updateOne(filter, body);
    return item;
  };
  export const updateAll = async (filter, body) => {
    const item = await HardWareModel.updateMany(filter,body);
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
    const item = await HardWareModel.findByIdAndDelete(filter);
    return item;
  };

  export const validateCreateHardware = (body) => {
    const schema = Joi.object({
        name: Joi.string().trim(),
        description  : Joi.string().trim(),
        image: Joi.string(),
    });
    const { error } = schema.validate(body);
   
    return error
  };
  export const validateUpdateHardware = (body) => {
    const schema = Joi.object({
        name: Joi.string().trim(),
        image: Joi.string(),
        description  : Joi.string().trim(),
        status : Joi.boolean()
    });
    const { error } = schema.validate(body);
   
    return error
  };





