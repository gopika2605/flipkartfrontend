import { Component, OnInit } from '@angular/core';
import { productSchema } from 'src/models/productSchema';
import { ApiService } from '../services/api.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {
  allGroups:any=[]

  product:productSchema={}

  constructor(private api:ApiService, private navigate:Router ){}
  
    addProduct(){
      this.api.addProduct(this.product).subscribe({
        next:()=>{
          alert("New product added sucessfully")
          
          this.navigate.navigateByUrl("")
        }
      })

    }
}
