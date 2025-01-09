import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 discountProduct : any;
 trendingProduct:any;
 bannerData: any = null;
 featureproduct:any;

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getDiscountProduct();
    this.getTrendingProduct();
    this.getBanner();
    this.getFeaturedproduct();
  }

  getDiscountProduct():void{
     let data ={
      "key": "",
      "takeAll": true,
      "skip": 0,
      "take": 10,
      "sellerID": 86,
      "organisationID": 0,
      "forAdmin": false
  
     }
     this.apiService.getDiscountProduct(data).subscribe({
      next: (response) => {
        this.discountProduct = response.ResponseData;
      },
      error: (error) => {
        console.error('API Error:', error);
      },
    });
  }

  getTrendingProduct():void{
    let sendingData = {
    "key": "",
    "takeAll": true,
    "skip": 0,
    "take": 10,
    "sellerID": 86,
    "organisationID": 0,
    "forAdmin": false
    }
    this.apiService.getTrendingProduct(sendingData).subscribe({
      next :( response)=>{
        this.trendingProduct = response.ResponseData;
      },
      error: (error) => {
        console.error('API Error:', error);
      },
    })
  }

  getFeaturedproduct():void{
    let product = {
      "sellerID": "109",
    "forAdmin": true,
    "organisationID": 0,
    "takeAll": true,
    "skip": 0,
    "take": 0
    }
    this.apiService.getFeaturedproduct(product).subscribe({
      next:(Response)=>{
           this.featureproduct = Response.ResponseData;
           console.log(this.featureproduct);
      },
      error: (error) => {
        console.error('API Error:', error);
      },
    })
  }
 
  getBanner(): void {
    let datas = {
      OfferFor: 'web',
      SellerId: 109
    }

    this.apiService.getImageData(datas).subscribe({
      next: (response) => {
         
        this.bannerData = response.ResponseData; 
        console.log(this.bannerData)
      },
      error: (error) => {
        console.error('Error fetching data:', error); 
      },
    });
  }

}
