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
  editIndex : number;
  isEdit : boolean;
  btnText :string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(taskForm : NgForm)
  {
    if(!this.isEdit)
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
    else
    {
      this.taskObj = new TaskList();
      this.taskObj.taskItem = taskForm.value.taskId;
      this.taskObj.date = taskForm.value.date;
      this.taskListObj[this.editIndex] = this.taskObj;
      taskForm.reset();
    }
  }

  onEdit(taskObj : TaskList)
  {
    this.editIndex = this.taskListObj.indexOf(taskObj);
    this.taskEditObj.taskItem = this.taskListObj[this.editIndex].taskItem;
    this.taskEditObj.date = this.taskListObj[this.editIndex].date;
    this.isEdit = true;
  }

   onDelete(taskObj : TaskList)
   {
     let deleteIndex = this.taskListObj.indexOf(taskObj);
     this.taskListObj.splice(deleteIndex,1);
     console.log(this.taskListObj.indexOf(taskObj));
     console.log(taskObj);
   }
}