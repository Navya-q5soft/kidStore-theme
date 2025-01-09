import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://bazaarnear.in/ecomapiwithauth/api/Products/GetProductsForCustomer';

  constructor(private http: HttpClient) {}

  getproduct(payload: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 
    });

    return this.http.post(this.apiUrl, payload, { headers });
  }

  getDiscountProduct (data : any):Observable<any>{
    const headers =  new HttpHeaders({
      'Content-Type': 'application/json', 
    });
    return this.http.post('https://bazaarnear.in/ecomapi/api/Products/GetTopDiscountedProducts' , data , {headers});
  }

  getTrendingProduct(sendingData:any): Observable <any>{
    const headers = new HttpHeaders ({
      'content-type':'application/json',
    });
    return this.http.post('https://bazaarnear.in/ecomapi/api/Products/GetTrendingProducts', sendingData, {headers})
  }

  getProductDetails(detail:any): Observable<any>{
    const headers = new HttpHeaders({
      'content-type': 'application/json'
    });
    return this.http.post('https://bazaarnear.in/ecomapi/api/Products/GetProductsForCustomer',detail,{headers})
  }
 
  getImageData(datas: { OfferFor: string, SellerId: number }): Observable<any> {
    const params = new HttpParams()
      .set('OfferFor', datas.OfferFor)    
      .set('SellerId', datas.SellerId.toString()); 
    return this.http.get('https://bazaarnear.in/ecomapi/api/Seller/GetOfferImges', { params });
  }

  
}



