import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, Observable } from 'rxjs';
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
      .subscribe(list => {
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
    /*this.dataService.getShoppingList().bind('new', form => {
      form.new = true;
      this.shoppingList.push(form);
    });*/
  }

 /* public loadData() {
    this.exampleDatabase = new DataService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}

*/
}

export class ExampleDataSource extends DataSource<List> {
  connect(collectionViewer: CollectionViewer): Observable<List[] | readonly List[]> {
    throw new Error('Method not implemented.');
  }
  disconnect(collectionViewer: CollectionViewer): void {
    throw new Error('Method not implemented.');
  }
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: List[] = [];
  renderedData: List[] = [];

  constructor(private _exampleDatabase: DataService,
              private _paginator: MatPaginator,
              private _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }
}