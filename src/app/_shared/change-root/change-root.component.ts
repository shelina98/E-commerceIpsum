import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-change-root',
  templateUrl: './change-root.component.html',
  styleUrls: ['./change-root.component.css']
})

export class ChangeRootComponent implements OnInit {
  title: string = ""
  message: string | undefined ;
  confirmButtonText = "Yes"
  cancelButtonText = "Cancel"
  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ChangeRootComponent>) {
      this.message = data.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
  }

  onConfirmClick(): void {
    this.router.navigate(['/login'])
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
  }

}
