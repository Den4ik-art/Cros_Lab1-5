export class University {
    faculty: string;
    departmentName: string;
    headName: string;
    numberOfTeachers: number;
    address: string; 

    constructor(
      faculty: string,
      departmentName: string,
      headName: string,
      numberOfTeachers: number,
      address: string
    ) {
      this.faculty = faculty;
      this.departmentName = departmentName;
      this.headName = headName;
      this.numberOfTeachers = numberOfTeachers;
      this.address = address;
    }
}