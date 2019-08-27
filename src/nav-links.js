
import HeaderIndex from './headers/HeaderIndex';
// import HeaderExample01 from './headers/HeaderExample01';

import Index from './pages/Index';
import Example01 from './pages/Example01';
import Example02 from './pages/Example02';
import Example03 from './pages/Example03';
import Example04 from './pages/Example04';

export default [
  {
    path: '/',
    name: 'Home',
    componentHeader: HeaderIndex,
    componentBody: Index,
  },
  {
    path: '/example-one-class-components',
    name: 'DIY Classes',
    componentHeader: null,
    componentBody: Example01,
  },
  {
    path: '/example-two-functional-components',
    name: 'DIY Functional',
    componentHeader: null,
    componentBody: Example02,
  },
  {
    path: '/example-three-formik',
    name: 'Formik',
    componentHeader: null,
    componentBody: Example03,
  },
  {
    path: '/example-four-formik-bonus',
    name: '_',
    componentHeader: null,
    componentBody: Example04,
  },
];
