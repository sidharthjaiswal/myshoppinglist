import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { List } from '../list';
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css'],
  providers: [DataService]
})
export class AddDialogComponent implements OnInit {
  shoppingList: List[] = [];

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataService: DataService) { }

  addList(form: { value: { listName: String, itemName: String; itemQuantity: Number; listDate: Date; }; }) {
    let newList: List = {
      listName: form.value.listName,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      listDate: form.value.listDate
    }
    this.dataService.addShoppingList(newList)
      .subscribe(() => {
        this.getLists();
      })
  }

  getLists() {
    this.dataService.getShoppingList()
      .subscribe(lists => {
        this.shoppingList = lists;
        console.log('data from dataservice: ' + this.shoppingList[0].itemName);
      })
  };

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}