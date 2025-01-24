import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NirfDashboardComponent, SanctionedIntakeComponent, StudentStrengthComponent, ConsultancyProjectDetailsComponent, FacultyDetailsComponent, FinancialResourcesComponent, IprComponent, PcsFacilitiesComponent, PhdstudentDetailsComponent, PlacementHigherStudiesComponent, SponsoredResearchDetailsComponent } from 'shared-lib';

const routes: Routes = [
  
        { path: '', component: NirfDashboardComponent },
        { path: 'dashboard', component: NirfDashboardComponent },
        { path: 'sanctioned-intake', component: SanctionedIntakeComponent },
        { path: 'student-strength', component: StudentStrengthComponent },
        { path: 'consultancy-project-details', component: ConsultancyProjectDetailsComponent },
        { path: 'faculty-details', component: FacultyDetailsComponent },
        { path: 'financial-resource', component: FinancialResourcesComponent },
        { path: 'ipr', component: IprComponent },
        { path: 'pcs-facility', component: PcsFacilitiesComponent },
        { path: 'phd-student-details', component: PhdstudentDetailsComponent },
        { path: 'placement-higher-studies', component: PlacementHigherStudiesComponent },
        { path: 'sponsored-research-details', component: SponsoredResearchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NirfRoutingModule { }
