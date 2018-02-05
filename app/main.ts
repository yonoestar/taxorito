import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core/src/metadata/ng_module";
import { AppComponent } from "./app.component";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";


@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppModule);
