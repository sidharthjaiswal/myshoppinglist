import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  providers: [ContactService]
})
export class ContactFormComponent implements OnInit {
  FormData!: FormGroup;
  constructor(public dialogRef: MatDialogRef<ContactFormComponent>,private builder: FormBuilder, private contact: ContactService) { }
  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    });
  }

  

  onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}