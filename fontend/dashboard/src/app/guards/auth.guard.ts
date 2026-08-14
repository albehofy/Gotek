import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userStr = localStorage.getItem('mediaglow_user');
  const token = localStorage.getItem('mediaglow_client_token');

  if (!userStr && !token) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
