import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-master',
  templateUrl: './staff-master.component.html',
  styleUrls: ['./staff-master.component.css']
})
export class StaffMasterComponent implements OnInit {

  staffs = [
    { name: 'John Doe', contact: '1234567890', address: '123 Main St' },
    { name: 'Jane Smith', contact: '9876543210', address: '456 Elm St' },
    { name: 'Mark Johnson', contact: '5432167890', address: '789 Pine St' },
  ];
  displayedColumns: string[] = ['name', 'contact', 'address', 'actions'];

  isModalOpen = false; // Controls modal visibility
  addStaffForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize form
    this.addStaffForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', Validators.required],
    });
  }

  // Open modal
  openAddStaffModal() {
    this.isModalOpen = true;
  }

  // Close modal
  closeModal() {
    this.isModalOpen = false;
    this.addStaffForm.reset();
  }

  // Add staff
  addStaff() {
    if (this.addStaffForm.valid) {
      this.staffs.push(this.addStaffForm.value);
      this.closeModal();
    }
  }


  ngOnInit(): void {
  }
  editStaff(staff: any) {
    // Logic to edit staff details
  }

  deleteStaff(staff: any) {
    const confirmed = confirm(`Are you sure you want to delete ${staff.name}?`);
    if (confirmed) {
      this.staffs = this.staffs.filter((c) => c !== staff);
    }
  }

}
