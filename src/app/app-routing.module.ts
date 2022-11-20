import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleSnapComponent } from "./single-snap/single-snap.component";
import { SnapListComponent } from "./snap-list/snap-list.component";




const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'snaps', component: SnapListComponent},
  {path: 'snaps/:id', component: SingleSnapComponent}
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
