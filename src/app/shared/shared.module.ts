import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualKeyboardComponent } from '@shared/virtual-keyboard/virtual-keyboard.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        VirtualKeyboardComponent
    ],
    declarations: [
        VirtualKeyboardComponent
    ]
})
export class SharedModule {}
