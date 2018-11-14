import { Injectable } from '@angular/core';
import { Credentials } from '../models/credentials.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * Login
   *
   * Checks if user can log in. Returns an error if they cannot,
   * and their username (to be added to the store) if the can.
   * Greatly simplified for demonstration purposes.
   */
  login({ username, password }: Credentials): Observable<string> {
    // Here should be more complex logic
    if (username !== 'admin') {
      return throwError('Invalid username');
    }

    if (password !== 'admin') {
      return throwError('Invalid password');
    }

    return of(username);
  }
}
