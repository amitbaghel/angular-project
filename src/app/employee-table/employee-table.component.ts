import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  selectedEmployee: Employee | null = null;

  filterText = '';
  nameFilter = '';
  jobFilter = '';
  ageFilter = '';
  startDateFilter = '';
  endDateFilter = '';

  constructor(private employeeService: EmployeeService) {
    this.employees = this.employeeService.employees;
  }

  ngOnInit(): void {
    this.filteredEmployees = [...this.employees]
  }

  addRow() {
    let employee : Employee = {
        'id': this.employees.length,
        'firstName': this.nameFilter.split(' ')[0] ? this.nameFilter.split(' ')[0] : '',
        'lastName': this.nameFilter.split(' ')[1] ? this.nameFilter.split(' ')[1] : '',
        'startDate': this.startDateFilter ? new Date(this.startDateFilter) : new Date(),
        'endDate': this.endDateFilter ? new Date(this.endDateFilter) : null,
        'job': this.jobFilter,
        'age': parseInt(this.ageFilter),
    }
    this.employees.push(employee);
    this.filteredEmployees = this.employees;
    this.resetFilter();
  }

  viewDetail(employee: Employee): void {
    this.selectedEmployee = {...employee};
  }

  closeDialog(): void {
    this.selectedEmployee = null;
  }

  deleteEmployee(id: number) {
    this.filteredEmployees = this.filteredEmployees.filter(item => item.id != id)
    this.employees = this.filteredEmployees;
  }

  applyFilter() {
    this.filteredEmployees = this.employees.filter((employee) => {
      return (
        (this.nameFilter === '' || `${employee.firstName} ${employee.lastName}`.toLowerCase().includes(this.nameFilter.toLowerCase())) &&
        (this.jobFilter === '' || employee.job.toLowerCase().includes(this.jobFilter.toLowerCase())) &&
        (this.ageFilter === '' || employee.age.toString().includes(this.ageFilter)) &&
        (this.startDateFilter === '' || employee.startDate  > new Date(this.startDateFilter)) &&
        (this.endDateFilter === '' || (employee.endDate && employee.endDate < new Date(this.endDateFilter)))
      );
    });
  }

  resetFilter() {
    this.nameFilter = '';
    this.jobFilter = '';
    this.ageFilter = '';
    this.startDateFilter = '';
    this.endDateFilter = '';
    this.applyFilter();
  }

  updateEmployee(employee: Employee): void {
    const index = this.employees.findIndex((e) => e.id === employee.id);
    if (index !== -1) {
      this.employees[index] = employee;
      this.applyFilter();
    }
  }
}
