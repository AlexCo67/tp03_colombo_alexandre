import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreRecherche'
})
export class RecherchePipe implements PipeTransform {

  transform(value: any, searchValue: string): any {

    if (!searchValue) return value;
    return value.filter((v: { ref: string; libelle: string; prix:number; }) => v.ref.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.libelle.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.prix.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1)

  }

}