import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false; // Toggle this value based on login state

  constructor() {
    // Example: Replace with real login state check
    this.isLoggedIn = !!localStorage.getItem('userToken');
  }

  ngOnInit(): void {
  }
  logout() {
    throw new Error('Method not implemented.');
 }
}
