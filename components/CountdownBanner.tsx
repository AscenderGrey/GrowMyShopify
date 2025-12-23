import React, { useEffect, useState } from 'react';

interface CountdownBannerProps {
  targetDate?: string; // ISO date string
  theme?: 'blue' | 'green';
}

const getTimeLeft = (target: Date) => {
  const diff = target.getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const pad = (n: number) => n.toString().padStart(2, '0');

export const CountdownBanner: React.FC<CountdownBannerProps> = ({ targetDate, theme = 'blue' }) => {
  const target = new Date(targetDate || `${new Date().getFullYear()}-11-29T00:00:00Z`); // Default: BFCM Friday UTC
  const [left, setLeft] = useState(getTimeLeft(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const bannerColor = theme === 'green' ? 'bg-green-600' : 'bg-blue-600';
  const accent = theme === 'green' ? 'from-green-600 to-emerald-600' : 'from-blue-600 to-indigo-600';

  const SHOPIFY_OAUTH_URL = 'https://admin.shopify.com/?organization_id=188510280&no_redirect=true&redirect=/oauth/redirect_from_developer_dashboard?client_id%3D66b3c54575c0a7c7ff730a88faf84417';

  return (
    <div className={`w-full ${bannerColor} text-white`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
        <span className="font-semibold text-center sm:text-left">Early Access: Limited spots for Shopify stores</span>
        <a
          href="#calendly"
          className={`ml-0 sm:ml-3 inline-flex items-center justify-center gap-2 bg-gradient-to-r ${accent} text-white px-3 py-1.5 rounded-full font-medium shadow-sm hover:shadow transition text-xs sm:text-sm`}
        >
          Apply Now
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
};

export default CountdownBanner;




