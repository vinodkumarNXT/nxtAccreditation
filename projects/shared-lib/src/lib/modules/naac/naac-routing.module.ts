import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaacDashboardComponent, CurricularDevelopementComponent, PercentageofProgramsComponent, AveragePercentageComponent, PercentageOfnewCoursesComponent, CbcsComponent, InstitutionIntegratesComponent, TransferableLifeskillsComponent, StudentsEnrolledComponent, UndertakingFieldProjectsComponent, FullTimeTeachersComponent, DemandRatioComponent, ReservedCategorieComponent, SpecialProgramComponent, DesignAndReviewComponent, FeedbackProcessComponent, ExperimentalLearningComponent, LearningProcessComponent, StudentmentorRatioComponent, PhdTeachersComponent, AwardedTeachersComponent, FulltimeFacultyComponent, EndSemesterComponent, StudentComplaintsComponent, IntegrationReformsComponent, AutomationExaminationComponent, LearningOutcomesComponent, ProgramOutcomesComponent, StudentPasspercentageSurveyComponent, ResearchFacilityComponent, TeacherResearchComponent, ResearchFellowshipComponent, ResearchFellowsComponent, SupportResearchComponent, RecognitionComponent, FundingResearchComponent, ProjectGrantComponent, ResearchProjectsComponent, EcosystemInnovationsComponent, SeminarsConductedComponent, RecognizationsReceivedComponent, TeachersIncentiviesComponent, PatentPublishedComponent, PhdawardedPerteacherComponent, TeacherpaperResearchComponent, EditedVolumesComponent, TeacherEcontentComponent, BiblioMetricsComponent, CitationsComponent, PolicyonConsultancyComponent, ConsultancyRevenueComponent, ExtensionActivityComponent, AwardsReceivedComponent, OutreachProgramComponent, ActivityPercentageComponent, CollaborativeActivityComponent, FunctionalMousComponent, TeachingLearningFacilityComponent, CulturalActivityFacilityComponent, GeneralCampusFacilityComponent, InfrastractureExpenditureComponent, AutomationLibraryComponent, LibraryResourceComponent, LibraryExpenditureComponent, LibraryUsersComponent, ICTFacilitiesComponent, ITFacilitiesComponent, StudentComputerRatioComponent, InternetBandwidthComponent, EContentFacilitiesComponent, PhysicalFacilityMaintenanceComponent, SystemAndProcedureComponent, ScholarshipSchemesComponent, CareerCounslingComponent, CapacityDevelopmentComponent, StudentGrievancesComponent, PlacementPercentageComponent, GraduatedStudentsComponent, StudentsMedalsComponent, StudentCouncilComponent, CompetitionsOrganizedComponent, AlumniAssociationComponent, AlumniContributionComponent, AdministrativeGovernanceComponent, ParticipativeManagementComponent, InstitutionalStatergicPlanComponent, InstitutionalBodiesComponent, EGovernanceComponent, ApprisalSystemComponent, FinacialSupportComponent, TrainingProgramsComponent, FacultyDevelopmentProgramComponent, FundsMobilisationComponent, GovtGrantsComponent, NonGovtGrantsComponent, FinacialAuditComponent, QualityAssuranceComponent, AdoptedQualityComponent, IncrementalImprovementsComponent, GenderEquityComponent, AlternateEnergySourceComponent, DegradableComponent, WaterConservationComponent, GreenCampusComponent, EnvironmentAuditComponent, DisabledFriendlyComponent, InstitutionalEffortsComponent, ConstitutionalObligationsComponent, CodeOfConductComponent, InstitutionalCelebratesComponent, BestPracticesComponent, InstitutionalPerformanceComponent, AuthGuard } from 'shared-lib';

const routes: Routes = [



  { path: '', component: NaacDashboardComponent },
  { path: 'dashboard', component: NaacDashboardComponent },


  // Curricular Relevance
  { path: 'curricular-developed', component: CurricularDevelopementComponent },
  { path: 'percentage-programmes', component: PercentageofProgramsComponent },
  { path: 'average-percentage', component: AveragePercentageComponent },
  { path: 'percentageCourses', component: PercentageOfnewCoursesComponent },
  { path: 'cbcs', component: CbcsComponent },
  { path: 'institution-integrates', component: InstitutionIntegratesComponent },
  { path: 'transferable-lifeSkills', component: TransferableLifeskillsComponent },
  { path: 'students-enrolled', component: StudentsEnrolledComponent },
  { path: 'undertakingFieldProjects', component: UndertakingFieldProjectsComponent },
  { path: 'full-time-teachers', component: FullTimeTeachersComponent },
  { path: 'demand-ratio', component: DemandRatioComponent },
  { path: 'reserved-category', component: ReservedCategorieComponent },
  { path: 'special-program', component: SpecialProgramComponent },
  { path: 'design-review', component: DesignAndReviewComponent },
  { path: 'feedback-process', component: FeedbackProcessComponent },
  { path: 'experimental-Learning', component: ExperimentalLearningComponent },
  { path: 'learning-process', component: LearningProcessComponent },
  { path: 'student-mentorRatio', component: StudentmentorRatioComponent },
  { path: 'phd-teachers', component: PhdTeachersComponent },
  { path: 'awarded-teachers', component: AwardedTeachersComponent },
  { path: 'fulltime-Faculty', component: FulltimeFacultyComponent },
  { path: 'end-semister', component: EndSemesterComponent },
  { path: 'student-complaints', component: StudentComplaintsComponent },
  { path: 'integration-reforms', component: IntegrationReformsComponent },
  { path: 'automation-examination', component: AutomationExaminationComponent },
  { path: 'learning-outcomes', component: LearningOutcomesComponent },
  { path: 'program-outcomes', component: ProgramOutcomesComponent },
  { path: 'student-PassPercentage-survey', component: StudentPasspercentageSurveyComponent },
  { path: 'research-facility', component: ResearchFacilityComponent },
  { path: 'teacher-research', component: TeacherResearchComponent },
  { path: 'research-fellowship', component: ResearchFellowshipComponent },
  { path: 'research-fellow', component: ResearchFellowsComponent },
  { path: 'support-research', component: SupportResearchComponent },
  { path: 'recognition', component: RecognitionComponent },
  { path: 'funding-research', component: FundingResearchComponent },
  { path: 'projectGrant', component: ProjectGrantComponent },
  { path: 'research-projects', component: ResearchProjectsComponent },
  { path: 'ecosystem-innovations', component: EcosystemInnovationsComponent },
  { path: 'seminars-conducted', component: SeminarsConductedComponent },
  { path: 'recognizations-received', component: RecognizationsReceivedComponent },
  { path: 'teachers-incentivies', component: TeachersIncentiviesComponent },
  { path: 'patent-published', component: PatentPublishedComponent },
  { path: 'phdawarded-perteacher', component: PhdawardedPerteacherComponent },
  { path: 'teacher-research-papers', component: TeacherpaperResearchComponent },
  { path: 'edited-volumes', component: EditedVolumesComponent },
  { path: 'teacher-econtent', component: TeacherEcontentComponent },
  { path: 'biblio-metrics', component: BiblioMetricsComponent },
  { path: 'citation-index-scopus', component: CitationsComponent },

  // Need  to Pending PHP DEV
  { path: 'policy-on-consultancy', component: PolicyonConsultancyComponent },


  { path: 'consultancy-revenue', component: ConsultancyRevenueComponent },
  { path: 'extension-activity', component: ExtensionActivityComponent },
  { path: 'awards-received', component: AwardsReceivedComponent },
  { path: 'outreach-program', component: OutreachProgramComponent },
  { path: 'activity-percentage', component: ActivityPercentageComponent },
  { path: 'collaborative-activity', component: CollaborativeActivityComponent },
  { path: 'functional-mous', component: FunctionalMousComponent },
  { path: 'teaching-learning-facility', component: TeachingLearningFacilityComponent },
  { path: 'cultural-activity-facility', component: CulturalActivityFacilityComponent },
  { path: 'general-campus-facility', component: GeneralCampusFacilityComponent },
  { path: 'infrastructure-expenditure', component: InfrastractureExpenditureComponent },
  { path: 'library-automation', component: AutomationLibraryComponent },
  { path: 'library-resources', component: LibraryResourceComponent },
  { path: 'library-expenditure', component: LibraryExpenditureComponent },
  { path: 'library-users', component: LibraryUsersComponent },
  { path: 'ict-facilities', component: ICTFacilitiesComponent },
  { path: 'it-facilities', component: ITFacilitiesComponent },
  { path: 'student-computer-ratio', component: StudentComputerRatioComponent },
  { path: 'internet-bandwidth', component: InternetBandwidthComponent },
  { path: 'facilities-e-content', component: EContentFacilitiesComponent },
  { path: 'maintenance-physical-facilities', component: PhysicalFacilityMaintenanceComponent },
  { path: 'systems-procedures', component: SystemAndProcedureComponent },
  { path: 'scholarship-schemes', component: ScholarshipSchemesComponent },
  { path: 'career-counseling', component: CareerCounslingComponent },
  { path: 'capacity-development', component: CapacityDevelopmentComponent },
  { path: 'student-grievances', component: StudentGrievancesComponent },
  { path: 'placement-percentage', component: PlacementPercentageComponent },
  { path: 'graduated-students', component: GraduatedStudentsComponent },
  { path: 'students-medals', component: StudentsMedalsComponent },
  { path: 'student-council', component: StudentCouncilComponent },
  { path: 'competitions-organised', component: CompetitionsOrganizedComponent },
  { path: 'alumni-association', component: AlumniAssociationComponent },
  { path: 'alumni-contribution', component: AlumniContributionComponent },
  { path: 'administrative-governance', component: AdministrativeGovernanceComponent },
  { path: 'participative-management', component: ParticipativeManagementComponent },
  { path: 'strategic-plan', component: InstitutionalStatergicPlanComponent },


  { path: 'institutional-bodies', component: InstitutionalBodiesComponent },
  { path: 'e-governance', component: EGovernanceComponent },
  { path: 'apprisal-system', component: ApprisalSystemComponent },
  { path: 'finacial-support', component: FinacialSupportComponent },
  { path: 'training-programs', component: TrainingProgramsComponent },
  { path: 'faculty-development-program', component: FacultyDevelopmentProgramComponent },
  { path: 'funds-mobilisation', component: FundsMobilisationComponent },
  { path: 'govt-grants', component: GovtGrantsComponent },
  { path: 'non-govt-grants', component: NonGovtGrantsComponent },
  { path: 'finacial-audit', component: FinacialAuditComponent },
  { path: 'quality-assurance', component: QualityAssuranceComponent },
  { path: 'adopted-quality', component: AdoptedQualityComponent },
  { path: 'incremental-improvements', component: IncrementalImprovementsComponent },
  { path: 'gender-equity', component: GenderEquityComponent },
  { path: 'alternate-energy-source', component: AlternateEnergySourceComponent },
  { path: 'degradable', component: DegradableComponent },
  { path: 'water-conservation', component: WaterConservationComponent },
  { path: 'green-campus', component: GreenCampusComponent },
  { path: 'environment-audit', component: EnvironmentAuditComponent },
  { path: 'disabled-friendly', component: DisabledFriendlyComponent },
  { path: 'institutional-efforts', component: InstitutionalEffortsComponent },
  { path: 'constitutional-obligations', component: ConstitutionalObligationsComponent },
  { path: 'code-of-conduct', component: CodeOfConductComponent },
  { path: 'institutional-celebrates', component: InstitutionalCelebratesComponent },
  { path: 'best-practices', component: BestPracticesComponent },
  { path: 'institutional-performance', component: InstitutionalPerformanceComponent },



  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NaacRoutingModule { }
