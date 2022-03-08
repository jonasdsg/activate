import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { of } from "rxjs";

@Component({
    templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent {
    constructor(public dialogRef: MatDialogRef<ConfirmModalComponent>) {}
    
    onNoClick(){
        this.dialogRef.close(of(false));
    }

    onYesClick(){
        this.dialogRef.close(of(true));
    }
}