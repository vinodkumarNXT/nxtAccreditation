
// src/app/endpoints.ts
export const imageDownalod = {
  // ----*****  Download Files ENd Point   STARTS Here  *****-----

  DownloadFile: 'storage/app/public',

  // ----*****  Download Files ENd Point   ENDS Here  *****-----
}
// http://192.168.21.102/api/percentage-programmes
export const endpoints = {

  // Login API FOR ACCREDITATION  DASHBOARD MODULE

  // AccreditationLogin: 'api/login',
  AccreditationLogin: 'api/login',
  AccreditationDashboard: 'api/dashboard',
  AcademicsCoordinator: 'api/academics/coordinator',

  // Login API FOR ACCREDITATION  DASHBOARD MODULE

  // ----*****  Roles and Permissions  Module  Forms Module  STARTS Here  *****-----
  RolesMaster: 'api/roles-and-permission/role-master',
  FeatureMaster: 'api/roles-and-permission/feature-master',
  RolePermission: 'api/roles-and-permission/features-Based-on-role',
  PermissionMaster: 'api/roles-and-permission/permission-master',



  // ----*****    Roles and Permissions  Module  Forms Module  ENDS Here  *****-----


  // ----*****  File Upload  STARTS Here  *****-----
  fileUpload: 'app/Http/Controllers/api/uploads',
  DownloadFile: 'storage/app/public',

  // ----*****    File Upload  ENDS Here  *****-----

  // storage/




  // ----*****  Curricular Aspects  STARTS Here  *****-----
  CirDesignAndDevelopment: 'api/curriculam-development',
  CirAspPercentageProgrammes: 'api/percentage-programmes',
  CirAspAveragePercent: 'api/average-percentages',
  // ----*****    Curricular Aspects   ENDS Here  *****-----


  // ----*****  Curricular Aspects  STARTS Here  *****-----
  AcaFxPercentageCourses: 'api/new-course-percentages',
  CBCS: 'api/choice-based-credit-system',
  InstitutionIntegrates: 'api/institution-integrates',
  TransferableLifeskills: 'api/transferable-lifeskills',
  StudentsEnrolled: 'api/transferable-student-enroll',
  UndertakingFieldProjects: 'api/field-project',
  DemandRatio: 'api/demand-ratio',
  ReservedCategory: 'api/reserved-category',
  SpecialProgram: 'api/special-program',
  FullTimeTeachers: 'api/full-time-teachers-ratios',
  DesignAndReview: 'api/design-and-review',
  FeedbackProceess: 'api/feedback-process',
  ExperimentalLearning: 'api/experimental-Learning',
  LearningProcess: 'api/learning-process',
  StudentsMentorRatio: 'api/student-mentor-ratio',
  PhdTeachers: 'api/phd-teachers',
  AwardedTeachers: 'api/awarded-teachers',
  FullTimeFaculty: 'api/full-time-teachers',
  EndSemester: 'api/end-semester',
  StudentComplaints: 'api/student-complaints',
  IntegrationReforms: 'api/integration-reforms',
  AutomationExamination: 'api/automation-examination',
  LearningOutcomes: 'api/learning-outcomes',
  ProgramOutcomes: 'api/program-outcomes',
  StudentPassPercentageSurvey: 'api/student-pass-percentage',
  ResearchFacility: 'api/research-facility',
  TeacherResearch: 'api/teacher-research',
  ResearchFellowship: 'api/research-fellowship',
  ResearchFellow: 'api/research-fellow',
  SupportResearch: 'api/support-research',
  Recognition: 'api/recognition',
  FundingResearch: 'api/funding-research',
  ProjectGrant: 'api/project-grant',
  ResearchProjects: 'api/research-projects',
  EcoSystemInnovations: 'api/eco-system',
  SeminarsConducted: 'api/seminars',
  RecognizationsReceived: 'api/recognizations-received',
  TeachersIncentivies: 'api/teachers-incentivies',
  PatentPublished: 'api/patent-published',
  PhdAwardedPerTeacher: 'api/phd-awarded-per-teacher',
  TeacherResearchPapers: 'api/teacher-paper-research',
  EditedVolumes: 'api/edited-volumes',
  TeacherEcontent: 'api/teacher-econtent',
  BiblioMetrics: 'api/bibliometrics',
  CitationIndex: 'api/citation-index',
  PolicyOnConsultancy: 'api/policy-on-consultancy',
  ConsultancyRevenue: 'api/consultancy-revenue',
  ExtensionActivity: 'api/extension-activity',
  AwardsReceived: 'api/awards-received',
  OutreachProgram: 'api/outreach-program',
  ActivityPercentage: 'api/activity-percentage',
  CollaborativeActivity: 'api/collaborative-activity',
  FunctionalMous: 'api/functional-mous',
  TeachingLearningFacility: 'api/teaching-learning-facility',
  CulturalActivityFacility: 'api/cultural-activity-facility',
  GeneralCampusFacility: 'api/general-campus-facility',
  InfrastractureExpenditure: 'api/infrastracture-expenditure',
  AutomationLibrary: 'api/automation-library',
  LibraryResource: 'api/library-resource',
  LibraryExpenditure: 'api/library-expenditure',
  LibraryUsers: 'api/library-users',
  ICTFacilities: 'api/ICT-facilities',
  ITFacilities: 'api/IT-facilities',
  StudentComputerRatio: 'api/student-computer-ratio',
  InternetBandwidth: 'api/internet-bandwidth',
  EcontentFacilities: 'api/e-content-facilities',
  PhysicalFacilityMaintenance: 'api/physical-facility-maintenance',
  SystemAndProcedure: 'api/system-and-procedure',
  ScholarshipSchemes: 'api/scholarship-schemes',
  CareerCounseling: 'api/career-counsling',
  CapacityDevelopment: 'api/capacity-development',
  StudentGrievances: 'api/student-grievances ',
  PlacementPercentage: 'api/placement-percentage',
  GraduatedStudents: 'api/graduated-students',
  StudentsMedals: 'api/students-medals',
  StudentsCounsil: 'api/students-counsil',
  CompetitionsOrganized: 'api/Competitions-organized',
  AlumniAssociation: 'api/alumni-association',
  AlumniContribution: 'api/alumni-contribution',
  AdministrativeGovernance: 'api/administrative-governance',
  ParticipativeManagement: 'api/participative-management',
  InstitutionalStatergicPlan: 'api/institutional-statergic-plan',
  InstitutionalBodies: 'api/institutional-bodies',
  EGovernance: 'api/e-governance',
  ApprisalSystem: 'api/apprisal-system',
  TeacherFinacialSupport: 'api/finacial-support',
  TrainingPrograms: 'api/training-programs',
  FacultyDevelopmentProgram: 'api/faculty-development-program',
  FundsMobilisation: 'api/funds-mobilisation',
  GovtGrants: 'api/govt-grants',
  NonGovtGrants: 'api/non-govt-grants',
  FinacialAudit: 'api/finacial-audit',
  QualityAssurance: 'api/quality-assurance',

  AdoptedQuality: 'api/adopted-quality',
  IncrementalImprovements: 'api/incremental-improvements',
  GenderEquity: 'api/gender-equity',
  AlternateEnergySource: 'api/alternate-energy-source',
  Degradable: 'api/degradable',
  WaterConservation: 'api/water-conservation',
  GreenCampus: 'api/green-campus',
  EnvironmentAudit: 'api/environment-audit',
  DisabledFriendly: 'api/disabled-friendly',
  InstitutionalEfforts: 'api/institutional-efforts',
  ConstitutionalObligations: 'api/constitutional-obligations',
  CodeOfConduct: 'api/code-of-conduct',
  InstitutionalCelebrates: 'api/institutional-celebrates',
  BestPractices: 'api/best-practices',
  InstitutionalPerformance: 'api/institutional-performance',

  NIRFconsultancyProjectDetails: 'api/institutional-performance',
  NIRFfacultyDetails: 'api/faculty-details',
  NIRFfinancialResources: 'api/institutional-performance',
  NIRFIPR: 'api/institutional-performance',
  NIRFpcsFacilities: 'api/institutional-performance',
  NIRFphdstudentDetails: 'api/institutional-performance',
  NIRFplacementHigherStudies: 'api/institutional-performance',
  NIRFsanctionedIntake: 'api/sanctioned-intake',
  NIRFsponsoredResearchDetails: 'api/institutional-performance',
  NIRFstudentStrength: 'api/institutional-performance',



}

