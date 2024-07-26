import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from 'src/schemas/Task.schema';
import { CreateTaskDto } from './dto/createTaskDto';
import { UpdateTaskDto } from './dto/updateTaskDto';

@Injectable()
export class TasksService {
    constructor (@InjectModel(Task.name) private taskModel: Model<Task>){}

    createTask(createTaskDto: CreateTaskDto){
        const newTask = new this.taskModel(createTaskDto)
        return newTask.save()
    }

    getTasks(){
        return this.taskModel.find()
    }

    getTaskById(id: string){
        return this.taskModel.findById(id)
    }

    updateTask(id: string, updateTaskDto: UpdateTaskDto){
        return  this.taskModel.findByIdAndUpdate(id, updateTaskDto, {new: true})
    }

    deleteTask(id: string){
        return this.taskModel.findByIdAndDelete(id)
    }
}
