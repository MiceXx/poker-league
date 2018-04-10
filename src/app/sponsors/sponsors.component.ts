import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss'],
})

export class SponsorsComponent implements OnInit {

  constructor() { }

  sponsorList = [
    {name: 'Select Window Coatings & Graphics',
    website: 'https://windowgraphix.ca/',
    logo: 'windowgraphix-logo.png',
  },
    {name: 'G&G General Supply',
    website: 'https://gggeneral.ca/',
    logo: 'gggeneral-logo.png',
  },
    {name: 'Carnival Canada',
    website: 'https://carnivalcanada.com/',
    logo: 'carnivalcanada-logo.png',
  },
    {name: 'Mixed Games',
    website: 'https://mixedgames.net/',
    logo: 'mixedgames-logo.jpg',
  },
    {name: 'Straight Poker Supplies',
    website: 'https://straightpokersupplies.com/',
    logo: 'straightpokersupplies-logo.png',
  },
    {name: 'Rouse Surveyors',
    website: 'https://wrousesurveyors.com/',
    logo: 'rousesurveyors-logo.png',
  },
    {name: 'Anthony Jong',
    website: 'https://anthonyjong.ca/',
    logo: 'anthonyjong-logo.png',
  },
  ];

  ngOnInit() {
  }

}
