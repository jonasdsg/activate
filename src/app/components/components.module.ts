import { NgModule } from "@angular/core";
import { DialogsModule } from "./dialogs/dialogs.module";
import { FirstPageModule } from "./first-page/first-page.module";
import { SecondPageModule } from "./scnd-page/scnd-page.module";

@NgModule({
    exports:[
        FirstPageModule,
        SecondPageModule,
        DialogsModule
    ]
})
export class ComponentsModule {}