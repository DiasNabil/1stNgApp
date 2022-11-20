import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SnapListComponent } from "./snap-list/snap-list.component";


const routes: Routes = [
  {path: 'snaps', component: SnapListComponent},
  {path: '', component: LandingPageComponent}
]


@NgModule ({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class appRoutingModule {}
