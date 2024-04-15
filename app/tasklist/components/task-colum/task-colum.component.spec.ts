import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskColumComponent } from './task-colum.component';

describe('TaskColumComponent', () => {
  let component: TaskColumComponent;
  let fixture: ComponentFixture<TaskColumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskColumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskColumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
