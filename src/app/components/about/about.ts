import { Component } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})

export class About {

  stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Customers' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '100%', label: 'Customer Satisfaction' }
  ];

  features = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'Delivering quality and excellence.'
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      description: 'Building a better future through innovation.'
    },
    {
      icon: '💎',
      title: 'Our Values',
      description: 'Honesty, creativity and customer satisfaction.'
    }
  ];

}
=======
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,About, FormsModule],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {}
>>>>>>> 4c172d8013fe21c9d093dabaeb96fd8afe33dd15
