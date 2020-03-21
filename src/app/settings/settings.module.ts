import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';

import {SettingsPage} from './settings.page';

@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild ([
            {
                path: '',
                component: SettingsPage
            }
        ])
    ],
    declarations: [SettingsPage]
})
export class SettingsPageModule {}
