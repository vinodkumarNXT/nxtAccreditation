export interface PageName {
    id: string;
    name: string;
  }
  
  export interface ModuleGroup {
    name: string;
    module: PageName[];
  }
  
  export const MODULEGROUPS: ModuleGroup[] = [
    {
      name: 'Academics',
      module: [
        { name: 'Co Ordinator', id: '1' },
        { name: 'Financial Support', id: '2' },
        { name: 'Guide', id: '3' },
        { name: 'Online', id: '5' },
        { name: 'E-Content Develop', id: '6' },
        { name: 'Centric Method', id: '7' },
        { name: 'Teaching Pedagogy', id: '8' },
        { name: 'Attainments', id: '9' },
      ],
    },
    {
      name: 'Academic Research',
      module: [
        { name: 'Co Ordinator', id: '1' },
        { name: 'Financial Support', id: '2' },
        { name: 'Guide', id: '3' },
        { name: 'Online', id: '5' },
        { name: 'E-Content Develop', id: '6' },
        { name: 'Centric Method', id: '7' },
        { name: 'Teaching Pedagogy', id: '8' },
        { name: 'Attainments', id: '9' },
      ],
    },
  ];
  