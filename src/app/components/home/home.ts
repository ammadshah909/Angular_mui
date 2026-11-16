import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
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

  task: string = '';
  tasksList: string[] = [];

  addTask() {
    if (this.task.trim() !== '') {
      this.tasksList.push(this.task.trim());
      this.task = '';

      console.log(this.tasksList);
    }
  }

  deleteTask(index: number) {
    this.tasksList.splice(index, 1);
  }

}