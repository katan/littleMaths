import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '@app/services/settings.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {
  settingsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private settings: SettingsService,
    private toast: ToastController
  ) { }

  ngOnInit() {
    this.settingsForm = this.fb.group({
      randomChallenges: [this.settings.get('randomChallenges'), [Validators.required]],
      countdownChallenges: [this.settings.get('countdownChallenges'), [Validators.required]],
      languages: [this.settings.get('languages')]
    });
  }

  async submit() {
    if (this.settingsForm.valid) {
      this.settings.set('randomChallenges', this.settingsForm.get('randomChallenges').value);
      this.settings.set('countdownChallenges', this.settingsForm.get('countdownChallenges').value);

      const toast = await this.toast.create({
        message: 'Updated successfully',
        translucent: true,
        position: 'top',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    }
  }
}
