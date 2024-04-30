import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'colleges',
  exposes: {
    './Routes': 'apps/colleges/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
