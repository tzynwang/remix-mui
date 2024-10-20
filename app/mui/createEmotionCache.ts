import createCache from '@emotion/cache';

function createEmotionCache() {
  return createCache({ key: 'css' });
}

const cache = createEmotionCache();

export default cache;
