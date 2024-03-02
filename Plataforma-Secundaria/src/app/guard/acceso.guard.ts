// import { CanActivateFn } from '@angular/router';


// export const accesoGuard: CanActivateFn = (route, state) => {
//   return true;
// };

// import { Injectable } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class accesoGuard implements CanActivateFn {

//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.login()) {
//       return true;
//     } else {
//       this.router.navigate(['/LoginAlumnos']);
//       return false;
//     }
//   }
// }
