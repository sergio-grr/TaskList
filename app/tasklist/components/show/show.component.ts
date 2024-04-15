import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../services/tasklist.service';


@Component({
  selector: 'task-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {

  @Input()
  public taskList: Task[] = [];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public localStorageTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskList = this.taskService.getTasks();

    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.localStorageTasks = JSON.parse(storedTasks) as Task[];
    }
  }

  onDeleteTask(id?: string): void {
    if (!id) return;

    this.taskService.onDeleteTaskById(id);
    this.onDelete.emit(id);
  }

  onTaskCompletion(task: Task): void {
    this.taskService.onTaskCompletion(task);
  }
}
