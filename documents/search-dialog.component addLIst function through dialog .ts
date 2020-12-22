/*import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from '../list';
import { DataService } from '../data.service';
import { MdbTableDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css'],
  providers: [DataService]

  
})
export class SearchDialogComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true })
  mdbTable!: MdbTableDirective;
  itemName!: String;
  listName!: String;
  itemQuantity!: Number;
  searchText!: string;
  elements: any = [];
  previous!: string;
  shoppingList: List[] = [];

  
  displayedColumns: string[] = [ 'listName', 'itemName', 'itemQuantity'];
  dataSource = this.DataService.getShoppingList();
  
  constructor(public dialogRef: MatDialogRef<SearchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private DataService: DataService) { }

 

  addList(form: { value: { listName: String, itemName: String; itemQuantity: Number; listDate: Date; }; }) {
    let newList: List = {
      listName: form.value.listName,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      listDate: form.value.listDate
    }
    this.DataService.addShoppingList(newList)
      .subscribe(list => {
        alert("list added sucessfully");
      })
  }


  searchList(search: string) {
    search = this.searchText;
    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataByMultipleFields(this.searchText, ['listName', 'itemName', 'itemQuantity']);
    }
  }
  ngOnInit(): void {

  }
}

*/
