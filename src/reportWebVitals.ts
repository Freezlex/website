import { Metric } from 'web-vitals';

export default function reportWebVitals(callback: (n: Metric) => void) {
  if (callback && callback instanceof Function) {
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(callback);
      onINP(callback);
      onFCP(callback);
      onLCP(callback);
      onTTFB(callback);
    });
  }
}