import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VirtualKeyboardComponent } from '@shared/virtual-keyboard/virtual-keyboard.component';
import { ShowResultsComponent } from './show-results/show-results.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { ShowCountdownComponent } from './show-countdown/show-countdown.component';

@NgModule({
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        VirtualKeyboardComponent,
        ShowQuestionComponent,
        ShowResultsComponent,
        ShowCountdownComponent
    ],
    declarations: [
        VirtualKeyboardComponent,
        ShowQuestionComponent,
        ShowResultsComponent,
        ShowCountdownComponent
    ]
})
export class SharedModule { }
