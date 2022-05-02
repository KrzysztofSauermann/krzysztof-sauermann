import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { RoutingService } from './services/routing.service';

@NgModule({
  imports: [RouterModule.forRoot(RoutingService.routes, { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })], //onSameUrlNavigation: 'ignore'
  exports: [RouterModule],
  providers: [CookieService]
})
export class AppRoutingModule { }
