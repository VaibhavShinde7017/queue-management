import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css']
})
export class CustomerMasterComponent implements OnInit {
  customers = [
    { name: 'John Doe', contact: '1234567890', address: '123 Main St' },
    { name: 'Jane Smith', contact: '9876543210', address: '456 Elm St' },
  ];
  displayedColumns: string[] = ['name', 'contact', 'address', 'actions'];

  isModalOpen = false; // Controls modal visibility
  addCustomerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize form
    this.addCustomerForm = this.fb.group({
      name: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', Validators.required],
    });
  }

  // Open modal
  openAddCustomerModal() {
    this.isModalOpen = true;
  }

  // Close modal
  closeModal() {
    this.isModalOpen = false;
    this.addCustomerForm.reset();
  }

  // Add customer
  addCustomer() {
    if (this.addCustomerForm.valid) {
      this.customers.push(this.addCustomerForm.value);
      this.closeModal();
    }
  }

  // Delete customer
  deleteCustomer(customer: any) {
    this.customers = this.customers.filter((c) => c !== customer);
  }

  ngOnInit(): void {
  }

}
