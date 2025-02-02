import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false; // Toggle this value based on login state

  constructor(private router:Router) {
    // Example: Replace with real login state check
    this.isLoggedIn = !!localStorage.getItem('userToken');
  }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('userToken'); // Remove token
    this.router.navigate(['/login']); // Redirect to login
  }
}
