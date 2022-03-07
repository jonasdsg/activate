import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SecondPageComponent } from "./scnd-page.component";
import { SecondPageRouter } from "./scnd-page.router";

@NgModule({
    declarations:[SecondPageComponent],
    imports:[CommonModule,RouterModule],
    exports: [SecondPageRouter]
})
export class SecondPageModule {}