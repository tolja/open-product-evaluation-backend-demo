import Vue from 'vue'
import Router from 'vue-router'

// device
import RegisterDevice from '@/components/device/RegisterDevice.vue'

//context
import ContextList from '@/components/context/ContextList.vue'

//survey
import Survey from '@/components/survey/Survey.vue'

//question
import QuestionManager from '@/components/question/QuestionManager.vue'

//vote
import Vote from '@/components/vote/Vote.vue'


import AppWrapper from '@/components/AppWrapper';
import store from '@/store/store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: AppWrapper,
      beforeEnter: (to, from, next) => {
        if (store.state.device.token !== null) {
          next('/context/list');
        } else {
          next();
        }
      },
      children: [
        {
          path: '',
          component: RegisterDevice,
        }
      ]
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
          beforeEnter (to, from, next) {
            if (Object.keys(store.state.contexts.currentContext.context).length !== 0) {
              next();
            } else {
              next('/context/list');
            }
          },
        }],
    },
    {
      path: '/question',
      component: AppWrapper,
      children: [
        {
          path: '',
          component: QuestionManager,
          beforeEnter (to, from, next) {

            if (store.state.contexts.currentContext.context.activeSurvey !== null) {
              next();
            } else {
              next('/context/list');
            }
          },
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
