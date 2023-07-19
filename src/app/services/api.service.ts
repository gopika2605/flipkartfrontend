import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productSchema } from 'src/models/productSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:string = 'https://flip123.onrender.com'

  constructor(private http:HttpClient) { }

  getallproducts(){
   return this.http.get(`${this.base_url}/product`)

  }

  // view product
  viewproduct(id:any){
    return this.http.get(`${this.base_url}/product/${id}`)
  }
  
  addProduct(product:productSchema){
    return this.http.post(`${this.base_url}/product`,product)
  
      
  }

  editProduct(id:any,body:productSchema){
   return this.http.put(`${this.base_url}/product/${id}`,body)

  }

  removeProduct(id:any){
    return this.http.delete(`${this.base_url}/product/${id}`)
  }
  
}




