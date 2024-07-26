import { Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import mongoose, { Date, Types } from 'mongoose';
import { User } from './User.schema';
import { Task } from './Task.schema';

@Schema()
export class Category {

    @Prop({required: false})
    categoryName: string

    @Prop({required: true})
    due_Date: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    userId: User;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Task'})
    taskId: Task;

    @Prop({type: Date})
    timeStamp: Date

} 

export const CategorySchema = SchemaFactory.createForClass(Category)
  