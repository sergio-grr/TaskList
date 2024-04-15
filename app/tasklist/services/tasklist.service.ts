import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor() {

    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks) as Task[];
    }
  }

  getTasks(): Task[] {
    return this.tasks; // Return a copy of the tasks array
  }

  onNewTask(task: Task): void {
    const newTask: Task = { id: uuid(), ...task };
    this.tasks.push(newTask);
    this.saveTasks();
  }

  onDeleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  onTaskCompletion(task: Task): void {
    task.completed = !task.completed;
    this.saveTasks();
  }

  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
