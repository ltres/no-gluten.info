import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test.component';
import { RouterModule } from '@angular/router';
import { AnotherPageComponent } from './components/another-page.component';
import { APageComponent } from './components/a-page.component';



@NgModule({
  declarations: [
    TestComponent,
    AnotherPageComponent,
    APageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TestComponent
  ],

})
export class LayoutModule { }
