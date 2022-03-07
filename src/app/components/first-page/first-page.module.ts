import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FirstPageComponent } from "./first-page.component";
import { FirstPageRouter } from "./first-page.router";

@NgModule({
    declarations:[FirstPageComponent],
    imports: [CommonModule,RouterModule],
    exports: [FirstPageRouter]
})
export class FirstPageModule {}