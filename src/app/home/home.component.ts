import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'mcaffe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todos: Array<TODO>;
  selected: TODO;
  constructor(
    private shared: SharedService) { }

  ngOnInit() {
    this.shared.getTodos().subscribe((data: Array<TODO>) => {
      this.todos = data;
    });
  }

  openDialog(todo: TODO) {
    this.selected = (todo);
  }

}

interface TODO {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

}
