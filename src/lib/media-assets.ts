export const MEDIA_ASSETS = {
  logos: {
    mpovt: '/imgs/logos/mpovt.png',
    freakstudioTransparent: '/imgs/logos/freakstudio-transparent.svg',
    freakstudioLight: '/imgs/logos/freakstudio-light.svg',
    hTransparent: '/imgs/logos/H-transparent.svg',
    hDefault: '/imgs/logos/H-default.svg',
    placeholder: '/placeholder.svg'
  },

  priorityProducts: {
    miniPc: '/imgs/mini-pc/H-top.jpg',
    laptop: '/imgs/laptops/h-book-pro.jpg',
    monitor: '/imgs/displays/h-monitor.jpg',
    ssd: '/imgs/ssd/h-storage.jpg'
  },

  laptops: {
    p1: '/imgs/laptops/p1.png',
    p2: '/imgs/laptops/p2.png'
  },

  displays: {
    a7_03503: '/imgs/displays/A7_03503-min.jpg',
    a7_03508: '/imgs/displays/A7_03508-min.jpg',
    a7_03511: '/imgs/displays/A7_03511-min.jpg',
    a7_03513: '/imgs/displays/A7_03513-min.jpg',
    a7_03517: '/imgs/displays/A7_03517-min.png'
  },

  computers: {
    hTop1: '/imgs/mini-pc/H-top1.jpg',
    hTop3: '/imgs/mini-pc/H-top3.jpg',
    hTop4: '/imgs/mini-pc/H-top4.jpg',
    hTop5: '/imgs/mini-pc/H-top5-nobg.png'
  },

  workers: {
    elenaKononovich: '/imgs/workers/elena_kononovich.jpg',
    elenaBorovik: '/imgs/workers/elena_borovik.jpg',
    ostapenkoJulia: '/imgs/workers/ostapenko_julia.jpg',
    radchenkoAnatoly: '/imgs/workers/radchenko_anatoly.jpg'
  },

  videos: {
    hBook: '/videos/h-book.mp4',
    multiRender: '/videos/multi-render.mp4',
    hTab: '/videos/h-tab.mp4'
  }
} as const;

export const getLogoAssets = () => Object.values(MEDIA_ASSETS.logos);
export const getPriorityAssets = () => [
  ...Object.values(MEDIA_ASSETS.logos),
  ...Object.values(MEDIA_ASSETS.priorityProducts)
];
export const getAllImageAssets = () => [
  ...Object.values(MEDIA_ASSETS.logos),
  ...Object.values(MEDIA_ASSETS.priorityProducts),
  ...Object.values(MEDIA_ASSETS.laptops),
  ...Object.values(MEDIA_ASSETS.displays),
  ...Object.values(MEDIA_ASSETS.computers),
  ...Object.values(MEDIA_ASSETS.workers)
];
export const getVideoAssets = () => Object.values(MEDIA_ASSETS.videos);

export type AssetCategory = 'critical' | 'priority' | 'deferred';

export const ASSET_LOADING_CONFIG = {
  critical: {
    assets: getLogoAssets(),
    strategy: 'preload' as const,
    priority: 'high' as const
  },
  priority: {
    assets: getPriorityAssets(),
    strategy: 'prefetch' as const,
    priority: 'medium' as const
  },
  deferred: {
    assets: getAllImageAssets(),
    strategy: 'lazy' as const,
    priority: 'low' as const
  }
};

export const createPreloadLink = (
  href: string, 
  as: 'image' | 'video' | 'document' = 'image',
  crossOrigin: boolean = false
): HTMLLinkElement => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (crossOrigin) {
    link.crossOrigin = 'anonymous';
  }
  return link;
};

export const createPrefetchLink = (href: string): HTMLLinkElement => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  return link;
};
