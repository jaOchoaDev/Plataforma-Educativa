import { Component } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //Este código es para que al hacer cambio de páginas siempre me redireccione hasta arriba de la página.
  // constructor(private router: Router) {
  //   this.router.events
  //     .pipe(filter(event => event instanceof NavigationEnd))
  //     .subscribe(() => {
  //       window.scrollTo(0, 0);
  //     });
  // }
}
