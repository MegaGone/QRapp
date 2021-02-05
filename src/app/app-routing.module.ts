import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratorComponent } from './pages/generator/generator.component';

import { ScannerComponent } from './pages/scanner/scanner.component';

const routes: Routes = [
  { path: '', component: ScannerComponent},
  { path: 'Scanner', component: ScannerComponent },
  { path: 'Generator', component: GeneratorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'Scanner'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
