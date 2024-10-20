/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import emotionCache from './mui/createEmotionCache';
import theme from './mui/theme';

startTransition(() => {
  hydrateRoot(
    document,
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <StrictMode>
          <RemixBrowser />
        </StrictMode>
      </ThemeProvider>
    </CacheProvider>
  );
});
