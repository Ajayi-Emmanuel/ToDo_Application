import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/createTaskDto';
import mongoose from 'mongoose';
import { UpdateTaskDto } from './dto/updateTaskDto';

@Controller('tasks')
export class TasksController {
    constructor (private taskService: TasksService){}

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto){
        return this.taskService.createTask(createTaskDto)
    }

    @Get()
    getTasks(){
        return this.taskService.getTasks();
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException('Task not found', 404)
        const findTask = await this.taskService.getTaskById(id);
        if (!findTask) throw new HttpException('Task not found', 404)
            return findTask;
    }

    @Patch(':id')
    async updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException('Invalid Id', 400);
        const updatedTask = await  this.taskService.updateTask(id, updateTaskDto)

        if(!updatedTask) throw new HttpException('Task Not Found', 404)
        return updatedTask
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string){
        const isValid = mongoose.Types.ObjectId.isValid(id)
        if (!isValid) throw new HttpException('Invalid ID', 400)
        const deletedTask = await this.taskService.deleteTask(id);

        if (!deletedTask) throw new HttpException('Task not found', 404)
        return;
    }
}
