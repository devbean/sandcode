import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedScope: string;
  selectedMatchType: string;

  scopes = [ 'Keyword', 'Title', 'Content' ];
  types: string[] = [];

  ngOnInit(): void {
    setTimeout(() => { // This might be set by network so timeout() used.
      this.selectedScope = this.scopes[0];
    }, 2000);
  }

  onScopeChanged(scope) {
    this.types = this.getMatchType(scope);
    this.selectedMatchType = this.types[0];
    console.log(scope, this.types);
  }

  private getMatchType(scope) {
    switch (scope) {
      case 'Keyword':
        return [ 'Full Text', 'Forward', 'Backward' ];
      case 'Title':
        return [ 'Any' ];
      case 'Content':
        return [ 'Full Text', 'Any' ];
    }
  }

}
