import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsLearningComponent } from '@app/rxjs-learning/rxjs-learning.component';

const routes: Routes = [
  {path: 'rxjs-learning', component: RxjsLearningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
