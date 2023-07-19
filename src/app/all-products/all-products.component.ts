import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})

export class AllProductsComponent implements OnInit {

  searchTerm:string=""

   isLoading:boolean = true;
  allproducts:any=[]
  errormsg:string=""


  constructor( private api:ApiService ){}


  ngOnInit(): void {
      this.getallproducts()
  }

  // getall product
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

  // deleteProduct(id:any){
  //   this.api.removeProduct(id).subscribe({
  //     next:()=>{
  //       alert("Deleted Successfully")
  //       this.getallproducts()

  //     }
  //   })

  // }
  

}
