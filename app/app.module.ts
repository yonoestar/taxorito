import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";

import firebase = require('nativescript-plugin-firebase');

firebase
  .init()
  .then(() => console.log('Firebase Initialised'))
  .catch(error => console.error(`Error: ${error}`));


@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
