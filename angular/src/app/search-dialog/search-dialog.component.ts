import { Component, HostListener, Inject, OnInit, PipeTransform, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from '../list';
import { DataService } from '../data.service';
import { MdbTableDirective } from 'angular-bootstrap-md';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { Pipe } from '@angular/core';


@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css'],
  providers: [DataService]


})
export class SearchDialogComponent implements OnInit {
  shoppingList: List[] = [];

  inventory = [
    this.dataService.getShoppingList()
  ];
  closeDialog() {
    this.dialogRef.close();
  }
  dataSource = new UserDataSource(this.dataService);
  displayedColumns = ['listName', 'itemName', 'itemQuantity'];


  /*public doFilter = (listName: string) => {
    this.dataSource.filter = listName.trim().toLocaleLowerCase();
  }*/

  constructor(public dialogRef: MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dataService: DataService) { }

  ngOnInit(): void {

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
  disconnect() { }
}


@Pipe({ name: 'listFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} lists
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(lists: any[], searchText: string): any[] {
    if (!lists) {
      return [];
    }
    if (!searchText) {
      return lists;
    }
    searchText = searchText.toLocaleLowerCase();

    return lists.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}