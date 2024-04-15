import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { TaskService } from '../services/tasklist.service';

@Component({
  selector: 'app-tasklist-main',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {


  constructor(public tasklistService: TaskService ) {
    
  }

}

