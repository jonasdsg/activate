import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ConfirmModalComponent } from "src/app/components/dialogs/confirm-modal/confirm-modal.component";
import { FirstPageComponent } from "src/app/components/first-page/first-page.component";
import { switchMap } from "rxjs/operators"

@Injectable()
export class CanDeactivateFirstPageGuard implements CanDeactivate<FirstPageComponent> {

    constructor(public dialog: MatDialog) {}
    
    canDeactivate(component: FirstPageComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const dialogRef = this.dialog.open(ConfirmModalComponent, {
            width: '450px',
        });
        return dialogRef.afterClosed().pipe(
            switchMap(closed => closed)
        );
    }
}