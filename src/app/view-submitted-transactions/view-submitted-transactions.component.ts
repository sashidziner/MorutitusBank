import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-view-submitted-transactions',
  templateUrl: './view-submitted-transactions.component.html',
  styleUrls: ['./view-submitted-transactions.component.css']
})
export class ViewSubmittedTransactionsComponent implements OnInit {
  displayedColumns: string[] = ['customername', 'transferamount', 'transfercurrency', 'reference'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() { }
  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  transferamount: string;
  customername: string;
  transfercurrency: string;
  reference: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {customername: 'Hydrogen', transferamount: '31,275.00', transfercurrency: 'AED', reference: 'CUS-39720102019'},
  {customername: 'Helium', transferamount: '1,400.00', transfercurrency: 'EUR', reference: 'CUS-59716052019'},
  {customername: 'Lithium', transferamount: '15,250.00', transfercurrency: 'CHF', reference: 'CUS-59716052019'},
  {customername: 'Beryllium', transferamount: '6,064.00', transfercurrency: 'MUR', reference: 'CUS-390384489'},
  {customername: 'Boron', transferamount: '13,000.00', transfercurrency: 'USD', reference: 'CUS-388696435'},
  {customername: 'Carbon', transferamount: '12,800.00', transfercurrency: 'AED', reference: 'CUS-388745011'},
  {customername: 'Nitrogen', transferamount: '4,000.00', transfercurrency: 'EUR', reference: 'CUS-397944209'},
  {customername: 'Oxygen', transferamount: '20,000.00', transfercurrency: 'CHF', reference: 'CUS-397970434'},
  {customername: 'Fluorine', transferamount: '4,000.00', transfercurrency: 'MUR', reference: 'CUS-390384489'},
  {customername: 'Neon', transferamount: '3,100.00', transfercurrency: 'USD', reference: 'CUS-59716052019'},
];