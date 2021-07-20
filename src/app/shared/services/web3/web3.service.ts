import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Web3 from 'web3';
import WalletConnectProvider from '@walletconnect/web3-provider';

declare let window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  private readonly infuraProvider =
    'https://kovan.infura.io/v3/78930ecbd18e4b26add4efaa72be700e';
  private web3: Web3;
  public userWallet$ = new BehaviorSubject('');

  constructor() {
    this.web3 = new Web3(this.infuraProvider);
  }

  public async connectMetaMask() {
    if (typeof window.ethereum === 'undefined' || !window.ethereum.isMetaMask) {
      alert('Install MetaMask');
    }
    try {
      await window.ethereum.request({
        method: 'wallet_requestPermissions',
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      this.userWallet$.next(accounts[0]);
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        this.userWallet$.next(accounts[0]);
      });
    } catch (err) {
      if (err.code === 4001) {
        alert('You need to get access to your MetaMask wallet');
      }
    }
  }

  public async connectWalletConnect() {
    //  Create WalletConnect Provider
    const provider = new WalletConnectProvider({
      infuraId: '78930ecbd18e4b26add4efaa72be700e',
    });

    //  Enable session (triggers QR Code modal)
    await provider.enable();
    // this.web3 = new Web3(provider);
  }
}
