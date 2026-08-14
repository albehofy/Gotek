import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (route, state) => {
    const router = inject(Router);
    const userStr = localStorage.getItem('mediaglow_user');

    if (!userStr) {
      router.navigate(['/login']);
      return false;
    }

    try {
      const user = JSON.parse(userStr);
      const role = user?.role || '';

      if (allowedRoles.includes(role)) {
        return true;
      }

      // If user is client and attempting to access non-client routes (e.g. /clients, /deals, /finance, /roles)
      if (role === 'client') {
        router.navigate(['/client-portal']);
        return false;
      }

      // If user is employee attempting forbidden admin routes
      if (role === 'employee') {
        router.navigate(['/tasks']);
        return false;
      }

      router.navigate(['/dashboard']);
      return false;

    } catch (e) {
      router.navigate(['/login']);
      return false;
    }
  };
};
