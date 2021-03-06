import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  { path: "menu", loadChildren: "./menu/menu.module#MenuPageModule" },
  {
    path: "cargoservices",
    loadChildren: "./cargoservices/cargoservices.module#CargoservicesPageModule"
  },

  {
    path: "request",
    loadChildren: "./request/request.module#RequestPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
