import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  faGithub  = faGithub;
  faLinkedin = faLinkedin;
  constructor(public dialogRef: MatDialogRef<AboutMeComponent>) { }

  closeDialog()
  {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
