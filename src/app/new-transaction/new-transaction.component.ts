import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {
  errorfield: any;
  erroruserfield: any;
  data: any;
  newtranCusdetails = false;
  newTransactionForm = new FormGroup({
    newtrans_reference: new FormControl(''),
    newtrans_customernumber: new FormControl(''),
    newtrans_customername: new FormControl(''),
    newtrans_customeraddress: new FormControl(''),
    newtrans_customerphnumber: new FormControl(''),
    newtrans_transferamount: new FormControl(''),
    newtrans_beneficiarybank: new FormControl(''),
    newtrans_beneficiaryaccountnumber: new FormControl(''),
    newtrans_payementdetails: new FormControl('')
  });
  constructor(private _appService: AppService, private logform: FormBuilder, private router: Router, ) { }
  newFinalTransaction() { }
  newTransaction() {
    // alert(this.newTransactionForm.value.newtrans_customernumber);
    this.newtranCusdetails = false;
    this._appService.getCusDetails(this.newTransactionForm.value.newtrans_customernumber)
      .subscribe(
        (response: any) => {
          console.log(response);
          if (response.responseXML.getCustomerInfoResponse.getCustomerInfoResult.CUST_INFO.CUST_NO == this.newTransactionForm.value.newtrans_customernumber)
            this.data = response.responseXML.getCustomerInfoResponse.getCustomerInfoResult.CUST_INFO;
          else
            this.data = {
              "SHORT_NAME": '', "STREET_ADDR": '', "CONTACT_INFO_V7": {
                "CONTACT_INFO_V7": {
                  "PHONE_LIST_V7": {
                    "PHONE_LIST_ITEM_V7": {
                      "PHONE": "",
                    }
                  }
                }
              }
            };
          this.newtranCusdetails = true;
        },
        (error) => {
          if (error.status < 200 || error.status >= 300) {
            if (error.status === 401) {
              // alert(error.error.errors.message);
              this.errorfield = error.error.errors.message;
            }
            if (error.status === 404) {
              this.erroruserfield = error.error.errors.message;
            }
          }
        }
      );
  }
  ngOnInit() {
  }
}
