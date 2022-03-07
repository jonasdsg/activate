import { NgModule } from "@angular/core";
import { FirstPageModule } from "./first-page/first-page.module";
import { SecondPageModule } from "./scnd-page/scnd-page.module";

@NgModule({
    exports:[
        FirstPageModule,
        SecondPageModule,
    ]
})
export class ComponentsModule {}