// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBKXcdH4bM4DH7bF7ppymWkCRk7i6eP9tI",
    authDomain: "ngx-auth-firebase-sample.firebaseapp.com",
    databaseURL: "https://ngx-auth-firebase-sample.firebaseio.com",
    projectId: "ngx-auth-firebase-sample",
    storageBucket: "",
    messagingSenderId: "8799022632"
  }
};
