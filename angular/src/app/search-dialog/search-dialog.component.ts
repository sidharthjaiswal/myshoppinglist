import { DataSource } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DynamicTableComponent } from 'material-dynamic-table';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { List } from '../list';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent implements OnInit {
  shoppingList: List[] = [];
  
  constructor(public dataService: DataService, public dialogRef: MatDialogRef<SearchDialogComponent>) { }


  closeDialog() {
    this.dialogRef.close();
  }
  searchList(search: any) {
    console.log(search);
    this.dataService.findShoppingList(search)
      .subscribe(lists => {
        this.shoppingList = lists;
        console.log('data from dataservice: ' + this.shoppingList[1].itemName);
      })
  };
  dataSource = new UserDataSource(this.dataService);
  displayedColumns: string[] = ['listName', 'itemName', 'itemQuantity'];
  ngOnInit() {}
}
export class UserDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  connect(): Observable<List[]> {
    console.log("Connection works");
    return this.dataService.getShoppingList();
  }
  disconnect() { }
}
