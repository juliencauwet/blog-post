import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-blog';

  posts = [
     {
         title: 'Le monde est fou',
         content: 'C\'est un monde de fous',
         loveIts: 3,
         created_at: Date

     },
    {
      title: 'La vie est folle',
      content: 'C\'est une vie de fous',
      loveIts: 1,
      created_at: Date
    }
    ];
}
