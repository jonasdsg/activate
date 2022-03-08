import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { FirstPageComponent } from "src/app/components/first-page/first-page.component";

@Injectable()
export class CanDeactivateFirstPageGuard implements CanDeactivate<FirstPageComponent> {
    
    canDeactivate(component: FirstPageComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return prompt("Deseja sair ?").toLowerCase().includes("s");
    }
}