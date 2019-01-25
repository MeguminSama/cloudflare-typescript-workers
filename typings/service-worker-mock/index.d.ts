/// <reference types="../../node_modules/types-serviceworker" />

declare module 'service-worker-mock' {
  interface EnvOptions {
    [key: string]: string;
  }

  function makeServiceWorkerEnv(envOptions?: EnvOptions): ServiceWorkerGlobalScope;
  export default makeServiceWorkerEnv;
}