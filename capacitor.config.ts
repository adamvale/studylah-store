import type { CapacitorConfig } from "@capacitor/cli";

// The native shell loads the LIVE site — features keep shipping server-side
// with no app-store re-review. Only shell concerns (plugins, icons, splash)
// require a new native build.
const config: CapacitorConfig = {
  appId: "education.studylah.app",
  appName: "Study HQ",
  // webDir is required by the CLI but unused for a remote-URL shell; it holds
  // a single offline-fallback page.
  webDir: "native-shell",
  server: {
    url: "https://www.studylah.education/account",
    allowNavigation: ["www.studylah.education", "studylah.education"],
  },
  ios: {
    contentInset: "always",
    backgroundColor: "#161c26",
  },
  android: {
    backgroundColor: "#161c26",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      backgroundColor: "#161c26",
      showSpinner: false,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
