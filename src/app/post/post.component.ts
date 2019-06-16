import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() date: Date;
  @Input() loveIts: number;


  constructor() {
    this.date = new Date();
  }

  ngOnInit() {
    this.loveIts = 0;
  }

  onLike() {
    this.loveIts ++;
    console.log(this.loveIts);
  }

  onDislike() {
    this.loveIts --;
    console.log(this.loveIts);
  }

}
