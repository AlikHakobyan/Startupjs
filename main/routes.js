export default (components = {}) => [
  {
    path: '/',
    exact: true,
    component: components.PHome,
  },
  {
    path: '/vpeeps',
    exact: true,
    component: components.PAbout,
  },
]
