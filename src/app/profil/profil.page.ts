import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ProfilsService } from '../services/profils.service';
import { Profil } from './profil.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage {
  profils$: Observable<Profil[]>;

  constructor(
    private profilsService: ProfilsService,
    private loadingCtrl: LoadingController,
  ) { }

  async ionViewDidEnter() {
    const loading = await this.loadingCtrl.create({ message: 'Loading ... '});
    loading.present();

    this.profils$ = this.profilsService.getProfils().pipe(
      tap((profils) => {
        loading.dismiss();
        return profils;
      })
    )
  }

}
