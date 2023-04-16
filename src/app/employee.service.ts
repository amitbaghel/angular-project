import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  startDate: Date;
  endDate: Date | null;
  job: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public employees: Employee[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      startDate: new Date('2020-01-01'),
      endDate: new Date('2022-01-01'),
      job: 'Software Developer',
      age: 30,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      startDate: new Date('2019-03-15'),
      endDate: null,
      job: 'Project Manager',
      age: 35,
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      startDate: new Date('2018-06-01'),
      endDate: new Date('2021-06-01'),
      job: 'UX Designer',
      age: 28,
    },
    {
      id: 4,
      firstName: 'Sara',
      lastName: 'Brown',
      startDate: new Date('2021-10-01'),
      endDate: null,
      job: 'Data Analyst',
      age: 26,
    },
    {
      id: 5,
      firstName: 'James',
      lastName: 'Williams',
      startDate: new Date('2020-05-01'),
      endDate: null,
      job: 'Software Developer',
      age: 32,
    },
    {
      id: 6,
      firstName: 'Linda',
      lastName: 'Garcia',
      startDate: new Date('2019-09-01'),
      endDate: new Date('2022-09-01'),
      job: 'Product Manager',
      age: 38,
    },
    {
      id: 7,
      firstName: 'David',
      lastName: 'Rodriguez',
      startDate: new Date('2020-02-01'),
      endDate: null,
      job: 'QA Engineer',
      age: 27,
    },
    {
      id: 8,
      firstName: 'Laura',
      lastName: 'Martinez',
      startDate: new Date('2018-08-01'),
      endDate: new Date('2021-08-01'),
      job: 'UI Designer',
      age: 29,
    },
    {
      id: 9,
      firstName: 'Chris',
      lastName: 'Lee',
      startDate: new Date('2021-04-01'),
      endDate: null,
      job: 'DevOps Engineer',
      age: 34,
    },
    {
      id: 10,
      firstName: 'Emma',
      lastName: 'Walker',
      startDate: new Date('2019-12-01'),
      endDate: new Date('2022-12-01'),
      job: 'HR Manager',
      age: 40,
    },
  ];
  

  constructor() {}

  // Implement methods for adding, updating, deleting, and filtering employees
}
