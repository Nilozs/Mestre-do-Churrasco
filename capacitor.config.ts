import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'MyApp',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#8c1c03", 
      androidSplashResourceName: "splash", 
      iosSplashResourceName: "splash", 
      showSpinner: true, 
      spinnerColor: "#f2e205" 
    },
  },
};

export default config;
