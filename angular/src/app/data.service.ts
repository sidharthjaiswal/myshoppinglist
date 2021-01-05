import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from "rxjs/operators";
import { List } from './list';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  ListArray: List[] = [];

  constructor(private http: Http) { }

  // list Functions
  getShoppingList() {
    return this.http.get('http://localhost:3000/api/lists/')
      .pipe(map(res => res.json()));
  }

  addShoppingList(newList: List) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/list/', newList, { headers: headers })
      .pipe(map(res => res.json()));

  }


  deleteShoppingList(id: string) {
    return this.http.delete('http://localhost:3000/api/list/' + id)
      .pipe(map(res => res.json()));
  }

  findShoppingList(Value: any) {
    return this.http.get('http://localhost:3000/api/searchlist/' + Value)
      .pipe(map(res => res.json()));
  }
  updateShoppingList(newList: List) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/list/' + newList._id, newList, { headers: headers })
      .pipe(map(res => res.json()));
  }

  //items functions
  addShoppingItem(newItem: Item) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/list/', newItem, { headers: headers })
      .pipe(map(res => res.json()));

  }
  searchShoppingList(listName: string) {
    return this.http.delete('http://localhost:3000/api/list/' + listName)
      .pipe(map(res => res.json()));
  }


  //refresh table after adding new list
  fillTable(list: List) {
    this.ListArray.push(list);

    console.log("List added to table");
  }
  public getProductCount(): number {
    return this.ListArray.length;
  }

}

