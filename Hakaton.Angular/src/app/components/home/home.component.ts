import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isEmployer: boolean;

  constructor() { }

  ngOnInit() {
    this.isEmployer = localStorage.getItem('role') == 'Employer';
  }

}
