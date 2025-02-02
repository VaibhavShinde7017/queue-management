import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hotel_Queue_Management';
  isLoggedIn = false; // Toggle this value based on login state

  constructor() {
    // Example: Replace with real login state check
    // this.isLoggedIn = !!localStorage.getItem('userToken');
  }

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('userToken');
  }

}
