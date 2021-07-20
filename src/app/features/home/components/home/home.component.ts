import { Component, OnInit } from '@angular/core';

import { SelectWalletComponent } from '../select-wallet/select-wallet.component';

import { MatDialog } from '@angular/material/dialog';
import { Web3Service } from 'src/app/shared/services/web3/web3.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userWallet$: Observable<string>;

  constructor(private dialog: MatDialog, private web3Service: Web3Service) {
    this.userWallet$ = this.web3Service.userWallet$.asObservable();
  }

  ngOnInit(): void {}

  chooseWallet() {
    this.dialog.open(SelectWalletComponent);
  }
}
