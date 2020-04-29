const nav = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '笔记',
    ariaLabel: '笔记菜单',
    items: [
      { text: '前端', link: '/note/front/' },
      { text: 'php', link: '/note/php/' },
    ],
  },
  {
    text: '关于',
    link: '/about/',
  },
  {
    text: 'Github',
    link: 'https://github.com/Wayley',
    target: '_blank', // _self
    rel: '',
  },
];

module.exports = {
  title: 'HW',
  description: 'Welcome to the World!',
  head: [
    [
      'link',
      { rel: 'shortcut icon', href: 'favicon.ico', type: 'image/x-icon' },
    ],
  ],
  port: 9966, // dev server端口
  themeConfig: {
    logo: '', // 导航栏logo
    nav,
  },
};
