// Definir manualmente los tipos para evitar dependencia de @capacitor/cli
interface CapacitorConfig {
  appId: string;
  appName: string;
  webDir: string;
  [key: string]: any;
}

const config: CapacitorConfig = {
  appId: 'com.workprd',
  appName: 'workprd',
  webDir: 'build'
};

export default config;
