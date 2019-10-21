import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../services/app.service';
@Component({
  selector: 'app-view-submitted-transactions',
  templateUrl: './view-submitted-transactions.component.html',
  styleUrls: ['./view-submitted-transactions.component.css']
})
export class ViewSubmittedTransactionsComponent implements OnInit {
  apiTable = false;

  displayedColumns = ['id', 'name', 'username', 'email'];
  dataSource = new MatTableDataSource<Element>();

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._appService.apiCusDetails()
      .subscribe(
        (response: any) => {
          this.dataSource = response;
          console.log(this.dataSource);
          this.apiTable = true;


        },
        (error) => {
        }
      );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
