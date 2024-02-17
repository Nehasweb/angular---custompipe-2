import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Myrev',
  standalone: true
})
export class MyrevPipe implements PipeTransform
 {

  transform(value:string) :string
   {
      let tempstring = "";
      for (let i = value.length-1; i>=0; i--)
      {
        tempstring += value[i];
      }
      return tempstring;
  }

}
