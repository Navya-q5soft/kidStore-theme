import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit  {
  products: any ;

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.getproduct();
  }
     getproduct() :void {
      let   payload = {
        "SellerID": 109,
        "ProductsFor": "user",
        "userId": 0,
        "organisationID": 0,
        "key": "",
        "keyword": "",
        "takeAll": true,
        "skip": 0,
        "take": 50,
        "categoryID": 0,
        "isShowUnpublishedProduct": false
    

      }
       
      this.apiService.getproduct(payload).subscribe({
        next: (response) => {
          this.products = response.ResponseData;
        },
        error: (error) => {
          console.error('API Error:', error);
        },
      });
    }

  


}

