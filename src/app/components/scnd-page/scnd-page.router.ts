import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SecondPageComponent } from "./scnd-page.component";

@NgModule({
    imports:[
        RouterModule.forRoot([
            {
                path: 'second',
                component: SecondPageComponent,
            }
        ])
    ]
})
export class SecondPageRouter {}