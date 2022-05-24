import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./Pages/login/login.component";
import { CadastroComponent } from "./Pages/cadastro/cadastro.component";
import { HomeComponent } from "./Pages/home/home.component";
import { SobreComponent } from "./Pages/sobre/sobre.component";
import { TrocarSenhaComponent } from "./Pages/trocar-senha/trocar-senha.component";

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'Sobre', component: SobreComponent},
    {path: 'Login', component: LoginComponent},
    {path:'Cadastro',component: CadastroComponent},
    {path:'usernamerecovery',component: TrocarSenhaComponent},
];

@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}