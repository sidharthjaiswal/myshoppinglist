import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { DataService } from '../data.service';
import { Item } from '../item';
@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  providers: [DataService]
})
export class ShoppingItemComponent implements OnInit {

  shoppingList: List[]=[];
  shoppingItem: Item[]=[];
  selectedList: any;
  toggleForm: boolean | undefined;
  
  constructor(private dataService: DataService) { }
//list functions
  getLists(){
    this.dataService.getShoppingList()
    .subscribe( lists => {
      this.shoppingList = lists;
      console.log('data from dataservice: '+ this.shoppingList[0].itemName);
    })
  };


  addList(form: { value: { listName: String, itemName: String; itemQuantity: Number; listDate: Date; }; }){
    let newList: List = {
      listName: form.value.listName,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      listDate: form.value.listDate
    }
    this.dataService.addShoppingList(newList)
    .subscribe(list=>{
      alert("list added sucessfully");
      this.getLists();
    })
  }

  deleteList(id: any){
    this.dataService.deleteShoppingList(id)
    .subscribe( data => {
      console.log(data);
      if(data.n == 1){
        for( var i =0; i< this.shoppingList.length; i++){
          if(id == this.shoppingList[i]._id){
            this.shoppingList.splice(i, 1);
          }
        }
      }
    })
  }

  editList(form: { value: { listName: String; itemName: String; itemQuantity: Number; listDate: Date; }; }){
    let newList: List = {
      _id: this.selectedList._id,
      listName: form.value.listName,
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
      listDate: form.value.listDate
    }
    this.dataService.updateShoppingList(newList)
    .subscribe( result=> {
      console.log('Orginal Item to be updated with old values: '+ result);
      this.getLists();
    });
    this.toggleForm = !this.toggleForm; 
  };

  showEditForm(list: any){
    this.selectedList = list;
    this.toggleForm = !this.toggleForm;
  }

  updateListCheckbox(list: any){
    this.dataService.updateShoppingList(list)
    .subscribe( result=> {
      console.log('Orginal Checkbox value : '+ result.itemBought);
      this.getLists();
    });
  }

  // items functions
  addItem(form: {value: { itemName: String; itemQuantity: Number;}}){
    let newItem: Item = {
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
    }
    this.dataService.updateShoppingList(this.selectedList),
    this.selectedList.itemName.push(),
    this.selectedList.itemQuantity.push()
    .subscribe((item: any)=>{
      this.getLists();
    })
  }

  editItem(form: {value: { itemName: String; itemQuantity: Number;}}){
    let newItem: Item ={
      itemName: form.value.itemName,
      itemQuantity: form.value.itemQuantity,
    }
    this.dataService.updateShoppingList(this.selectedList)
    .subscribe( result=> {
      console.log('Orginal Item to be updated with old values: '+ result);
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



  ngOnInit(): void {
    this.getLists;
  }

}
