import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CanDeactivateFirstPageGuard } from "src/app/services/guards/can-deactivate-first-page.guard";
import { FirstPageComponent } from "./first-page.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'first',
                component: FirstPageComponent,
                canDeactivate: [CanDeactivateFirstPageGuard]
            }
        ])
    ]
})
export class FirstPageRouter {}