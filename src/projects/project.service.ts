import Joi from "joi";
import ProjectModel from "../models/projects.model";
import { NotFoundError } from "../shared/app-error";

export const findOne = async (filter, projections?, options?) => {
  const item = await ProjectModel.findOne(filter, projections, options);
  return item;
};
export const createProjectService = async (body) => {
    const item = await ProjectModel.create(body);
    return item;
  };
export const countDocuments =  async (filters)=>{
    const count =  await ProjectModel.count(filters);
    return count
}
export const findAll = async (filter, projections?, options?) => {
    const item = await ProjectModel.find(filter, projections, options);
    const count = await countDocuments(filter)
    return {rows : item, count};
  };

  export const updateOne = async (filter, body) => {
    const item = await ProjectModel.updateOne(filter, body);
    return item;
  };
  export const updateAll = async (filter, body) => {
    const item = await ProjectModel.updateMany(filter,body);
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
    const item = await ProjectModel.findByIdAndDelete(filter);
    return item;
  };

  export const validateCreateProject = (body) => {
    const schema = Joi.object({
        name: Joi.string().trim(),
        description  : Joi.string().trim(),
        image: Joi.string(),
    });
    const { error } = schema.validate(body);
   
    return error
  };
  export const validateUpdateProject = (body) => {
    const schema = Joi.object({
        name: Joi.string().trim(),
        image: Joi.string(),
        description  : Joi.string().trim(),
        status : Joi.boolean()
    });
    const { error } = schema.validate(body);
   
    return error
  };





