import Joi from "joi";
import AboutUsModel from "../models/about-us.model";
import { NotFoundError } from "../shared/app-error";

export const findOne = async (filter, projections?, options?) => {
  const item = await AboutUsModel.findOne(filter, projections, options);
  return item;
};
export const createAboutUsService = async (body) => {
    const item = await AboutUsModel.create(body);
    return item;
  };
export const countDocuments =  async (filters)=>{
    const count =  await AboutUsModel.count(filters);
    return count
}
export const findAll = async (filter, projections?, options?) => {
    const item = await AboutUsModel.find(filter, projections, options);
    const count = await countDocuments(filter)
    return {rows : item, count};
  };

  export const updateOne = async (filter, body) => {
    const item = await AboutUsModel.updateOne(filter, body);
    return item;
  };
  export const updateAll = async (filter, body) => {
    const item = await AboutUsModel.updateMany(filter,body);
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
    const item = await AboutUsModel.findByIdAndDelete(filter);
    return item;
  };

  export const validateUpdateAboutUs = (body) => {
    const schema = Joi.object({
      section: Joi.object({
        title : Joi.string(),
        subTitle : Joi.string(),
        image : Joi.string(),
      }),
      story: Joi.object({
        title : Joi.string(),
        subTitle : Joi.string(),
        image : Joi.string(),
      }),
      mission: Joi.object({
        title : Joi.string(),
        subTitle : Joi.string(),
        image : Joi.string(),
      }),
      vision: Joi.object({
        title : Joi.string(),
        subTitle : Joi.string(),
        image : Joi.string(),
      }),
      residential: Joi.object({
        title : Joi.string(),
        subTitle : Joi.string(),
        image : Joi.string(),
      }),
      commmercial: Joi.object({
        title : Joi.string(),
        subTitle : Joi.string(),
        image : Joi.string(),
      }),
       
    });
    const { error } = schema.validate(body);
   
    return error
  };
  export const validateCreateAboutUs = (body) => {
    const schema = Joi.object({
      section: Joi.object({
        title : Joi.string().required(),
        subTitle : Joi.string().required(),
        image : Joi.string().required(),
      }),
      story: Joi.object({
        title : Joi.string().required(),
        subTitle : Joi.string().required(),
        image : Joi.string().required(),
      }),
      mission: Joi.object({
        title : Joi.string().required(),
        subTitle : Joi.string().required(),
        image : Joi.string().required(),
      }),
      vision: Joi.object({
        title : Joi.string().required(),
        subTitle : Joi.string().required(),
        image : Joi.string().required(),
      }),
      residential: Joi.object({
        title : Joi.string().required(),
        subTitle : Joi.string().required(),
        image : Joi.string().required(),
      }),
      commmercial: Joi.object({
        title : Joi.string().required(),
        subTitle : Joi.string().required(),
        image : Joi.string().required(),
      }),
       
    });
    const { error } = schema.validate(body);
   
    return error
  };





