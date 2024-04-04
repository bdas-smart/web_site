import { Response, Request } from "express";
import { validateCreateSoftware, createSoftwareService, findOneOrThrowError , findAll, deleteOne, updateOne, validateUpdateSoftware} from "./software.service";
import { validateObjectId } from "../shared/utils/generalFunction";
import { handlePaginationSort } from "../shared/utils/handle-sort-pagination";

export const createSoftware = async (req : Request, res : Response)=>{
    const error = validateCreateSoftware(req.body)
    if(error){
        return res.status(422).json({message : error.details})
    }
    const contact = await createSoftwareService(req.body)
    return res.status(200).json({data: contact})
}
export const getOneSoftware= async (req : Request, res : Response)=>{
    const {id} = req.params
    const error = validateObjectId(id)
    if(!error){
       return res.status(422).json({message : "Invalid id"})
    }
    const contact = await findOneOrThrowError({_id : id,})
    return res.status(200).json({data: contact})
}
export const getOneSoftwareLanding = async (req : Request, res : Response)=>{
    const {id} = req.params
    const error = validateObjectId(id)
    if(!error){
       return res.status(422).json({message : "Invalid id"})
    }
    const contact = await findOneOrThrowError({_id : id, status : true})
    return res.status(200).json({data: contact})
}
export const getAllSoftware = async (req : Request, res : Response)=>{
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
export const getAllSoftwareLanding = async (req : Request, res : Response)=>{
    const filters : any = { status : true}
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
export const deleteSoftware = async (req : Request, res : Response)=>{
    const {id} = req.params
    const error = validateObjectId(id)
    if(!error){
        return res.status(422).json({message : "Invalid id"})
    }
    const delted = await deleteOne({_id: id})
    return res.status(200).json({ data : delted})
}
export const updateOneSoftware = async (req : Request, res : Response)=>{
    const {id} = req.params
    const error = validateObjectId(id)
    if(!error){
        return res.status(422).json({message : "Invalid id"})
    }
    const error2 = validateUpdateSoftware(req.body)
    if(error2){
        return res.status(422).json({message : error2.details})
    }
    const delted = await updateOne({_id: id}, req.body)
    return res.status(200).json({ data : delted})
}


