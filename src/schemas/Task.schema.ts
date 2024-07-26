import { Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import mongoose, { Date, Types } from 'mongoose';
import { User } from './User.schema';
import { Category } from './Category.schema';

@Schema()
export class Task {

    @Prop({required: true})
    title   : string

    @Prop({required: false})
    description?: string

    @Prop({default: false})
    isCompleted: boolean;

    @Prop({required: true})
    due_Date: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    userId: User;

    @Prop({type: Types.ObjectId, ref: 'Category'})
    categoryId?: Category

    @Prop({required: false})
    priority?: String

    @Prop({type: Date})
    timeStamp: Date
} 

export const TaskSchema = SchemaFactory.createForClass(Task)
  