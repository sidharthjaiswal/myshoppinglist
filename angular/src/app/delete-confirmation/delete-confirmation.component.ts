import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  template: `
  <h1 mat-dialog-title>Are you sure you want to delete?</h1>    
  <mat-dialog-actions>  
      <button mat-raised-button class="btn btn-success" [mat-dialog-close]="true"><mat-icon>done</mat-icon></button>  
      <button mat-raised-button class="btn btn-danger" [mat-dialog-close]="false"><mat-icon>cancel</mat-icon></button>  
  </mat-dialog-actions>  
  `,
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
