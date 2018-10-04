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
          beforeEnter: (to, from, next) => {
            if (store.state.device.token !== null) {
              store.dispatch('reconnectClient')
              store.dispatch('subscribeDevice')
              store.dispatch("getContextList")
              next()
            }
            else {
              next('/');
            }
          }
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

            if (store.state.device.token !== null) {

              if (store.state.contexts.context && Object.keys(store.state.contexts.context).length !== 0) {
                store.dispatch('reconnectClient')
                store.dispatch('subscribeDevice')
                next();
              } else {
                next('/context/list');
              }
            }
            else {
              next('/');
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

            if (store.state.device.token !== null) {

              if (store.state.contexts.context.activeSurvey && store.state.contexts.context.activeSurvey !== null) {
                next();
              } else {
                next('/context/list');
              }
            } else {
              next('/');
            }
          },
        },
      ],
    },
  ]
})
