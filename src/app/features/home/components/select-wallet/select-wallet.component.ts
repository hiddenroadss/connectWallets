import { Component, OnInit } from '@angular/core';
import { Web3Service } from 'src/app/shared/services/web3/web3.service';

@Component({
  selector: 'app-select-wallet',
  templateUrl: './select-wallet.component.html',
  styleUrls: ['./select-wallet.component.scss'],
})
export class SelectWalletComponent implements OnInit {
  constructor(private web3Service: Web3Service) {}

  ngOnInit(): void {}

  connectMetaMask() {
    this.web3Service.connectMetaMask();
  }

  connectWalletConnect() {
    this.web3Service.connectWalletConnect();
  }
}
