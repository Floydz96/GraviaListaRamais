import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value == null)
      return "-";
    
    if(value.length < 11 || value.length > 16)
      return value;

    if(value.length == 11){
      let cpf: string[] = value.match(/.{1,3}/g);
      return cpf[0] + "." + cpf[1] + "." + cpf[2] + "-" + cpf[3];
    } else if(value.length == 16){

    }

    return value;
  }

}
