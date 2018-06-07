import 'zone.js';
import 'reflect-metadata';
import * as angular from 'angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { $injector } from '@uirouter/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setAngularLib } from '@angular/upgrade/static';

import { GitHubMessager } from './services/gitHubMessager/GitHubMessager.ng2.service';
import { SearchCategories } from './directives/searchCategories/searchCategoriesNg2/searchCategories.component.ng2';
import appName from './index';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  declarations: [SearchCategories],
  entryComponents: [SearchCategories],
  providers: [
    GitHubMessager,
    {
      provide: '$http',
      useFactory: ($injector: any) => $injector.get('$http'),
      deps: ['$injector']
    },
    {
      provide: '$q',
      useFactory: ($injector: any) => $injector.get('$q'),
      deps: ['$injector']
    },
    {
      provide: '$state',
      useFactory: ($injector: any) => $injector.get('$state'),
      deps: ['$injector']
    },
    {
      provide: '$stateParams',
      useFactory: ($injector: any) => $injector.get('$stateParams'),
      deps: ['$injector']
    },
    {
      provide: 'gitHubCache',
      useFactory: ($injector: any) => $injector.get('gitHubCache'),
      deps: ['$injector']
    }
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [appName]);
  }
}

setAngularLib(angular);
platformBrowserDynamic().bootstrapModule(AppModule);
