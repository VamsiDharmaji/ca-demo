import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'forms',
  exposes: {
    './Routes': 'apps/forms/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
