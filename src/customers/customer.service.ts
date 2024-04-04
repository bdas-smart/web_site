import Joi from "joi";
import CustomerModel from "../models/customer.model";
import { NotFoundError } from "../shared/app-error";

export const findOne = async (filter, projections?, options?) => {
  const item = await CustomerModel.findOne(filter, projections, options);
  return item;
};
export const createCustomerService = async (body) => {
    const item = await CustomerModel.create(body);
    return item;
  };
export const countDocuments =  async (filters)=>{
    const count =  await CustomerModel.count(filters);
    return count
}
export const findAll = async (filter, projections?, options?) => {
    const item = await CustomerModel.find(filter, projections, options);
    const count = await countDocuments(filter)
    return {rows : item, count};
  };

  export const updateOne = async (filter, body) => {
    const item = await CustomerModel.updateOne(filter, body);
    return item;
  };
  export const updateAll = async (filter, body) => {
    const item = await CustomerModel.updateMany(filter,body);
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
    const item = await CustomerModel.findByIdAndDelete(filter);
    return item;
  };

  export const validateCreateCustomer = (body) => {
    const schema = Joi.object({
        name: Joi.string().trim(),
        image: Joi.string(),
    });
    const { error } = schema.validate(body);
   
    return error
  };
  export const validateUpdateeCustomer = (body) => {
    const schema = Joi.object({
        name: Joi.string().trim(),
        image: Joi.string(),
        status : Joi.boolean()
    });
    const { error } = schema.validate(body);
   
    return error
  };





