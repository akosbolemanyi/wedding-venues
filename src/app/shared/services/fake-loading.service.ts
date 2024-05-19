import { Injectable } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() { }

  loadingWithPromise(email: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
    let i = 0;
    setTimeout(() => {
          if (email === 'test@gamer.com' && password === 'test123') {
            resolve(true);
          } else {
            reject(false);
          }
      }, 3000);
  });
  }

  loadingWithObservable(email: string, password: string): Observable<boolean> {
    // data stream
    return new Observable((subscriber: Subscriber<boolean>) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        // subscriber.next(i);
        if (i === 3) {
          if (email === 'test@gamer.com' && password === 'test123') {
          subscriber.next(true)
          subscriber.complete();
        } else
          subscriber.error(false);
        }
      }, 1000);
    });
  }

}