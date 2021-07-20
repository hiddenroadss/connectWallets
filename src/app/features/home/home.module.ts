import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SelectWalletComponent } from './components/select-wallet/select-wallet.component';

@NgModule({
  declarations: [HomeComponent, SelectWalletComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
