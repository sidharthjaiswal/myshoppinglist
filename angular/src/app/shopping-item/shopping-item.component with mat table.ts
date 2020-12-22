import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { DataService } from '../data.service';
import { Item } from '../item';
import { MatDialog } from '@angular/material/dialog';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers: [DataService]
})
export class ShoppingItemComponent implements OnInit{ 

  dataSource = new UserDataSource(this.dataService);
  displayedColumns = ['listName', 'itemName', 'itemQuantity'];
  constructor(private dataService: DataService) { }
  
  ngOnInit() {
  }
}
export class UserDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }
  connect(): Observable<List[]> {
    console.log("Connection works");
    return this.dataService.getShoppingList();
  }
  disconnect() {}
}


