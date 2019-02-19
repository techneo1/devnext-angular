import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentViaInputComponent } from './data-sharing/parent-to-child/parent-via-input.component';
import { ChildViaInputComponent } from './data-sharing/parent-to-child/child-via-input.component';
import { ChildViaViewchildComponent } from './data-sharing/child-to-parent/child-via-viewchild.component';
import { ParentViaViewchildComponent } from './data-sharing/child-to-parent/parent-via-viewchild.component';

import { ChildViaOutputEventemitterComponent } from './data-sharing/child-to-parent/child-via-output-eventemitter.component';
import { ParentViaOutputEventemitterComponent } from './data-sharing/child-to-parent/parent-via-output-eventemitter.component';
import { FirstSiblingViaServiceComponent } from './data-sharing/any-to-any/first-sibling-via-service.component';
import { SecondSiblingViaServiceComponent } from './data-sharing/any-to-any/second-sibling-via-service.component';

import { DataService } from './data-sharing/data.service';
import { DataSharingComponent } from './data-sharing/data-sharing.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState } from './state-management/store/index';

import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { MustMatchDirective } from './forms/_helpers/must-match.directive';
import { FormsComponent } from './forms/forms.component';
import { IncrementComponent } from './state-management/increment/increment.component';

import { AsyncComponent } from './async/async.component';

@NgModule({
  declarations: [AppComponent, ParentViaInputComponent, ChildViaInputComponent, ChildViaViewchildComponent, ParentViaViewchildComponent, ChildViaOutputEventemitterComponent, ParentViaOutputEventemitterComponent, FirstSiblingViaServiceComponent, SecondSiblingViaServiceComponent, DataSharingComponent, MustMatchDirective,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    FormsComponent,
    IncrementComponent, AsyncComponent],
  imports: [
    NgReduxModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension
  ) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [],
      [ devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}

