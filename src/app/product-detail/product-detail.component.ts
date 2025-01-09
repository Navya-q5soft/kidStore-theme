import { Component , OnInit} from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productDetails:any;

 constructor(private apiservice : ApiService){}

 ngOnInit(): void {
   this.getProductDetails()
 }

 getProductDetails():void{
  const detail ={
    "productId": 23108,
    "SellerID": "86",
    "userId": 1625,
    "ProductsFor": "user",
    "organisationID": 0,
    "categoryID": 0,
    "take": 0,
    "skip": 0,
    "takeAll": true,
    "key": "",
    "keyword": "",
    "isShowUnpublishedProduct": false
  };

  this.apiservice.getProductDetails(detail).subscribe({
    next: (Response)=>{
      this.productDetails = Response. ResponseData;
    }
  })
 }
}
