import { Component, OnInit } from '@angular/core';
import { SourcesService } from '../sources.service';
import { Source } from 'webpack-sources';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})

export class SourcesComponent implements OnInit {

  constructor(public sourceService: SourcesService) { }

  ngOnInit() {
    this.sourceService.getSource()
      .subscribe((source: any) => {
        console.log(source);
      })
  }
}
