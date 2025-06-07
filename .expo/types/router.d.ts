/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Map` | `/Map`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Search` | `/Search`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `/food/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Map` | `/Map`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Search` | `/Search`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } } | { pathname: `/food/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Map${`?${string}` | `#${string}` | ''}` | `/Map${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Search${`?${string}` | `#${string}` | ''}` | `/Search${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Map` | `/Map`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Search` | `/Search`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | `/+not-found` | `/food/${Router.SingleRoutePart<T>}` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `/food/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
