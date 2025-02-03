import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hotel_Queue_Management';

  constructor() { }

  ngOnInit(): void { }

  get isLoggedIn(): boolean {
    return localStorage.getItem('userToken') ? true : false;
  }

}
