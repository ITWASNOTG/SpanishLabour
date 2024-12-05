import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-HKTDXV2GG3';

export const useGoogleAnalytics = () => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      });
    };

    // Track initial page view
    handleRouteChange(window.location.pathname);
  }, []);
};

// Custom event tracking
export const trackEvent = (action: string, category: string, label: string, value?: number) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};