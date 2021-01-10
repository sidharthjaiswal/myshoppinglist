import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { ContactModel } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private mailApi = 'https://mailthis.to/sidhankit@gmail.com'

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, { responseType: 'text' })
      .pipe(
        map(
          (error: any) => {
            return error;
          }
        )
      )
  }

}