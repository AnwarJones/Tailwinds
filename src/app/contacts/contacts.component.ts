import { Component, OnInit } from '@angular/core';
import {DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { IContact } from './contacts';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
  // Map Stuff
  mapKey =  '\&key=AIzaSyCo4VnzY5ANLGiJZJetr2whLpoOXihQuVo';
  marker = '&markers=size=mid|color=blue|4934\+Olive\+Street\+Kansas\+City\,\+MO';
  center = `center=4934+Olive+Street+Kansas+City+MO`;
  size = '\&size=500x400';
  zoomLevel = `&zoom=17`;
  baseUrl = 'https://maps.googleapis.com/maps/api/staticmap\?';
  mode: string = 'place' + '?';
  parameters =  `${this.center}${this.marker}${this.size}${this.mapKey}${this.zoomLevel}`;
  source: SafeResourceUrl;
  // Business Information
  streetAddress = '4934 Olive St';
  city = 'Kansas City';
  state = 'MO';
  zipCode = '64130';
  // Contact Information
  categories = ['', 'Evaluation Inquiry', 'Speaking Engagement', 'Research Collaboration', 'Grant Writing Assistance'];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.source = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.parameters);
    console.log( this.source);
  }

}
