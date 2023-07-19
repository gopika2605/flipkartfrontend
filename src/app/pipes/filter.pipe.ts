import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:any,searchKey:string,key:string): any[] {
    const result:any=[]
    if(!allproducts || searchKey=="" || key==""){
      return allproducts

    }
    // allproducts[key].trim().toLowerCase().includes(searchKey.trim().toLowerCase())
    allproducts.forEach((item:any)=>{
      if(item[key].trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    })
    return result;
  }

}
