import Vue from 'vue'
import Router from 'vue-router'

// home
import Home from '@/components/Home.vue'

// device
import DeviceRegister from '@/components/device/DeviceRegister.vue'
import DeviceInfo from '@/components/device/DeviceInfo.vue'

//context
import ContextList from '@/components/context/ContextList.vue'

//survey
import Survey from '@/components/survey/Survey.vue'

//question
import QuestionManager from '@/components/question/QuestionManager.vue'

//vote
import Vote from '@/components/votes/Vote.vue'


import AppWrapper from '@/components/AppWrapper';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: AppWrapper,
      children: [
        {
          path: '',
          component: Home,
        }]
    },
    {
      path: '/device',
      component: AppWrapper,
      children: [
        {
          path: 'register',
          component: DeviceRegister,
        },
        {
          path: 'info',
          component: DeviceInfo,
        }],
    },
    {
      path: '/context',
      component: AppWrapper,
      children: [
        {
          path: 'list',
          component: ContextList,
        }],
    },
    {
      path: '/survey',
      component: AppWrapper,
      children: [
        {
          path: '',
          component: Survey,
        }],
    },
    {
      path: '/question',
      component: AppWrapper,
      children: [
        {
          path: '',
          component: QuestionManager,
        },
      ],
    },
    {
      path: '/vote',
      component: AppWrapper,
      children: [
        {
          path: '',
          component: Vote,
        },
      ],
    },
  ]
})
