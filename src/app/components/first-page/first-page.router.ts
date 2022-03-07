import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FirstPageComponent } from "./first-page.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'first',
                component: FirstPageComponent,
            }
        ])
    ]
})
export class FirstPageRouter {}