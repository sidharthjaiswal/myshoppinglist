
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.css']
})
export class AboutAppComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AboutAppComponent>) { }

  closeDialog()
  {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
