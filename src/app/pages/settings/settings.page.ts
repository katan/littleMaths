import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '@app/services/local-storage.service';
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
    private toast: ToastController,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.settingsForm = this.fb.group({
      randomChallenges: [this.localStorage.get('randomChallenges'), [Validators.required]],
      countdownChallenges: [this.localStorage.get('countdownChallenges'), [Validators.required]],
      languages: [this.localStorage.get('languages')]
    });
  }

  async submit() {
    if (this.settingsForm.valid) {
      this.localStorage.set('randomChallenges', this.settingsForm.get('randomChallenges').value);
      this.localStorage.set('countdownChallenges', this.settingsForm.get('countdownChallenges').value);

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
