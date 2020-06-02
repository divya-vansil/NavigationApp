import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskList } from './tasklist.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  taskListObj : TaskList[] = [];
  selecteddate :Date;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(taskForm : NgForm)
  {
    this.taskListObj.push(taskForm.value.taskId);
    this.selecteddate = taskForm.value.date;
    console.log(this.selecteddate);
    console.log(taskForm.value);
    console.log(taskForm.value.taskId);
    console.log(taskForm.value.date);
  }

}
