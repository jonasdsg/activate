import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CanDeactivateFirstPageGuard } from "src/app/services/guards/can-deactivate-first-page.guard";
import { FirstPageComponent } from "./first-page.component";
import { FirstPageRouter } from "./first-page.router";

@NgModule({
    declarations:[FirstPageComponent],
    imports: [CommonModule,RouterModule],
    exports: [FirstPageRouter],
    providers: [CanDeactivateFirstPageGuard]
})
export class FirstPageModule {}