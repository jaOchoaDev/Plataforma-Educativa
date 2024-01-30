import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule } from '@coreui/icons-angular';

import { CarouselModule } from '@coreui/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  
  exports: [
    MatDialogModule,
    MatButtonModule,
    CarouselModule,
    IconModule,
    BrowserAnimationsModule
    
  ]
})
export class MaterialModule { }
