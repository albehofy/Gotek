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
      const userRoles = Array.isArray(user?.roles) ? user.roles.map((r: any) => r.slug || r.name) : [];

      if (allowedRoles.includes(role) || userRoles.some((r: string) => allowedRoles.includes(r))) {
        return true;
      }

      // If user is client and attempting to access non-client routes
      if (role === 'client') {
        if (!state.url.startsWith('/client-portal')) {
          router.navigate(['/client-portal']);
        }
        return false;
      }

      // If user is employee attempting forbidden admin routes
      if (role === 'employee') {
        if (!state.url.startsWith('/tasks')) {
          router.navigate(['/tasks']);
        }
        return false;
      }

      // If user is account manager attempting forbidden routes (e.g. /dashboard, /tasks, etc.)
      if (role === 'account_manager') {
        if (!state.url.startsWith('/finance') && !state.url.startsWith('/clients') && !state.url.startsWith('/deals')) {
          router.navigate(['/finance']);
        }
        return false;
      }

      // Safe fallback: never redirect to the current route to prevent infinite loops
      if (!state.url.startsWith('/dashboard')) {
        router.navigate(['/dashboard']);
      }
      return false;

    } catch (e) {
      router.navigate(['/login']);
      return false;
    }
  };
};
