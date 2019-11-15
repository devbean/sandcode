import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  positions: string[];

  types: string[];

  @ViewChild(DxFormComponent, { static: false }) form: DxFormComponent;

  showTags = false;

  constructor(dataService: DataService) {
    dataService.getPositions()
      .then(positions => this.positions = positions);

    dataService.getTypes()
      .then(types => this.types = types);
  }

  ngAfterViewInit(): void {
    this.form.instance.itemOption('base.tags', 'visible', this.showTags);
  }

  onTypeChanged = event => {
    if (this.form) {
      this.showTags = !this.showTags;
      this.form.instance.itemOption('base.tags', 'visible', this.showTags);
    }
  }

}
