import { Component } from '@angular/core';
import { Ipost } from '../models/post.model';

@Component({
  selector: 'app-posts',
  standalone: false,
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})


export class Posts {
  posts: Ipost[] = [
    {
      "title": "Learn Angular",
      "body": "Start your journey with components and directives.",
      "id": 1,
      "userid": 1,
      "username": "Ali"
    },
    {
      "title": "Master TypeScript",
      "body": "Strong typing makes your code reliable and clean.",
      "id": 2,
      "userid": 2,
      "username": "Mona"
    },
    {
      "title": "CSS Tricks",
      "body": "Flexbox and Grid make layouts much easier.",
      "id": 3,
      "userid": 3,
      "username": "Hassan"
    },
    {
      "title": "RxJS Power",
      "body": "Handle async operations like a pro with Observables.",
      "id": 4,
      "userid": 4,
      "username": "Sara"
    },
    {
      "title": "APIs Made Simple",
      "body": "Fetch and display data seamlessly in Angular.",
      "id": 5,
      "userid": 5,
      "username": "Omar"
    },
    {
      "title": "Responsive Design",
      "body": "Make your site look great on all devices.",
      "id": 6,
      "userid": 6,
      "username": "Nour"
    },
    {
      "title": "Lazy Loading",
      "body": "Improve app performance by loading modules on demand.",
      "id": 7,
      "userid": 7,
      "username": "Adel"
    },
    {
      "title": "Angular Routing",
      "body": "Navigate between pages using the Angular Router.",
      "id": 8,
      "userid": 8,
      "username": "Yasmin"
    },
    {
      "title": "Form Validation",
      "body": "Reactive forms make validations easier and cleaner.",
      "id": 9,
      "userid": 9,
      "username": "Samir"
    },
    {
      "title": "Dark Mode",
      "body": "Add a dark theme toggle to enhance UX.",
      "id": 10,
      "userid": 10,
      "username": "Laila"
    },
    {
      "title": "Performance Tips",
      "body": "Optimize your Angular app for speed and efficiency.",
      "id": 11,
      "userid": 11,
      "username": "Karim"
    },
    {
      "title": "Deploy Angular",
      "body": "Host your app on Firebase or Netlify easily.",
      "id": 12,
      "userid": 12,
      "username": "Farah"
    }
  ];
}
