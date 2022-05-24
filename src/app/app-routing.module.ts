import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Pages/login/login.component";
import { CadastroComponent } from "./Pages/cadastro/cadastro.component";
import { TrocarSenhaComponent } from "./Pages/trocar-senha/trocar-senha.component";
import { FirstEngineComponent } from "./Pages/first-engine/first-engine.component";
import { PageNotFoundComponent } from "./Pages/page-not-found/page-not-found.component";

const routes: Routes = [
    {path: '', redirectTo:'/home',pathMatch:'full' },
    {path: 'Login', component: LoginComponent},
    {path:'Cadastro',component: CadastroComponent},
    {path:'usernamerecovery',component: TrocarSenhaComponent},
    {path:'first-engine', component: FirstEngineComponent},

    {path:'home',
    loadChildren:() => import('./Pages/home/home.module').then((m)=>m.HomeModule),},

    {path:'sobre',
    loadChildren:() => import('./Pages/sobre/sobre.module').then((m)=>m.SobreModule),},

    {path:'**', component: PageNotFoundComponent},
];

@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}