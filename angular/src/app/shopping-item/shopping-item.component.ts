import { Component, Input, ViewChild } from '@angular/core';
import { List } from '../list';
import { DataService } from '../data.service';
import { Item } from '../item';
import { MatDialog } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { Router } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { AboutAppComponent } from '../about-app/about-app.component';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers: [DataService]
})
export class ShoppingItemComponent {

  @Input() filterString = "";
  shoppingList: List[] = [];
  selectedList: any;
  toggleForm: boolean | undefined;
  itemName!: String;
  listName!: String;
  itemQuantity!: Number;
  public searchValue = "";
  public resultCount!: number;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;


  //constructor(private dataService: DataService) {}
  constructor(public dataService: DataService, public dialog: MatDialog, private router: Router) { this.resultCount = this.dataService.getProductCount(); }
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
      .subscribe(() => {
        this.getLists();
      })
  }

  deleteList(id: any) {
    this.dataService.deleteShoppingList(id)
      .subscribe(data => {
        location.reload();
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

  //Dialogs 
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '500px',
      data: { listName: this.listName, itemName: this.itemName, itemQuantity: this.itemQuantity }
    });

    dialogRef.afterClosed().subscribe(result => {
      location.reload();
      console.log('The dialog was closed');
      console.log(result.listName);
    });
  }

  openEditDialog(form: List) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: { _id: form._id, listName: form.listName, itemName: form.itemName, itemQuantity: form.itemQuantity}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log( form._id);
      console.log(result.listName);
      this.getLists();
    });
  }

  openDeleteConfirmDialog(id: any) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(confirmresult => {
      console.log(confirmresult);
      if (confirmresult) {
        console.log("Delete confirm is approved by user.");         //if dialog result is yes, delete post  
        this.deleteList(id);
      }
      else {                        //if dialog result is no, DO NOT delete post  
        console.log("Delete confirm is cancelled by user.");
      }
    })
  }

  openSearchDialog()
  {
    const dialogRef = this.dialog.open(SearchDialogComponent,
      {
        height: '600px',
        width: '500px',
      })
  }
  
  openContactDialog()
  {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      height: '600px',
      width: '500px'
    });
  }

openAboutMeDialog()
{
  const dialogRef= this.dialog.open(AboutMeComponent, {
    height: '5000px',
      width: '4000px'
  });
  
}

openAboutAppDialog()
{
  const dialogRef =  this.dialog.open(AboutAppComponent, {
    height: '5000px',
      width: '4000px'
  })
}
  //DataSources
  dataSource = new UserDataSource(this.dataService);
  displayedColumns: string[] = ['listName', 'itemName', 'itemQuantity', 'actions'];

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
