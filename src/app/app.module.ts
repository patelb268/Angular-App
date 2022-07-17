import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelkinHeaderComponent } from '../project/welkin-header/welkin-header.component';
import { ProductBirdDiverterComponent } from '../project/product-bird-diverter/product-bird-diverter.component';
import { RellaxDirective } from '../project/directives/rellax.directive';
import {ParallaxDirective} from '../project/directives/parallax.directive';
import { SideBarComponent } from '../project/side-bar/side-bar.component';
import { ConnectUsComponent } from '../project/connect-us/connect-us.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        WelkinHeaderComponent,
        ProductBirdDiverterComponent,
        RellaxDirective,
        ParallaxDirective,
        SideBarComponent,
        ConnectUsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
