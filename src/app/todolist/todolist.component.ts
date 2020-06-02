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
  taskObj : TaskList;
  taskEditObj : TaskList = new TaskList();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(taskForm : NgForm)
  {
    this.taskObj = new TaskList();
    this.taskObj.taskItem = taskForm.value.taskId;
    this.taskObj.date = taskForm.value.date;
    this.taskListObj.push(this.taskObj);
    console.log(taskForm.value);
    console.log(taskForm.value.taskId);
    console.log(taskForm.value.date);
    taskForm.reset();
  }

  onEdit(taskObj : TaskList)
  {
    let editIndex = this.taskListObj.indexOf(taskObj);
    this.taskEditObj.taskItem = this.taskListObj[editIndex].taskItem;
    this.taskEditObj.date = this.taskListObj[editIndex].date;
  }

   onDelete(taskObj : TaskList)
   {
     let deleteIndex = this.taskListObj.indexOf(taskObj);
     this.taskListObj.splice(deleteIndex,1);
     console.log(this.taskListObj.indexOf(taskObj));
     console.log(taskObj);
   }

}
