import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent implements OnInit, OnDestroy {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor (private router: Router, private loadingService: FakeLoadingService, private authService: AuthService) {}

  ngOnInit(): void {

  }

  async login () {
    this.loading = true;
    // Promise
    /*this.loadingService.loadingWithPromise(this.email.value!, this.password.value!).then((_: boolean) => {
      this.router.navigateByUrl('/main');
    }).catch(error => {
      console.error('Incorrect amil or password!');
    }).finally(() => {
      console.log('this is executed finally')
    });*/

    // async-await
    /*try {
      const bool = await this.loadingService.loadingWithPromise(this.email.value!, this.password.value!);
      console.log(bool, 'This is executed second.');
      this.router.navigateByUrl('/main');
    } catch(error) {
      console.error('Incorrect amil or password!');
    }
    console.log('this is executed finally.');*/

    // Observable
    /*this.loadingObservation = this.loadingService.loadingWithObservable(this.email.value!, this.password.value!);
    const loadingSubscription = this.loadingService.loadingWithObservable(this.email.value!, this.password.value!)
            .subscribe(
              {next: (data: boolean) => {
                this.router.navigateByUrl('/main')
            },  error: (error) => {
              this.loading = false;
               console.error(error);
            },  complete: () => {
               console.log('finally');
               this.loading = false;
            }
          }
        );*/

        this.authService.login(this.email.value!, this.password.value!).then(cred => {
          console.log(cred);
          this.router.navigateByUrl('/main');
          this.loading = false;
        }).catch(error => {
          console.error(error);
          this.loading = false;
        });

   }

   ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }

}
