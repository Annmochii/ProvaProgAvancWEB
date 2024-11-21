/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/users` | `/..\Aplicativo\constants\Colors` | `/..\Aplicativo\hooks\useColorScheme` | `/..\Aplicativo\hooks\useColorScheme.web` | `/..\Aplicativo\hooks\useThemeColor` | `/_sitemap` | `/signin` | `/signup` | `/users`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
