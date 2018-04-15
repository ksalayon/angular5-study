import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import {Hero} from '../hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Input() hero:Hero;

  constructor(private location: Location) { }

  ngOnInit() {
    console.log('hero on init: ', this.hero);

    // const arr = Array(20000000).fill(1).map((i, idx) => idx + 1);
    // console.log('arr: ', arr);
  }

  onSubmit() {
    this.location.back();
  }



}
