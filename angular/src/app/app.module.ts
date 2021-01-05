import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteConfirmationComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule,
    ScrollingModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,

  ],
  exports: [
            MatDialogModule,
            MatTableModule,
            MatToolbarModule,
            ],

  entryComponents: [
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

