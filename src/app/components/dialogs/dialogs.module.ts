import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule, MatDialogModule } from "@angular/material";
import { ConfirmModalComponent } from "./confirm-modal/confirm-modal.component";

@NgModule({
    declarations: [ConfirmModalComponent],
    entryComponents: [ConfirmModalComponent],
    imports:[MatDialogModule,MatButtonModule,CommonModule],
})
export class DialogsModule {}