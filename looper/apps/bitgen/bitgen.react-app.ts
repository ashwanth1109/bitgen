import { ReactAppOptions } from '@teambit/react';

export const BitgenApp: ReactAppOptions = {
  name: 'bitgen',
  entry: [require.resolve('./bitgen.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default BitgenApp;
