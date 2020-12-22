import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe, SearchDialogComponent } from './search-dialog/search-dialog.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent,
    SearchDialogComponent,
    FilterPipe
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule
  ],
  exports: [
            MatDialogModule,
            MatTableModule
            ],

  entryComponents: [
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

