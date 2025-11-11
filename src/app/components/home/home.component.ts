import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../common/dialog/dialog.component';
declare var require: any
  const FileSaver = require('file-saver');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 
  constructor(public dialog: MatDialog) {}
  downloadPdf() {
    let link = document.createElement("a");
    link.download = "Cv";
    link.href = "assets/files/NC Naik CV.pdf";
    link.click();
  }

  openModel(){
 this.dialog.open(DialogComponent)
  }
}
