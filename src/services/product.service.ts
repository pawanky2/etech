import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/model/product.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

getProducts():Observable<any>{
  let url = 'http://localhost:5000/products';
  // return this.http.get<any>(url)
  // .toPromise()
  //       .then(res => <Product[]>res.data)
  //       .then(data => { return data; });


  return this.http.get<any>(url);
  
}

onupload( selectedfile : any):Observable<any>{

  const fd =  new FormData();
  fd.append('image', selectedfile);
  let url = 'http://localhost:5000/upload';

  return this.http.post<any>(url ,fd);
}

addProduct(product:Product):Observable<any>{
 let url = "http://localhost:5000/product";
 return this.http.post<any>(url,product);
}

}
