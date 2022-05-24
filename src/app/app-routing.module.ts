import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { CadastroComponent } from "./components/pages/cadastro/cadastro.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { SobreComponent } from "./components/pages/sobre/sobre.component";
import { FirstEngineComponent } from './components/pages/first-engine/first-engine.component';

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'Sobre', component: SobreComponent},
    {path: 'Login', component: LoginComponent},
    {path:'Cadastro',component: CadastroComponent},
    {path:'first-engine', component: FirstEngineComponent},
];

@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}