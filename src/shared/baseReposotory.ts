import mongoose,{ Model, Document , ProjectionFields, QueryOptions, Types} from 'mongoose';
import {MESSAGES} from "./messages";
import {NotFoundError} from "./app-error"

export abstract class BaseRepository<T extends Document>{
    protected model: Model<T>;
    constructor(model: Model<T>, notFoundError: string) {
        this.model = model;
    }

    async create(data: Partial<T>) : Promise<T> {
        const item =  await this.model.create(data);
        return item
        
    }

    async findOne(filters: object, projections: ProjectionFields<Model<T>>, options: QueryOptions): Promise<T | null> {
        const item = await this.model.findOne(filters, projections, options);
        return item
    }

    async findOneWithLean(filters: object, projections: ProjectionFields<Model<T>>, options: QueryOptions):Promise<any> {
        const item = await this.model.findOne(filters, projections, options).lean();
        return item
    }


    async findOneOrThrowError(filters: object, projections: ProjectionFields<Model<T>>, options: QueryOptions) {
        const item = await this.findOne(filters, projections, options)
        if (!item) {
            throw new NotFoundError()
        }
        return item
    }
    async findOneOrThrowErrorWithLean(filters: object, projections: ProjectionFields<Model<T>>, options: QueryOptions) {
        const item = await this.findOneWithLean(filters, projections, options)
        if (!item) {
            throw new NotFoundError()
        }
        return item
    }
    async count(filters:object) {
        const count = await this.model.count(filters)
        return count
    }

    async findAll(filters: object, projections: ProjectionFields<Model<T>>, options: QueryOptions) {
        const items = await this.model.find(filters, projections, options);
        const count = await this.count(filters)
        return { rows: items, count }
    }

    async updateOne(filters: object, request: object) {

        const item = await this.model.findOneAndUpdate(filters, request, { new: true });
        if (!item) {
            throw new NotFoundError()
        }
        return item
    }
    async updateMany(filters: object, request: object) {
        const item = await this.model.updateMany(filters, request);
        return item
    }

    async deleteOne(filters: object) {
        const item = await this.model.findOneAndDelete(filters);
        if (!item) {
            throw new NotFoundError()
        }
        return item
    }

    async deleteMany(filters: object) {
        const item = await this.model.deleteMany(filters);
        return item

    }


    validateObjectId = (id: any) => {
        if (!mongoose.isValidObjectId(id)) {
            return { error: "Invalid ID!" };
        }
        return {};
    };
}



