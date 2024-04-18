import { App } from '@/components/app';
import '@spectrum-web-components/theme/express/scale-medium.js';
import '@spectrum-web-components/theme/express/theme-light.js';
import '@spectrum-web-components/theme/scale-medium.js';
import '@spectrum-web-components/theme/theme-light.js';
import { Theme } from '@swc-react/theme';
import sdk from 'https://new.express.adobe.com/static/add-on-sdk/sdk.js';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

sdk.ready.then(() => {
  let rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("No root element found with id 'root'");
  }

  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Theme color="light" scale="medium" theme="express">
        <App />
      </Theme>
    </StrictMode>,
  );
});
