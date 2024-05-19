import { Component, OnInit } from '@angular/core';
import { SitesService } from '../../shared/services/sites.service';
import { Picture } from '../../shared/models/Picture';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.scss'
})
export class SitesComponent implements OnInit {

  siteObject?: Array<Picture>;
  chosenImage: any;

  constructor (private sitesService: SitesService) {}

  ngOnInit(): void {
    this.sitesService.loadImageMeta('pictures.json').subscribe((data: Array<Picture>) => {
      console.log(data);
      this.siteObject = data;
    });
  }

  loadImage(imageObject: Picture) {
    this.chosenImage = imageObject;
  }

}
