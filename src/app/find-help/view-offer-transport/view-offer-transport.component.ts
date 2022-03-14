import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransportResourceService } from '@app/core/api';
import { TransportOffer } from '@app/core/api';
import { CategoryRoutingName } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
@Component({
  selector: 'app-view-offer-transport',
  templateUrl: './view-offer-transport.component.html',
  styleUrls: ['./view-offer-transport.component.scss'],
})
export class ViewOfferTransportComponent implements OnInit {
  offerId: number = 0;
  data = defaults<TransportOffer>();
  categoryRouteName = CategoryRoutingName.TRANSPORT;
  constructor(private route: ActivatedRoute, private transportResourceService: TransportResourceService) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getTransportOffer();
  }

  getTransportOffer() {
    this.transportResourceService.getTransport(this.offerId).subscribe((response) => {
      this.data = response;
    });
  }
}
