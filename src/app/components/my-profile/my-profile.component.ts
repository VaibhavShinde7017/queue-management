import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
editMode: boolean = false;
user = {
  name: 'Emile Khetri',
  position: 'Manager',
  education: 'MBA',
  contact: '99999',
  address: 'Etc etc etc',
};
  constructor() { }

  ngOnInit(): void {
  }

}
