import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NmsRegisterComponent } from './nms-register/nms-register.component';
import { SampleTaskComponent } from './sample-task/sample-task.component';
import { AuthGuard } from './services/auth.guard';
import { TskComponent } from './tsk/tsk.component';


const routes: Routes = [
  { path: 'task1', component: NmsRegisterComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'task', component: TskComponent },
  { path: 'sample', component: SampleTaskComponent },

  {
    path: 'main', loadChildren: () => import('./main/main.module')
      .then(mod => mod.MainModule), canActivate: [AuthGuard]
  },

  { path: '**', component: LoginComponent }
  // { path: ' ', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
