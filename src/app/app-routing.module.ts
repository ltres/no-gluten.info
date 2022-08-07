import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APageComponent } from './modules/layout/components/a-page.component';
import { AnotherPageComponent } from './modules/layout/components/another-page.component';
import { LayoutModule } from './modules/layout/layout.module';

const routes: Routes = [{
  path: 'pages',
  children: [
    { path: 'another-page', component: AnotherPageComponent },
    { path: 'a-page', component: APageComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
