import { Component, EventEmitter, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'wedding-venues';
  page = 'main';

  /*router: Router;
  constructor(router: Router) {
    /this.router = router;
  }*/

  constructor(private router: Router) {
    // paraméter adattagok
  }

  changePage(selectedPage: string) {
    this.page = selectedPage;
    this.router.navigateByUrl(selectedPage);
  }

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  menuSwitch(pageValue: string) {
      this.selectedPage.emit(pageValue);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle()
    }
}
