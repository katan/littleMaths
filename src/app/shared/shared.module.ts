import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualKeyboardComponent } from '@shared/virtual-keyboard/virtual-keyboard.component';
import { ShowResultsComponent } from './show-results/show-results.component';
import { ShowQuestionComponent } from './show-question/show-question.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        VirtualKeyboardComponent,
        ShowQuestionComponent,
        ShowResultsComponent
    ],
    declarations: [
        VirtualKeyboardComponent,
        ShowQuestionComponent,
        ShowResultsComponent
    ]
})
export class SharedModule { }
