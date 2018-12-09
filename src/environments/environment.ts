// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false ,
  firebaseConfig : {
      apiKey: 'AIzaSyAbkpudqXMwVDax2yEynn1p0wbrr01dspM',
      authDomain: 'ebusiness-app-2e5df.firebaseapp.com',
      databaseURL: 'https://ebusiness-app-2e5df.firebaseio.com',
      projectId: 'ebusiness-app-2e5df',
      storageBucket: 'ebusiness-app-2e5df.appspot.com',
      messagingSenderId: '532773144709'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
