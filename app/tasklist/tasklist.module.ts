import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ShowComponent } from './components/show/show.component';
import { AddComponent } from './components/add/add.component';
import { TaskService } from './services/tasklist.service';



@NgModule({
  declarations: [
    MainPageComponent,
    ShowComponent,
    AddComponent,

  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TaskService
  ]
})
export class TasklistModule { }
