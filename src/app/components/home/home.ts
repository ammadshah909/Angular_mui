import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
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
