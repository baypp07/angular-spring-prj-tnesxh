import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
    this.tasks.push(new Task(1, "Task1", true, "09/01/88"));
    this.tasks.push(new Task(2, "Task2", true, "09/01/80"));
    this.tasks.push(new Task(3, "Task3", false, "09/01/90"));

  }

  getDueDateLabel(task: Task) {
    return task.completed ? 'label-success' : 'label-primary';
  }
  onTaskChange(event, log) {
    console.log('task has changed');
  }
}