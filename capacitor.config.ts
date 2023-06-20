import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.DegreeDex',
  appName: 'DegreeDex',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
