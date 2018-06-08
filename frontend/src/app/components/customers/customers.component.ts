import { Component, OnInit } from '@angular/core';

import { CustomersService } from '../../services/customers.service';
import { NgForm } from '@angular/forms';
import { Customers } from '../../models/customers';

declare var M: any;

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomersService]
})
export class CustomersComponent implements OnInit {

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.getCustomer();
  }


  addCustomer(form : NgForm){
    if(form.value.id) {
      this.customersService.putCustomer(form.value)
      .subscribe(res =>{
         
      })
    } else{
    this.customersService.postCustomer(form.value)
    .subscribe(res =>{
      this.resetForm(form);
      M.toast({html: 'Guardado satisfactoriamente'})
      this.getCustomer(); 
    });
  }
  }

  EditCustomer(Customer : Customers) {
    this.customersService.selectedCustomer= Customer;

  }

  DeleteCostumer(id: string){
    if(confirm('Seguro que quiere eliminarlo?')){
    this.customersService.deleteCustomer(id)
    .subscribe(res => {
      this.getCustomer();
      M.toast({html: 'Eliminado satisfactoriamente'})
    });
    }
  }

  getCustomer() {
    this.customersService.getCustomer()
    .subscribe(res => {
      this.customersService.customers= res as  Customers[];
      console.log(res);
    });
  }

  resetForm(form? : NgForm) {
    if(form){
      form.reset();
      this.customersService.selectedCustomer = new Customers();
    }
  }

}
