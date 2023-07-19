import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { productSchema } from 'src/models/productSchema';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product:productSchema={}
  // rate?:number 
  // count?:number

  constructor(private editRoute:ActivatedRoute, private api:ApiService,private navigate:Router){

  }

  ngOnInit(): void {
      this.editRoute.params.subscribe({
        next:(parameter:any)=>{
          const{id}= parameter
          console.log(id);
          this.api.viewproduct(id).subscribe({
            next:(res:any)=>{
              console.log(res);
              this.product = res
              
              
            }
          })
        }
        
      })
  }

  updateproduct(id:any,product:any){
    // this.product.rating ={rate: this.rate, count: this.count}
    this.api.editProduct(id,product).subscribe({
      next:(res:any)=>{
        alert("Successfully updated...")
        this.navigate.navigateByUrl("")
        
    
      }
    })


  }

}
