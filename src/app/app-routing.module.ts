import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { SobreComponent } from "./components/pages/sobre/sobre.component";

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'Sobre', component: SobreComponent},
];

@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}