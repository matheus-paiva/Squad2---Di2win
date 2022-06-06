import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./Pages/page-not-found/page-not-found.component";



const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch:'full'},
    
    {path:'home', 
    loadChildren: () => 
    import('./Pages/home/home.module').then((m) => m.HomeModule),
    },

    {path:'sobre',
    loadChildren: () =>
    import('./Pages/sobre/sobre.module').then((m) => m.SobreModule),
    },

    {path:'first-engine',
    loadChildren: () => 
    import('./Pages/first-engine/first-engine.module').then((m) => m.FirstEngineModule),
    },

    {path:'second-engine',
    loadChildren: () => 
    import('./Pages/second-engine/second-engine.module').then((m) => m.SecondEngineModule),
    },

    {path:'third-engine',
    loadChildren: () => 
    import('./Pages/third-engine/third-engine.module').then((m) => m.ThirdEngineModule), 
    },

    {path:'fourth-engine',
    loadChildren: () => 
    import('./Pages/fourth-engine/fourth-engine.module').then((m) => m.FourthEngineModule),
    },

    {path:'plans',
    loadChildren: () => 
    import('./Pages/plans/plans.module').then((m) => m.PlansModule),
    }, 

    {path:'payment',
    loadChildren: () => 
    import('./Pages/payment/payment.module').then((m) => m.PaymentModule),
    },  

    {path:'login',
    loadChildren: () => 
    import('./Pages/auth/login/login.module').then((m) => m.LoginModule),
    },  

    {path:'registration',
    loadChildren: () => 
    import('./Pages/auth/registration/registration.module').then((m) => m.RegistrationModule),
    },  
    
    {path:'usernamerecovery',
    loadChildren: () => 
    import('./Pages/auth/usernamerecovery/usernamerecovery.module').then((m) => m.UsernamerecoveryModule
    ),
    },  
    
    {path:'**', component: PageNotFoundComponent},

];

@NgModule ({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}