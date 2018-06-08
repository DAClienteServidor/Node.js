import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CustomersComponent} from '../components/customers/customers.component';
import { Customers } from '../models/customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  selectedCustomer: Customers; 
  customers: Customers[];
  readonly URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient) {  
    this.selectedCustomer = new Customers();
   }

  getCustomer() {
    return this.http.get(this.URL_API); 
  }

  postCustomer(customer:Customers) {
    return this.http.post('http://localhost:3000', customer);
  }

  putCustomer(customer: Customers) {
    return this.http.put(this.URL_API + `/${customer.id}`, Customers);
  }

  deleteCustomer(id: string) {
    return this.http.delete(this.URL_API + `/${id}`);
  }

}
