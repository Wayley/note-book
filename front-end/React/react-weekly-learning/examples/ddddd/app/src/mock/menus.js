export const menus = [
  {
    id: 1,
    path: '/dashboard',
    title: 'Dashboard',
    children: [
      { id: 11, path: '/dashboard/overview', title: 'Dashboard Overview' },
      {
        id: 12,
        path: '/dashboard/analysis-result',
        title: 'Data Analysis Result',
      },
      {
        id: 13,
        path: '/dashboard/collecting-status-total',
        title: 'Data Collecting Status Total',
      },
      {
        id: 14,
        path: '/dashboard/fail-analysis',
        title: 'Data Fail Analysis',
      },
    ],
  },
  {
    id: 2,
    path: '/system',
    title: 'System Management',
    children: [
      {
        id: 21,
        path: '/system/account',
        title: 'Acount Management',
        children: [
          {
            id: 211,
            path: '/system/account/add',
            title: 'Add Acount',
          },
          {
            id: 212,
            path: '/system/account/list',
            title: 'Acount List',
          },
        ],
      },
      {
        id: 22,
        path: '/system/role',
        title: 'Role Management',
        children: [
          {
            id: 221,
            path: '/system/role/add',
            title: 'Add Role',
          },
          {
            id: 222,
            path: '/system/role/list',
            title: 'Role List',
          },
        ],
      },
      {
        id: 23,
        path: '/system/authority',
        title: 'Authority Management',
        children: [
          {
            id: 231,
            path: '/system/authority/add',
            title: 'Add Authority',
          },
          {
            id: 232,
            path: '/system/authority/list',
            title: 'Authority List',
          },
        ],
      },
    ],
  },
];

export default menus;
