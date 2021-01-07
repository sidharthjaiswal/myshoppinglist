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
  selectedList!: List;


  constructor(private dataService: DataService, public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  getLists() {
    this.dataService.getShoppingList()
      .subscribe(lists => {
        this.shoppingList = lists;
        location.reload();
      })
  };

  editList(form: { value: { _id: String, listName: String; itemName: String; itemQuantity: Number; listDate: Date; }; }) {
    let newList: List = {
      _id: form.value._id,
      listName: form.value.listName,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      listDate: form.value.listDate
    }
    this.dataService.updateShoppingList(newList)
      .subscribe(result => {
        console.log(newList);
        this.getLists();
      });
  };

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
