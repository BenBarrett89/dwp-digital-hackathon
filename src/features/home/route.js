import {
  DefaultPage,
  TestPage,
  WhatPage,
  WherePage,
  Rate,
  Career,
  Jobs,
  Skill
} from './'

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'where', name: 'Where', component: WherePage, isIndex: true },
    { path: 'what', name: 'What', component: WhatPage },
    { path: 'rate', name: 'Rate', component: Rate },
    { path: 'jobs', name: 'Jobs', component: Jobs },
    { path: 'skill', name: 'Skill', component: Skill },
    { path: 'career', name: 'Career', component: Career }
  ]
}
