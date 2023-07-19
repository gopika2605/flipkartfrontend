import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productSchema } from 'src/models/productSchema';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit{

  product:productSchema={}
  // rate?:number 
  // count?:number
  isLoading:boolean = true;
  allproducts:any=[]
  errormsg:string=""

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
      this.getallproducts()
  }
  getallproducts(){
    this.api.getallproducts().subscribe({
      next:(res:any)=>{
        setTimeout(() => {

          this.allproducts = res
          this.isLoading = false
          console.log(this.allproducts);
          
          
        }, 2000);
       
      },
      error:(err:any)=>{
        console.log(err.message);
        this.errormsg = err.message
      }
    })
  }

  deleteProduct(id:any){
    this.api.removeProduct(id).subscribe({
      next:()=>{
        alert("Deleted Successfully")
        this.getallproducts()
        this.navigate.navigateByUrl("all-product")

      }
    })

  }

}
