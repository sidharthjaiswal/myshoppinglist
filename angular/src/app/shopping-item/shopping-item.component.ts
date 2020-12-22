import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { DataService } from '../data.service';
import { Item } from '../item';
import { MatDialog } from '@angular/material/dialog';
import { FilterPipe, SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers: [DataService]
})
export class ShoppingItemComponent implements OnInit{ 

  shoppingList: List[]=[];
  selectedList: any;
  toggleForm: boolean | undefined;
  itemName!: String;
  listName!: String;
  itemQuantity!: Number;

  //constructor(private dataService: DataService) {}
  constructor(private dataService: DataService, public dialog: MatDialog) { }


  //list functions
  getLists() {
    this.dataService.getShoppingList()
      .subscribe(lists => {
        this.shoppingList = lists;
        console.log('data from dataservice: ' + this.shoppingList[0].itemName);
      })
  };


  addList(form: { value: { listName: String, itemName: String; itemQuantity: Number; listDate: Date; }; }) {
    let newList: List = {
      listName: form.value.listName,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      listDate: form.value.listDate
    }
    this.dataService.addShoppingList(newList)
      .subscribe(list => {
        this.getLists();
      })
  }

  deleteList(id: any) {
    this.dataService.deleteShoppingList(id)
      .subscribe(data => {
        console.log(data);
        if (data.n == 1) {
          for (var i = 0; i < this.shoppingList.length; i++) {
            if (id == this.shoppingList[i]._id) {
              this.shoppingList.splice(i, 1);
            }
          }
        }
      })
  }

  editList(form: { value: { listName: String; itemName: String; itemQuantity: Number; listDate: Date; }; }) {
    let newList: List = {
      _id: this.selectedList._id,
      listName: form.value.listName,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      listDate: form.value.listDate
    }
    this.dataService.updateShoppingList(newList)
      .subscribe(result => {
        console.log('Orginal Item to be updated with old values: ' + result);
        this.getLists();
      });
    this.toggleForm = !this.toggleForm;
  };

  showEditForm(list: any) {
    this.selectedList = list;
    this.toggleForm = !this.toggleForm;
  }

  updateListCheckbox(list: any) {
    this.dataService.updateShoppingList(list)
      .subscribe(result => {
        console.log('Orginal Checkbox value : ' + result.itemBought);
        this.getLists();
      });
  }

  searchList(search: String) {
    console.log(search);
    this.dataService.findShoppingList(search)
      .subscribe(lists => {
        this.shoppingList = lists;
        console.log('data from dataservice: ' + this.shoppingList[0].itemName);
      })
  };


  // items functions
  addItem(form: { value: { itemName: String; itemQuantity: Number; } }) {
    let newItem: Item = {
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
    }
    this.dataService.updateShoppingList(this.selectedList),
      this.selectedList.itemName.push(),
      this.selectedList.itemQuantity.push()
        .subscribe((item: any) => {
          this.getLists();
        })
  }

  editItem(form: { value: { itemName: String; itemQuantity: Number; } }) {
    let newItem: Item = {
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
    }
    this.dataService.updateShoppingList(this.selectedList)
      .subscribe(result => {
        console.log('Orginal Item to be updated with old values: ' + result);
        this.getLists();
      });
    this.toggleForm = !this.toggleForm;
  }

  /*deleteItem(form: Number;)
  {
    if (form > -1) {
      this.shoppingList.splice(form, 1);
    }
  }*/


  //Importing functions from other components

  openDialog(searchListName:string): void {
    const dialogRef = this.dialog.open(FilterPipe, {
      width: '500px',
      data: { listName: searchListName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result.listName);
    });

  }

  dataSource = new UserDataSource(this.dataService);
  displayedColumns = ['listName', 'itemName', 'itemQuantity'];


  ngOnInit(): void {
    this.getLists;
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

