import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualKeyboardComponent } from '@shared/virtual-keyboard/virtual-keyboard.component';
import { ShowResultsComponent } from './show-results/show-results.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        VirtualKeyboardComponent,
        ShowResultsComponent
    ],
    declarations: [
        VirtualKeyboardComponent,
        ShowResultsComponent
    ]
})
export class SharedModule { }
