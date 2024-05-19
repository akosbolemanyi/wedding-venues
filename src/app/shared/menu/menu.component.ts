import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {

  loggedInUser?: firebase.default.User | null;

  constructor (private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
      this.authService.isUserLoggedIn().subscribe(user => {
        console.log(user);
        this.loggedInUser = user;
        localStorage.setItem('user', JSON.stringify(this.loggedInUser));
      }, error => {
        console.error(error);
        localStorage.setItem('user', JSON.stringify('null'));
      });
  }

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  menuSwitch(pageValue: string) {
      this.selectedPage.emit(pageValue);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle()
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('Logged out successfully.');
      this.router.navigateByUrl('/login');
    }).catch(error => {
      console.error(error);
    })
  }
}
