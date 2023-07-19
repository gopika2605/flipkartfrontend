import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  contact:any ={}

  constructor(private api:ApiService, private route:ActivatedRoute){}

   ngOnInit(): void {
    this.route.params.subscribe({
      next:(res:any)=>{
        // console.log(res);
        const{id}= res
        console.log(id);
    this.api.viewproduct(id).subscribe({
      next:(productDetails:any)=>{
        console.log(productDetails);
        this.contact = productDetails
      }

    })
        
        
      }
    })
      //  this.api.viewproduct()
   }

  


}


