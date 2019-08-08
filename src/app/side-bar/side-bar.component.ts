import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mcaffe-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveToPage(page = '') {
    this.router.navigate([page]);
  }

}
