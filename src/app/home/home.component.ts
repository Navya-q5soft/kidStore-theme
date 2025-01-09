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

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.getDiscountProduct();
    this.getTrendingProduct();
    this.getBanner()
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
