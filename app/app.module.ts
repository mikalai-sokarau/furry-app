import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterUpgradeModule, NgHybridStateDeclaration } from '@uirouter/angular-hybrid';
import angularJsModuleName from './app.module.ajs';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    // this.upgrade.bootstrap(document.documentElement, [angularJsModuleName]);
  }
}
