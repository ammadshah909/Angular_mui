import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

=======
import { FormsModule } from '@angular/forms';
>>>>>>> 4c172d8013fe21c9d093dabaeb96fd8afe33dd15
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
<<<<<<< HEAD
  selector: 'app-home',
  standalone: true,

  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],

  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home {

  task: string = "";

  tasksList: string[] = [];

  // Add Task
  addTask() {

    if (this.task.trim() !== "") {

      this.tasksList.push(this.task.trim());

      this.task = "";

      console.log(this.tasksList);

    }

  }

  // Delete Task
  deleteTask(index: number) {

    this.tasksList.splice(index, 1);

  }

}
=======
  imports: [MatFormFieldModule, MatButtonModule,MatInputModule,FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  task: string = ""
  tasksList : string[] = []
  
  addTask(){
    this.tasksList.push(this.task)
    this.task = ""
    console.log(this.tasksList)
  }
}
>>>>>>> 4c172d8013fe21c9d093dabaeb96fd8afe33dd15
