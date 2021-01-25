import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentsfilter'
})
export class StudentsfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
