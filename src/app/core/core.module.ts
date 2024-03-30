import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialAngularModule } from '../material-angular/material-angular.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, CoreRoutingModule, MaterialAngularModule],
})
export class CoreModule {}
