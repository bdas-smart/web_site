import { Response, Request } from "express";
import { validateCreateContactUs, createContactUsService, findOneOrThrowError , findAll, deleteOne} from "./contact-us.service";
import { validateObjectId } from "../shared/utils/generalFunction";
import { handlePaginationSort } from "../shared/utils/handle-sort-pagination";

export const createContactUs = async (req : Request, res : Response)=>{
    const error = validateCreateContactUs(req.body)
    if(error){
        return res.status(422).json({message : error.details})
    }
    const contact = await createContactUsService(req.body)
    return res.status(200).json({data: contact})
}
export const getOneContactUs = async (req : Request, res : Response)=>{
    const {id} = req.params
    const error = validateObjectId(id)
    if(!error){
       return res.status(422).json({message : "Invalid id"})
    }
    const contact = await findOneOrThrowError({_id : id})
    return res.status(200).json({data: contact})
}
export const getAllContact = async (req : Request, res : Response)=>{
    const filters : any = {}
    const projection = {}
    const { sort, limit, skip } = handlePaginationSort(req.query)
    const {search}= req.query
    if(search){
        filters.name = { $regex: search, $options: 'i' }
    }
    const options = { sort, skip, limit }
    const { rows, count } = await findAll(filters, projection, options)
    return res.status(200).json({ rows, count })
}
export const deleteContactUs = async (req : Request, res : Response)=>{
    const {id} = req.params
    const error = validateObjectId(id)
    if(!error){
        return res.status(422).json({message : "Invalid id"})
    }
    const delted = await deleteOne({_id: id})
    return res.status(200).json({ data : delted})
}

