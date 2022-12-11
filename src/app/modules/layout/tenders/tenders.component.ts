import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/services/auth.service';
import { TenderService } from './service/tender.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit {

  isLogged: boolean = false;
  userRole: any ;

  public offers: any[] | undefined;

  // public offers: any[] = [
  //   {
  //     tenderID : 1,
  //     bloodAmounts : [ 
  //     {
  //       bloodType: 'A+',
  //       bloodAmount: 32,
  //       priceAmount: 0
  //     }]
  //   },
  //   {
  //     tenderID : 2,
  //     bloodAmounts : [ {
  //       bloodType: 'B+',
  //       bloodAmount: 17,
  //       priceAmount: 0
  //    },
  //    {
  //     bloodType: '0+',
  //     bloodAmount: 32,
  //     priceAmount: 0
  //   }]
  //   }
  // ];

  constructor( private authService: AuthService, @Inject(DOCUMENT) document: Document,
  private ts: TenderService) {

  }

  ngOnInit(): void {
    this.authService.loginObserver.subscribe((val) => {
      this.isLogged = val;
        window.alert(this.authService.getUserName())
       
    });

    this.ts.getAllForOffers().subscribe(res => {
      this.offers = res;
    })
  }

  makeOffer(off: any) {
    off.bloodBankUsername = this.authService.getUserName();
    off.tenderOfferStatus = 2;
    this.ts.createOffer(off).subscribe((res => {
      }));
  }

}
