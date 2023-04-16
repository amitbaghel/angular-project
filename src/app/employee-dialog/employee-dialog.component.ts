import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {
  @Input() employee!: Employee;
  @Output() closeDialog = new EventEmitter<void>();
  @Output() updateEmployee = new EventEmitter<Employee>();
  startDateString = '';
  endDateString = ''
  constructor() {}

  ngOnInit(): void {
    this.startDateString = this.employee.startDate ? this.formatDate(this.employee.startDate) : '';
    this.endDateString = this.employee.endDate ? this.formatDate(this.employee.endDate) : '';
  }

  onSubmit(): void {
    this.employee.startDate = this.startDateString ? new Date(this.startDateString) : new Date();
    this.employee.endDate = this.endDateString ? new Date(this.endDateString) : null ;
    this.updateEmployee.emit(this.employee);
    this.closeDialog.emit();
  }

  formatDate(date: Date): string {
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 1).toString().padStart(2, '0');
    const dd = date.getDate().toString().padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
  

}