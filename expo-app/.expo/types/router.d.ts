/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/cats/create`; params?: Router.UnknownInputParams; } | { pathname: `/cats`; params?: Router.UnknownInputParams; } | { pathname: `/foods/create`; params?: Router.UnknownInputParams; } | { pathname: `/foods`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `/cats/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/foods/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/cats/create`; params?: Router.UnknownOutputParams; } | { pathname: `/cats`; params?: Router.UnknownOutputParams; } | { pathname: `/foods/create`; params?: Router.UnknownOutputParams; } | { pathname: `/foods`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } } | { pathname: `/cats/[id]`, params: Router.UnknownOutputParams & { id: string; } } | { pathname: `/foods/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/explore${`?${string}` | `#${string}` | ''}` | `/explore${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/cats/create${`?${string}` | `#${string}` | ''}` | `/cats${`?${string}` | `#${string}` | ''}` | `/foods/create${`?${string}` | `#${string}` | ''}` | `/foods${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/explore` | `/explore`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/cats/create`; params?: Router.UnknownInputParams; } | { pathname: `/cats`; params?: Router.UnknownInputParams; } | { pathname: `/foods/create`; params?: Router.UnknownInputParams; } | { pathname: `/foods`; params?: Router.UnknownInputParams; } | `/+not-found` | `/cats/${Router.SingleRoutePart<T>}` | `/foods/${Router.SingleRoutePart<T>}` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } } | { pathname: `/cats/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/foods/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
