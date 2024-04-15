import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'task-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  public onNewTask: EventEmitter<Task> = new EventEmitter();


  public task: Task = {
    name:'',

  };

  emitTask():void {
    console.log(this.task);


    this.onNewTask.emit({...this.task});

    this.task.name = '';

  }


}
