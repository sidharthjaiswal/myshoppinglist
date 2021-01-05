import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { List } from '../list';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  shoppingList: List[] = [];
  selectedList = this.data;

  constructor(private dataService: DataService, public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  getLists() {
    this.dataService.getShoppingList()
      .subscribe(lists => {
        this.shoppingList = lists;
        console.log('data from dataservice: ' + this.shoppingList[0].listName + " "+ this.shoppingList[0].itemName + " "+ this.shoppingList[0].itemQuantity);
        //location.reload();
      })
  };
  editList(form: { value: { listName: String; itemName: String; itemQuantity: Number; listDate: Date; }; }) {
    let newList: List = {
      _id: this.data.id,
      listName: form.value.listName,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      listDate: form.value.listDate
    }
    this.dataService.updateShoppingList(newList)
      .subscribe(result => {
        console.log(form.value.listName);
        console.log('Orginal Item to be updated with old values: ' + result);
        this.getLists();
      });
  };
  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
