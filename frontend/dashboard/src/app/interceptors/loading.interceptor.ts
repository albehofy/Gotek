import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  // Skip silent background polls (e.g. notifications polling) from showing the global progress bar
  const isSilent =
    req.headers.has('X-Silent-Request') ||
    req.headers.has('X-Polling') ||
    req.url.includes('/notifications') ||
    req.params.has('silent');

  // Strip internal custom headers before sending over the wire
  let forwardReq = req;
  if (req.headers.has('X-Silent-Request') || req.headers.has('X-Polling')) {
    forwardReq = req.clone({
      headers: req.headers.delete('X-Silent-Request').delete('X-Polling')
    });
  }

  if (!isSilent) {
    loadingService.show();
  }

  return next(forwardReq).pipe(
    finalize(() => {
      if (!isSilent) {
        loadingService.hide();
      }
    })
  );
};
