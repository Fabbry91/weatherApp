// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherUrl: 'https://aerisweather1.p.rapidapi.com/forecasts/',
  XRapidAPIHostHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHostValue:'aerisweather1.p.rapidapi.com',
  XRapidAPIKeyHeaderName:'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue:'775c699a79msh1e33de4f97f8b2bp1249aejsn3a53e740d14f'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
