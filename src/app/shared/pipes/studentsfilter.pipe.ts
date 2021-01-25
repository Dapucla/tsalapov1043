import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentsfilter'
})
export class StudentsfilterPipe implements PipeTransform {

  transform(students:{name: string, surname: string}[], searchStr: string): any[] {
    let str = searchStr.split(' ');
    if(str[0]&&!str[1]) {
      return students.filter(
        student=>!student.name.toLocaleLowerCase().indexOf(str[0].toLocaleLowerCase())
      )
    }
    if (str[0]&&str[1]) {
      let filteredStudents = students.filter(
        student => student.name.toLowerCase().indexOf(str[0].toLowerCase()) !== -1
      );
      return filteredStudents.filter(
        student=>
          student.surname.toLowerCase().indexOf(str[1].toLowerCase()) !== -1
      )
    }

    return students;
  }

}
