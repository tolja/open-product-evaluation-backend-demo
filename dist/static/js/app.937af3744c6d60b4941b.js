webpackJsonp([1],{"4+uG":function(e,t){},"9M+g":function(e,t){},Drnp:function(e,t){},Jmt5:function(e,t){},"MAr+":function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("MU8w");var n=s("7+uW"),i=s("NYxO"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},a,!1,function(e){s("SOg7")},null,null).exports,r=s("/ocq"),l={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var c=s("VU/8")({name:"RegisterDevice",created:function(){this.$store.dispatch("createDevice",{name:"Demo-Client"}).then(e=>{this.$store.dispatch("updateDeviceOwners",["bb4028c0657dfd7092f316dcbf5b006dce87217141e1b974441f040126acc142"])})}},l,!1,function(e){s("ZKuY")},"data-v-2bb3d9b4",null).exports,u={name:"ContextList",data(){return{deviceID:this.$store.getters.getDeviceID,hasContext:this.$store.getters.hasContext,contextID:null,error:null}},created(){this.$store.dispatch("cleanCurrentContext"),this.$store.dispatch("cleanCurrentContextAnswers")},computed:{contexts(){return this.$store.getters.getContextList}},methods:{getPrivateContext(e){this.error=null,this.$store.dispatch("getContext",e).then(e=>{}).catch(e=>{this.error="Die eingegebene Kontext-ID ist nicht korrekt."})},getContext(e){this.$store.dispatch("getContext",e).then(e=>{})}}},d={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("form",{attrs:{id:"private-context",method:"post"},on:{submit:function(t){t.preventDefault(),e.getPrivateContext(e.contextID)}}},[s("div",{staticClass:"card context"},[s("div",{staticClass:"card-header"},[e._v("\n                Privater Kontext\n              ")]),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"row"},[e.error?s("div",{staticClass:"col-12"},[s("span",{staticClass:"error"},[e._v(e._s(e.error))])]):e._e()]),e._v(" "),s("div",{staticClass:"row"},[e._m(1),e._v(" "),s("div",{staticClass:"col-5"},[s("div",{staticClass:"card-body"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.contextID,expression:"contextID"}],staticClass:"form-control",attrs:{required:"",type:"text",name:"contextID",id:"input_contextID",onfocus:"this.value = ''"},domProps:{value:e.contextID},on:{input:function(t){t.target.composing||(e.contextID=t.target.value)}}})])]),e._v(" "),e._m(2)])])]),e._v(" "),s("form",{attrs:{id:"context-list",method:"post"}},e._l(e.contexts,function(t){return s("div",{key:t.id,staticClass:"card context"},[s("div",{staticClass:"card-header"},[e._v("\n         "+e._s(t.name)+"\n        ")]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("div",{staticClass:"card-body"},[s("strong",{staticClass:"card-title"},[e._v("Aktive Umfrage")]),e._v(" "),t.activeSurvey?s("p",{staticClass:"card-text"},[e._v("\n                "+e._s(t.activeSurvey.title)+"\n              ")]):s("p",{staticClass:"card-text"},[e._v("\n                Keine Umfrage aktiv!\n              ")]),e._v(" "),s("strong",{staticClass:"card-title"},[e._v("Fragen-Typen in dieser Umfrage")]),e._v(" "),t.activeSurvey&&t.activeSurvey.types?s("p",{staticClass:"card-text"},[e._v("\n                "+e._s(t.activeSurvey.types)+"\n              ")]):s("p",{staticClass:"card-text"},[e._v("\n                Bisher wurden noch keine Fragen definiert.\n              ")]),e._v(" "),t.devices?s("strong",{staticClass:"card-title"},[e._v("Verbundene Devices mit diesem Kontext")]):e._e(),e._v(" "),s("p",e._l(t.devices,function(n,i){return s("span",{key:n.id,staticClass:"card-text"},[e._v("\n                "+e._s(n.name)+" "),i!==t.devices.length-1?s("span",[e._v(",")]):e._e()])}))])]),e._v(" "),s("div",{staticClass:"col-4 my-auto"},[s("div",{staticClass:"card-body"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(s){s.preventDefault(),e.getContext(t.id)}}},[e._v("Verbinden")])])])])])}))])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"card-body"},[t("p",{staticClass:"card-text"},[this._v("\n                Mit einem privaten Kontext verbinden\n              ")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-3"},[t("div",{staticClass:"card-body"},[t("label",{attrs:{for:"input_contextID"}},[this._v("Kontext ID eingeben")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"col-4 my-auto"},[t("div",{staticClass:"card-body"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Wählen")])])])}]};var v=s("VU/8")(u,d,!1,function(e){s("4+uG")},"data-v-a031837a",null).exports,p={name:"Survey",data:()=>({}),created(){},mounted(){this.$store.dispatch("updateDevice",this.$store.getters.getCurrentContext.id).then(e=>{this.$store.dispatch("subscribeContext",this.$store.getters.getCurrentContext.id)})},computed:{survey(){return this.$store.getters.getCurrentContext}},methods:{deleteDeviceFromContext(){this.$store.dispatch("deleteDeviceFromContext").then(e=>{this.$store.dispatch("unsubscribeContext")})}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{attrs:{id:"context-list",method:"post"}},[s("div",{staticClass:"card context"},[s("div",{staticClass:"card-header"},[e._v("\n         Umfrage starten\n        ")]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-8"},[s("div",{staticClass:"card-body"},[s("strong",{staticClass:"card-title"},[e._v("Gewählter Kontext:")]),e._v(" "),s("p",{staticClass:"card-text"},[e._v("\n                "+e._s(e.survey.name)+"\n              ")]),e._v(" "),s("strong",{staticClass:"card-title"},[e._v("Aktuelle Umfrage")]),e._v(" "),e.survey.activeSurvey?s("p",{staticClass:"card-text"},[e._v("\n              "+e._s(e.survey.activeSurvey.title)+"\n              ")]):s("p",{staticClass:"card-title"},[s("span",{staticClass:"error"},[e._v("Noch keine Umfrage definiert!")])]),e._v(" "),e.survey.activeSurvey&&!e.survey.activeSurvey.questions?s("p",{staticClass:"card-title"},[s("span",{staticClass:"error"},[e._v("Für diese Umfrage wurden noch keine Fragen definiert!")])]):e._e()])]),e._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"card-body"},[e.survey.activeSurvey&&e.survey.activeSurvey.questions?s("router-link",{staticClass:"btn btn-primary",attrs:{to:"/question",tag:"button"}},[e._v("Umfrage starten!")]):e._e()],1),e._v(" "),s("div",{staticClass:"col"},[s("div",{staticClass:"card-body"},[s("router-link",{staticClass:"btn btn-secondary",attrs:{to:"/context/list",tag:"button"},nativeOn:{click:function(t){e.deleteDeviceFromContext()}}},[e._v("Zurück zu den Kontexten")])],1)])])])])])},staticRenderFns:[]};var h=s("VU/8")(p,m,!1,function(e){s("RaU9")},"data-v-20664134",null).exports,C={name:"ChoiceQuestion",data(){return{choiceID:this.currentQuestion.choiceDefault}},props:["currentQuestion","questionCounter","questionLength"],computed:{},methods:{createChoiceAnswer(){if(0!==this.$store.getters.getChoiceAnswers.length){this.$store.getters.getChoiceAnswers.includes(this.currentQuestion.id)?(this.$emit("nextQuestion"),me.push("/question")):this.sendChoiceAnswer()}else this.sendChoiceAnswer()},sendChoiceAnswer(){null!=this.choiceID&&this.choiceID.toString(),this.$store.dispatch("createChoiceAnswer",{questionID:this.currentQuestion.id,choiceID:this.choiceID}).then(()=>{this.$emit("nextQuestion"),me.push("/question")})}}},k={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n    Frage "+e._s(e.questionCounter+1)+"/"+e._s(e.questionLength)+"\n  ")]),e._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h4",[e._v(e._s(e.currentQuestion.value))])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[e._v(" "+e._s(e.currentQuestion.description)+"  "),s("p")])]),e._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center justify-content-center"},e._l(e.currentQuestion.items,function(t){return s("div",{key:t.id,staticClass:"col-auto"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col margintop-10"},[s("label",{attrs:{for:t.id}},[e._v(" "+e._s(t.label))])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-auto"},[s("img",{staticClass:"choice-image-item",attrs:{src:t.image.url,alt:t.label}})])])])}))]),e._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},e._l(e.currentQuestion.choices,function(t){return s("div",{key:t.id,staticClass:"col choices"},[s("img",{staticClass:"choice-image",attrs:{src:t.image.url,alt:t.label}}),e._v(" "),s("p"),e._v(" "),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.choiceID,expression:"choiceID"}],attrs:{type:"radio",name:"name"},domProps:{value:t.id,checked:e._q(e.choiceID,t.id)},on:{change:function(s){e.choiceID=t.id}}}),e._v(" "),s("label",{attrs:{for:t.id}},[e._v(e._s(t.label))])])])}))]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.choiceID,expression:"choiceID"}],attrs:{type:"radio",name:"name"},domProps:{value:null,checked:e._q(e.choiceID,null)},on:{change:function(t){e.choiceID=null}}}),e._v(" "),s("label",[e._v("Ich möchte diese Antwort nicht geben")])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("p",[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.createChoiceAnswer()}}},[e._v("Antwort senden")])])])])])])])},staticRenderFns:[]};var b=s("VU/8")(C,k,!1,function(e){s("eOjM")},"data-v-1c854df0",null).exports,g={name:"LikeQuestion",data:()=>({liked:null,likeButton:"btn btn-outline-success"}),props:["currentQuestion","questionCounter","questionLength"],computed:{},methods:{createLikeAnswer(){if(this.resetButton(),0!==this.$store.getters.getLikeAnswers.length){this.$store.getters.getLikeAnswers.includes(this.currentQuestion.id)?(this.$emit("nextQuestion"),me.push("/question")):this.sendLikeAnswer()}else this.sendLikeAnswer()},sendLikeAnswer(){this.$store.dispatch("createLikeAnswer",{questionID:this.currentQuestion.id,liked:this.liked}).then(()=>{this.$emit("nextQuestion"),me.push("/question")})},changeColor(){this.liked?this.likeButton="btn btn-success":!1===this.liked?this.likeButton="btn btn-outline-success":this.resetButton()},resetButton(){this.likeButton="btn btn-outline-success"}}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n      Frage "+e._s(e.questionCounter+1)+"/"+e._s(e.questionLength)+"\n    ")]),e._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h4",[e._v(e._s(e.currentQuestion.value))])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[e._v(" "+e._s(e.currentQuestion.description)+"  "),s("p")])]),e._v(" "),s("div",{staticClass:"row"},e._l(e.currentQuestion.items,function(e){return s("div",{key:e.id,staticClass:"col"},[s("img",{staticClass:"like-image-item",attrs:{src:e.image.url,alt:e.label}})])})),e._v(" "),s("p"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{staticClass:"like-image",attrs:{src:e.currentQuestion.likeIcon.url}})])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("p",[s("button",{class:e.likeButton,attrs:{type:"submit"},on:{click:function(t){e.liked=!0,e.changeColor()}}},[e._v("Like")])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.liked,expression:"liked"}],attrs:{type:"radio",name:"name"},domProps:{value:null,checked:e._q(e.liked,null)},on:{change:[function(t){e.liked=null},function(t){e.changeColor()}]}}),e._v(" "),s("label",[e._v("Ich möchte diese Antwort nicht geben")])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("p",[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.createLikeAnswer()}}},[e._v("Antwort senden")])])])])])])])},staticRenderFns:[]};var y=s("VU/8")(g,_,!1,function(e){s("esxh")},"data-v-016786c2",null).exports,w={name:"LikeDislikeQuestion",data:()=>({liked:null,likeButton:"btn btn-outline-success",dislikeButton:"btn btn-outline-danger"}),props:["currentQuestion","questionCounter","questionLength"],methods:{createLikeDislikeAnswer(){if(this.resetButtons(),0!==this.$store.getters.getLikeDislikeAnswers.length){this.$store.getters.getLikeDislikeAnswers.includes(this.currentQuestion.id)?(this.$emit("nextQuestion"),me.push("/question")):this.sendLikeDislikeAnswer()}else this.sendLikeDislikeAnswer()},sendLikeDislikeAnswer(){this.$store.dispatch("createLikeDislikeAnswer",{questionID:this.currentQuestion.id,liked:this.liked}).then(()=>{this.$emit("nextQuestion"),me.push("/question")})},changeButtonColor(){this.liked?(this.likeButton="btn btn-success",this.dislikeButton="btn btn-outline-danger"):!1===this.liked?(this.dislikeButton="btn btn-danger",this.likeButton="btn btn-outline-success"):this.resetButtons()},resetButtons(){this.dislikeButton="btn btn-outline-danger",this.likeButton="btn btn-outline-success"}}},D={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n    Frage "+e._s(e.questionCounter+1)+"/"+e._s(e.questionLength)+"\n  ")]),e._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h4",[e._v(e._s(e.currentQuestion.value))])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[e._v(" "+e._s(e.currentQuestion.description)+"  "),s("p")])]),e._v(" "),s("div",{staticClass:"row"},e._l(e.currentQuestion.items,function(e){return s("div",{key:e.id,staticClass:"col"},[s("img",{staticClass:"likedislike-image-item",attrs:{src:e.image.url,alt:e.label}})])})),e._v(" "),s("p"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("img",{staticClass:"like-image",attrs:{src:e.currentQuestion.likeIcon.url}}),e._v(" "),s("p",[s("button",{class:e.likeButton,attrs:{type:"submit"},on:{click:function(t){e.liked=!0,e.changeButtonColor()}}},[e._v("Like")])])]),e._v(" "),s("div",{staticClass:"col"},[s("img",{staticClass:"dislike-image",attrs:{src:e.currentQuestion.dislikeIcon.url}}),e._v(" "),s("p",[s("button",{class:e.dislikeButton,attrs:{type:"submit"},on:{click:function(t){e.liked=!1,e.changeButtonColor()}}},[e._v("Dislike")])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.liked,expression:"liked"}],attrs:{type:"radio",name:"name"},domProps:{value:null,checked:e._q(e.liked,null)},on:{change:[function(t){e.liked=null},function(t){e.changeButtonColor()}]}}),e._v(" "),s("label",[e._v("Ich möchte diese Antwort nicht geben")])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("p",[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.createLikeDislikeAnswer()}}},[e._v("Antwort senden")])])])])])])])},staticRenderFns:[]};var I=s("VU/8")(w,D,!1,function(e){s("cP5j")},"data-v-908cb436",null).exports,x={name:"RegulatorQuestion",data(){return{rating:this.currentQuestion.default,noAnswer:void 0,questionLabels:[],sliderTicks:[],sliderTickLabels:[]}},props:["currentQuestion","questionCounter","questionLength"],computed:{},created:function(){this.getSliderData()},methods:{createRegulatorAnswer(){if(0!==this.$store.getters.getRegulatorAnswers.length){this.$store.getters.getRegulatorAnswers.includes(this.currentQuestion.id)?(this.$emit("nextQuestion"),me.push("/question")):this.sendRegulatorAnswer()}else this.sendRegulatorAnswer()},sendRegulatorAnswer(){null!==this.noAnswer?this.$store.dispatch("createRegulatorAnswer",{questionID:this.currentQuestion.id,rating:this.rating}).then(()=>{this.$emit("nextQuestion"),me.push("/question")}):this.$store.dispatch("createRegulatorAnswer",{questionID:this.currentQuestion.id,rating:null}).then(()=>{this.$emit("nextQuestion"),me.push("/question")})},getSliderData(){this.currentQuestion.labels.forEach(e=>{this.questionLabels.push(e)}),this.questionLabels.sort((e,t)=>t.value<e.value),this.questionLabels.forEach(e=>{this.sliderTicks.push(e.value),this.sliderTickLabels.push(e.label)})}}},T={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n    Frage "+e._s(e.questionCounter+1)+"/"+e._s(e.questionLength)+"\n  ")]),e._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h4",[e._v(e._s(e.currentQuestion.value))])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[e._v(" "+e._s(e.currentQuestion.description)+"  "),s("p")])]),e._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center justify-content-center"},e._l(e.currentQuestion.items,function(e){return s("div",{key:e.id,staticClass:"col-auto"},[s("img",{staticClass:"regulator-image-item",attrs:{src:e.image.url,alt:e.label}})])})),e._v(" "),s("p"),e._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("b-form-slider",{attrs:{ticks:e.sliderTicks,"ticks-labels":e.sliderTickLabels,min:this.currentQuestion.min,max:this.currentQuestion.max,step:this.currentQuestion.stepSize,"trigger-change-event":""},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}}),e._v(" "),s("p",[e._v(e._s(this.rating))])],1)])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.noAnswer,expression:"noAnswer"}],attrs:{type:"radio",name:"name"},domProps:{value:null,checked:e._q(e.noAnswer,null)},on:{change:function(t){e.noAnswer=null}}}),e._v(" "),s("label",[e._v("Ich möchte diese Antwort nicht geben")])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("p",[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.createRegulatorAnswer()}}},[e._v("Antwort senden")])])])])])])])])},staticRenderFns:[]};var f=s("VU/8")(x,T,!1,function(e){s("VzHu")},"data-v-17394bbe",null).exports,A={name:"FavoriteQuestion",data:()=>({itemID:null}),props:["currentQuestion","questionCounter","questionLength"],computed:{},methods:{createFavoriteAnswer(){if(0!==this.$store.getters.getFavoriteAnswers.length){this.$store.getters.getFavoriteAnswers.includes(this.currentQuestion.id)?(this.$emit("nextQuestion"),me.push("/question")):this.sendFavoriteAnswer()}else this.sendFavoriteAnswer()},sendFavoriteAnswer(){this.$store.dispatch("createFavoriteAnswer",{questionID:this.currentQuestion.id,itemID:this.itemID}).then(()=>{this.$emit("nextQuestion"),me.push("/question")})}}},q={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n    Frage "+e._s(e.questionCounter+1)+"/"+e._s(e.questionLength)+"\n  ")]),e._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h4",[e._v(e._s(e.currentQuestion.value))])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[e._v(" "+e._s(e.currentQuestion.description)+"  "),s("p")])]),e._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center justify-content-center"},e._l(e.currentQuestion.items,function(t){return s("div",{key:t.id,staticClass:"col-auto"},[s("img",{key:t.id,staticClass:"image",attrs:{src:t.image.url}}),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.itemID,expression:"itemID"}],attrs:{type:"radio",name:"name"},domProps:{value:t.id,checked:e._q(e.itemID,t.id)},on:{change:function(s){e.itemID=t.id}}}),e._v(" "),s("p",[s("label",{attrs:{for:t.id}},[e._v(" "+e._s(t.label))])])])])])])})),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.itemID,expression:"itemID"}],attrs:{type:"radio",name:"name"},domProps:{value:null,checked:e._q(e.itemID,null)},on:{change:function(t){e.itemID=null}}}),e._v(" "),s("label",[e._v("Ich möchte diese Antwort nicht geben")])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("p",[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.createFavoriteAnswer()}}},[e._v("Antwort senden")])])])])])])])])},staticRenderFns:[]};var Q=s("VU/8")(A,q,!1,function(e){s("Drnp")},"data-v-00269cbb",null).exports,E=s("DAYN"),$={name:"RankingQuestion",data:()=>({rankedItems:[],rankedIDs:[]}),components:{draggable:s.n(E).a},props:["currentQuestion","questionCounter","questionLength"],created:function(){this.getItemData()},computed:{},methods:{createRankingAnswer(){if(0!==this.$store.getters.getRankingAnswers.length){this.$store.getters.getRankingAnswers.includes(this.currentQuestion.id)?(this.$emit("nextQuestion"),me.push("/question")):this.sendRankingAnswer()}else this.sendRankingAnswer()},sendRankingAnswer(){this.setRankingIDs(),this.$store.dispatch("createRankingAnswer",{questionID:this.currentQuestion.id,rankedItems:this.rankedIDs}).then(()=>{this.$emit("nextQuestion"),me.push("/question")})},getItemData(){this.currentQuestion.items.forEach(e=>{this.rankedItems.push(e)})},setRankingIDs(){null!==this.rankedIDs&&this.rankedItems.forEach(e=>{this.rankedIDs.push(e.id)})}}},B={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n    Frage "+e._s(e.questionCounter+1)+"/"+e._s(e.questionLength)+"\n  ")]),e._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h4",[e._v(e._s(e.currentQuestion.value))])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[e._v(" "+e._s(e.currentQuestion.description)+"  "),s("p")])]),e._v(" "),s("draggable",{attrs:{list:e.rankedItems}},e._l(e.rankedItems,function(t){return s("div",{key:t.id,staticClass:"image-list"},[s("img",{staticClass:"image",attrs:{src:t.image.url}}),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("label",{attrs:{for:t.id}},[e._v(" "+e._s(t.label))])])])])})),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"row justify-content-center"},[s("div",[s("ul",{staticClass:"item-list"},e._l(e.rankedItems,function(t,n){return s("li",{key:t.id},[s("strong",[e._v("Position "+e._s(n+1)+":")]),e._v(" "+e._s(t.label))])}))])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.rankedIDs,expression:"rankedIDs"}],attrs:{type:"radio",name:"name"},domProps:{value:null,checked:e._q(e.rankedIDs,null)},on:{change:function(t){e.rankedIDs=null}}}),e._v(" "),s("label",[e._v("Ich möchte diese Antwort nicht geben")])])])]),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.createRankingAnswer()}}},[e._v("Antwort senden")])])])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col"},[t("p"),this._v(" "),t("h4",[this._v("Aktuelle Reihenfolge:")])])])}]};var L=s("VU/8")($,B,!1,function(e){s("Xo7/")},"data-v-a174c3ca",null).exports,O={name:"QuestionsAnswered",props:["votes"],created(){},methods:{deleteDeviceFromContext(){this.$store.dispatch("deleteDeviceFromContext").then(e=>{this.$store.dispatch("unsubscribeContext"),me.push("/context/list")})}}},J={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[e._v("\n Auswertung\n  ")]),e._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[e._v("\n        An dieser Umfrage haben bisher "+e._s(e.votes.length)+" Personen teilgenommen.\n      ")])]),e._v(" "),s("p"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"},on:{click:function(t){t.preventDefault(),e.deleteDeviceFromContext()}}},[e._v("Zurück zu den Kontexten")])])])])])},staticRenderFns:[]};var U={name:"QuestionManager",data:()=>({questions:null,currentQuestion:null,questionCounter:0,questionLength:0,voteCreated:!1,votes:[]}),components:{"choice-question":b,"like-question":y,"like-dislike-question":I,"regulator-question":f,"favorite-question":Q,"ranking-question":L,"questions-answered":s("VU/8")(O,J,!1,function(e){s("u8he")},"data-v-4b164920",null).exports},created(){0!==Object.keys(this.$store.getters.getCurrentContext).length&&(this.questions=this.$store.getters.getCurrentContext.activeSurvey.questions,this.currentQuestion=this.$store.getters.getCurrentContext.activeSurvey.questions[this.questionCounter],this.questionLength=this.$store.getters.getCurrentContext.activeSurvey.questions.length)},computed:{},methods:{nextQuestion(){this.questionCounter<this.questionLength-1?(this.questionCounter+=1,this.currentQuestion=this.$store.getters.getCurrentContext.activeSurvey.questions[this.questionCounter]):this.$store.dispatch("getVotes",this.$store.getters.getCurrentContext.activeSurvey.id).then(e=>{this.votes=this.$store.getters.getVotes,this.voteCreated=!0})}}},S={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.voteCreated?s("questions-answered",{attrs:{votes:e.votes}}):s("div",[e.currentQuestion&&"LikeQuestion"===e.currentQuestion.__typename?s("like-question",{attrs:{currentQuestion:e.currentQuestion,questionCounter:e.questionCounter,questionLength:e.questionLength},on:{nextQuestion:e.nextQuestion}}):e._e(),e._v(" "),e.currentQuestion&&"LikeDislikeQuestion"===e.currentQuestion.__typename?s("like-dislike-question",{attrs:{currentQuestion:e.currentQuestion,questionCounter:e.questionCounter,questionLength:e.questionLength},on:{nextQuestion:e.nextQuestion}}):e._e(),e._v(" "),e.currentQuestion&&"ChoiceQuestion"===e.currentQuestion.__typename?s("choice-question",{attrs:{currentQuestion:e.currentQuestion,questionCounter:e.questionCounter,questionLength:e.questionLength},on:{nextQuestion:e.nextQuestion}}):e._e(),e._v(" "),e.currentQuestion&&"RegulatorQuestion"===e.currentQuestion.__typename?s("regulator-question",{attrs:{currentQuestion:e.currentQuestion,questionCounter:e.questionCounter,questionLength:e.questionLength},on:{nextQuestion:e.nextQuestion}}):e._e(),e._v(" "),e.currentQuestion&&"FavoriteQuestion"===e.currentQuestion.__typename?s("favorite-question",{attrs:{currentQuestion:e.currentQuestion,questionCounter:e.questionCounter,questionLength:e.questionLength},on:{nextQuestion:e.nextQuestion}}):e._e(),e._v(" "),e.currentQuestion&&"RankingQuestion"===e.currentQuestion.__typename?s("ranking-question",{attrs:{currentQuestion:e.currentQuestion,questionCounter:e.questionCounter,questionLength:e.questionLength},on:{nextQuestion:e.nextQuestion}}):e._e()],1)},staticRenderFns:[]};var P=s("VU/8")(U,S,!1,function(e){s("MAr+")},"data-v-4f0e830f",null).exports,R={name:"NavBar",data:()=>({showNavigation:!1}),computed:{}},F={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-light bg-light"},[s("div",{staticClass:"container"},[s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("OPE Demo")]),e._v(" "),s("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:function(t){e.showNavigation=!e.showNavigation}}},[s("span",{staticClass:"navbar-toggler-icon"})]),e._v(" "),s("div",{staticClass:"collapse navbar-collapse",class:{show:e.showNavigation},attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"navbar-nav"})])])])},staticRenderFns:[]};var N={name:"AppWrapper",components:{"app-navigation":s("VU/8")(R,F,!1,function(e){s("OLqo")},"data-v-5371e267",null).exports}},V={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("app-navigation"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1),this._v(" "),t("div",{staticClass:"footer"})],1)},staticRenderFns:[]};var M=s("VU/8")(N,V,!1,function(e){s("XYlv")},"data-v-5300635e",null).exports,j=s("tlQw"),z=s.n(j),K=s("u1/p"),X=s("rp1p"),H=s("uekS"),Y=s("+dIz"),Z=s("kt2X"),W=s.n(Z),G=s("Z6Fn"),ee=s("l9W5"),te=new ee.SubscriptionClient("ws://localhost:3000",{reconnect:!0,connectionParams:()=>({Authorization:`Bearer ${localStorage.getItem("token")}`})}),se=s("+zi7");const ne=new Y.b({introspectionQueryResultData:W.a}),ie=new X.a({uri:"http://localhost:3000"}),ae=new G.a(te),oe=new H.a((e,t)=>{const s=pe.getters.getDeviceToken;return e.setContext({headers:{Authorization:s?`Bearer ${s}`:""}}),t(e)}),re=Object(H.e)(({query:e})=>{const{kind:t,operation:s}=Object(se.i)(e);return"OperationDefinition"===t&&"subscription"===s},ae,oe.concat(ie));var le=new K.a({link:re,cache:new Y.a({fragmentMatcher:ne})});const ce={token:localStorage.getItem("token"),deviceID:localStorage.getItem("deviceID"),hasContext:localStorage.getItem("hasContext")};var ue={state:ce,getters:{getDeviceID:e=>e.deviceID,getDeviceToken:e=>e.token,hasContext:e=>e.hasContext},actions:{async createDevice({commit:e}){e("createDevice",await le.mutate({mutation:z.a`
        mutation createDevice($name: String!) {
          createDevice(data: {name: $name}) {
            device {
              id
            }
            token
          }
        }`,variables:{name:"Demo-Client"}}))},async updateDevice({commit:e},t){await le.mutate({mutation:z.a`
        mutation updateDevice($deviceID: ID!, $context: ID) {
          updateDevice(data: {context: $context}, deviceID: $deviceID) {
            device {
              id
              name
            }
          }
        }`,variables:{deviceID:ce.deviceID,context:t}}),e("updateDevice")},async updateDeviceOwners({commit:e},t){e("updateDeviceOwners",await le.mutate({mutation:z.a`
        mutation updateDeviceOwners($deviceID: ID!, $context: ID, $owners: [ID!]) {
          updateDevice(data: {context: $context, owners: $owners}, deviceID: $deviceID) {
            device {
              id
              name
            }
          }
        }`,variables:{deviceID:ce.deviceID,context:null,owners:t}}))},async deleteDeviceFromContext({commit:e}){await le.mutate({mutation:z.a`
        mutation updateDevice($deviceID: ID!, $context: ID) {
          updateDevice(data: {context: $context}, deviceID: $deviceID) {
            device {
              id
              name
            }
          }
        }`,variables:{deviceID:ce.deviceID,context:null}}),e("deleteDeviceFromContext")},async subscribeDevice({commit:e,dispatch:t}){await le.subscribe({query:z.a`subscription subscribeDevice($deviceID: ID!) {
        deviceUpdate(deviceID: $deviceID)
        {
          device {
          id
          lastUpdate
          context {
            id
            name
            activeSurvey {
              id
              description
              title
              types
              questions {
                id
                description
                value
                items {
                  image {
                    url
                    id
                  }
                  label
                }
                ... on LikeQuestion {
                  likeIcon {
                    id
                    url
                  }
                }
                ... on LikeDislikeQuestion {
                  likeIcon {
                    id
                    url
                  }
                  dislikeIcon {
                    id
                    url
                  }
                }
                ... on ChoiceQuestion {
                  choices {
                    id
                    image {
                      url
                    }
                    label
                    code
                  }
                  choiceDefault: default
                }
                ... on RegulatorQuestion {
                  labels {
                    image {
                      url
                    }
                    id
                    label
                    value
                  }
                  default
                  max
                  min
                  stepSize
                }
                items {
                  id
                  image {
                    url
                  }
                  label
                }
              }
            }
          }
          }
          changedAttributes
          event
        },
      }`,variables:{deviceID:ce.deviceID}}).subscribe({next(e){console.log(e),e.data.deviceUpdate.changedAttributes&&e.data.deviceUpdate.changedAttributes.includes("context")&&null!==e.data.deviceUpdate.device.context&&(console.log("context!=null"),t("getContext",e.data.deviceUpdate.device.context.id))},error(e){console.error("err",e)}})},reconnectClient(){te.close(),te.connect()},unsubscribeDevice(){te.unsubscribe("deviceUpdate")},deleteToken({commit:e}){e("deleteToken")}},mutations:{createDevice(e,t){e.deviceID=t.data.createDevice.device.id,e.token=t.data.createDevice.token,localStorage.setItem("deviceID",t.data.createDevice.device.id),localStorage.setItem("token",t.data.createDevice.token),me.push("/context/list")},updateDevice(e){e.hasContext=!0,localStorage.setItem("hasContext",JSON.stringify(!0))},updateDeviceOwners(e,t){console.log(t)},deleteDeviceFromContext(e){e.hasContext=!1,localStorage.setItem("hasContext",JSON.stringify(!1))},subscribeDevice(e,t){console.log(t)},deleteToken(e){localStorage.setItem("token",null),e.token=null}}};var de={state:{contextList:[],context:JSON.parse(localStorage.getItem("currentContext"))},getters:{getContextList:e=>e.contextList,getCurrentContext:e=>e.context},actions:{cleanCurrentContext(e){e.commit("cleanCurrentContext")},async getContext({commit:e},t){console.log("getting context"),e("setCurrentContext",await le.query({query:z.a`
        query getContext($contextID: ID!) {
          context(contextID: $contextID) {
            id
            name
            devices {
              id
              name
            }
            activeSurvey {
              id
              description
              title
              types
              questions {
                id
                description
                value
                items {
                  image {
                    url
                    id
                  }
                  label
                }
                ... on LikeQuestion {
                  likeIcon {
                    id
                    url
                  }
                }
                ... on LikeDislikeQuestion {
                  likeIcon {
                    id
                    url
                  }
                  dislikeIcon {
                    id
                    url
                  }
                }
                ... on ChoiceQuestion {
                  choices {
                    id
                    image {
                      url
                    }
                    label
                    code
                  }
                  choiceDefault: default
                }
                ... on RegulatorQuestion {
                  labels {
                    image {
                      url
                    }
                    id
                    label
                    value
                  }
                  default
                  max
                  min
                  stepSize
                }
                items {
                  id
                  image {
                    url
                  }
                  label
                }
              }
            }
          }
        }`,variables:{contextID:t}}))},async getContextList({commit:e}){e("getContextList",await le.query({query:z.a` 
        query getContextList {
          contexts {
            id
            name
            devices {
              id
              name
            }
            activeSurvey {
              id
              description
              title
              types
            }
          }
        }`}))},unsubscribeContext({commit:e}){te.unsubscribe("contextUpdate"),e("unsubscribeContext")},async subscribeContext({commit:e,dispatch:t},s){await le.subscribe({query:z.a`subscription subscribeContext($contextID: ID!) {
          contextUpdate(contextID: $contextID)
          {
            context {
              id
              name
              devices {
                id
                name
              }
              activeSurvey {
                id
                description
                title
                types
                questions {
                  id
                  description
                  value
                  items {
                    image {
                      url
                      id
                    }
                    label
                  }
                  ... on LikeQuestion {
                    likeIcon {
                      id
                      url
                    }
                  }
                  ... on LikeDislikeQuestion {
                    likeIcon {
                      id
                      url
                    }
                    dislikeIcon {
                      id
                      url
                    }
                  }
                  ... on ChoiceQuestion {
                    choices {
                      id
                      image {
                        url
                      }
                      label
                      code
                    }
                    choiceDefault: default
                  }
                  ... on RegulatorQuestion {
                    labels {
                      image {
                        url
                      }
                      id
                      label
                      value
                    }
                    default
                    max
                    min
                    stepSize
                  }
                  items {
                    id
                    image {
                      url
                    }
                    label
                  }
                }
              }
            }
            changedAttributes
            stateKey
            event
          },
        }`,variables:{contextID:s}}).subscribe({next(t){e("subscribeContext",t)},error(e){console.error("err",e)}})}},mutations:{subscribeContext(e,t){e.context=t.data.contextUpdate.context},unsubscribeContext(e){e.context=null},cleanCurrentContext(e){e.context={}},getContextList(e,t){e.contextList=t.data.contexts},setCurrentContext(e,t){console.log("setting current context"),e.context=t.data.context,localStorage.setItem("currentContext",JSON.stringify(t.data.context)),me.push("/survey")}}};var ve={state:{answerList:[],choiceAnswers:[],likeAnswers:[],likeDislikeAnswers:[],favoriteAnswers:[],rankingAnswers:[],regulatorAnswers:[],votes:[]},getters:{getVotes:e=>e.votes,getChoiceAnswers:e=>e.choiceAnswers,getLikeAnswers:e=>e.likeAnswers,getLikeDislikeAnswers:e=>e.likeDislikeAnswers,getFavoriteAnswers:e=>e.favoriteAnswers,getRankingAnswers:e=>e.rankingAnswers,getRegulatorAnswers:e=>e.regulatorAnswers},actions:{cleanCurrentContextAnswers(e){e.commit("cleanCurrentContextAnswers")},async getVotes({commit:e},t){le.cache.data.clear();const s=await le.query({query:z.a`
        query getVotes($surveyID: ID!) {
          votes(surveyID: $surveyID)
          {
              id
            creationDate
              context
              device
              answers{
                question
                ...on LikeAnswer { liked }
                ...on LikeDislikeAnswer { liked }
                ...on ChoiceAnswer { choice }
                ...on RegulatorAnswer { rating normalized }
                ...on RankingAnswer { rankedItems }
                ...on FavoriteAnswer { favoriteItem }
              }
          },
        }`,variables:{surveyID:t}});console.log(s),e("getVotes",s)},async createChoiceAnswer({commit:e},t){e("createChoiceAnswer",await le.mutate({mutation:z.a`
        mutation createChoiceAnswer($questionID: ID!, $choiceID: ID) {
          createAnswer(data: {questionID: $questionID, choice: $choiceID})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,variables:{questionID:t.questionID,choiceID:t.choiceID}}))},async createLikeAnswer({commit:e},t){e("createLikeAnswer",await le.mutate({mutation:z.a`
        mutation createLikeAnswer($questionID: ID!, $liked: Boolean) {
          createAnswer(data: {questionID: $questionID, liked: $liked})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,variables:{questionID:t.questionID,liked:t.liked}}))},async createLikeDislikeAnswer({commit:e},t){e("createLikeDislikeAnswer",await le.mutate({mutation:z.a`
        mutation createLikeDislikeAnswer($questionID: ID!, $liked: Boolean) {
          createAnswer(data: {questionID: $questionID, liked: $liked})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,variables:{questionID:t.questionID,liked:t.liked}}))},async createRegulatorAnswer({commit:e},t){e("createRegulatorAnswer",await le.mutate({mutation:z.a`
        mutation createRegulatorAnswer($questionID: ID!, $rating: Float) {
          createAnswer(data: {questionID: $questionID, rating: $rating})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,variables:{questionID:t.questionID,rating:t.rating}}))},async createFavoriteAnswer({commit:e},t){e("createFavoriteAnswer",await le.mutate({mutation:z.a`
        mutation createFavoriteAnswer($questionID: ID!, $favoriteItem: ID) {
          createAnswer(data: {questionID: $questionID, favoriteItem: $favoriteItem})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,variables:{questionID:t.questionID,favoriteItem:t.itemID}}))},async createRankingAnswer({commit:e},t){e("createRankingAnswer",await le.mutate({mutation:z.a`
        mutation createRankingAnswer($questionID: ID!, $rankedItems: [ID!]) {
          createAnswer(data: {questionID: $questionID, rankedItems: $rankedItems})
          {
            __typename
            answer{
              __typename
              question
            }
          },
        }`,variables:{questionID:t.questionID,rankedItems:t.rankedItems}}))}},mutations:{cleanCurrentContextAnswers(e){e.answerList=[],e.choiceAnswers=[],e.likeAnswers=[],e.likeDislikeAnswers=[],e.regulatorAnswers=[],e.favoriteAnswers=[],e.rankingAnswers=[],e.votes=[]},getVotes(e,t){e.votes=t.data.votes},createChoiceAnswer(e,t){e.answerList.push(t.data.createAnswer.answer),e.choiceAnswers.push(t.data.createAnswer.answer.question)},createLikeAnswer(e,t){e.answerList.push(t.data.createAnswer.answer),e.likeAnswers.push(t.data.createAnswer.answer.question)},createLikeDislikeAnswer(e,t){e.answerList.push(t.data.createAnswer.answer),e.likeDislikeAnswers.push(t.data.createAnswer.answer.question)},createRegulatorAnswer(e,t){e.answerList.push(t.data.createAnswer.answer),e.regulatorAnswers.push(t.data.createAnswer.answer.question)},createFavoriteAnswer(e,t){e.answerList.push(t.data.createAnswer.answer),e.favoriteAnswers.push(t.data.createAnswer.answer.question)},createRankingAnswer(e,t){e.answerList.push(t.data.createAnswer.answer),e.rankingAnswers.push(t.data.createAnswer.answer.question)}}};n.a.use(i.a);var pe=new i.a.Store({strict:!0,modules:{device:ue,contexts:de,survey:ve}});n.a.use(r.a);var me=new r.a({routes:[{path:"/",component:M,beforeEnter:(e,t,s)=>{null!==pe.state.device.token?s("/context/list"):s()},children:[{path:"",component:c}]},{path:"/context",component:M,children:[{path:"list",component:v,beforeEnter:(e,t,s)=>{null!==pe.state.device.token?(pe.dispatch("reconnectClient"),pe.dispatch("subscribeDevice"),pe.dispatch("getContextList"),s()):s("/")}}]},{path:"/survey",component:M,children:[{path:"",component:h,beforeEnter(e,t,s){null!==pe.state.device.token?pe.state.contexts.context&&0!==Object.keys(pe.state.contexts.context).length?(pe.dispatch("reconnectClient"),pe.dispatch("subscribeDevice"),s()):s("/context/list"):s("/")}}]},{path:"/question",component:M,children:[{path:"",component:P,beforeEnter(e,t,s){null!==pe.state.device.token?pe.state.contexts.context.activeSurvey&&null!==pe.state.contexts.context.activeSurvey?s():s("/context/list"):s("/")}}]}]}),he=s("4Xhe");s("Jmt5"),s("9M+g"),s("XHQE");n.a.config.productionTip=!1,n.a.use(i.a),n.a.use(he.a),new n.a({el:"#app",router:me,store:pe,components:{App:o},template:"<App/>"})},OLqo:function(e,t){},RaU9:function(e,t){},SOg7:function(e,t){},VzHu:function(e,t){},XHQE:function(e,t){},XYlv:function(e,t){},"Xo7/":function(e,t){},ZKuY:function(e,t){},cP5j:function(e,t){},eOjM:function(e,t){},esxh:function(e,t){},gEn0:function(e,t){e.exports=null},kt2X:function(e,t){e.exports={__schema:{types:[{kind:"OBJECT",name:"Query",possibleTypes:null},{kind:"ENUM",name:"QuestionType",possibleTypes:null},{kind:"OBJECT",name:"Context",possibleTypes:null},{kind:"SCALAR",name:"ID",possibleTypes:null},{kind:"SCALAR",name:"DateTime",possibleTypes:null},{kind:"INTERFACE",name:"Question",possibleTypes:[{name:"LikeQuestion"},{name:"LikeDislikeQuestion"},{name:"ChoiceQuestion"},{name:"RegulatorQuestion"},{name:"RankingQuestion"},{name:"FavoriteQuestion"}]},{kind:"OBJECT",name:"Item",possibleTypes:null},{kind:"OBJECT",name:"ImageData",possibleTypes:null},{kind:"SCALAR",name:"String",possibleTypes:null},{kind:"OBJECT",name:"Survey",possibleTypes:null},{kind:"OBJECT",name:"User",possibleTypes:null},{kind:"SCALAR",name:"Boolean",possibleTypes:null},{kind:"OBJECT",name:"Vote",possibleTypes:null},{kind:"INTERFACE",name:"Answer",possibleTypes:[{name:"LikeAnswer"},{name:"LikeDislikeAnswer"},{name:"ChoiceAnswer"},{name:"RegulatorAnswer"},{name:"RankingAnswer"},{name:"FavoriteAnswer"}]},{kind:"OBJECT",name:"Device",possibleTypes:null},{kind:"OBJECT",name:"State",possibleTypes:null},{kind:"OBJECT",name:"Mutation",possibleTypes:null},{kind:"INPUT_OBJECT",name:"ContextCreateInput",possibleTypes:null},{kind:"OBJECT",name:"ContextCreatePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"ContextUpdateInput",possibleTypes:null},{kind:"OBJECT",name:"ContextUpdatePayload",possibleTypes:null},{kind:"OBJECT",name:"ContextDeletePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"StateCreateInput",possibleTypes:null},{kind:"OBJECT",name:"StateCreatePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"StateUpdateInput",possibleTypes:null},{kind:"OBJECT",name:"StateUpdatePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"StateDeleteInput",possibleTypes:null},{kind:"OBJECT",name:"StateDeletePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"DeviceCreateInput",possibleTypes:null},{kind:"OBJECT",name:"DeviceCreatePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"DeviceUpdateInput",possibleTypes:null},{kind:"OBJECT",name:"DeviceUpdatePayload",possibleTypes:null},{kind:"OBJECT",name:"DeviceDeletePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"BonusImageCreateInput",possibleTypes:null},{kind:"SCALAR",name:"Upload",possibleTypes:null},{kind:"OBJECT",name:"BonusImageCreatePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"ImageUpdateInput",possibleTypes:null},{kind:"OBJECT",name:"ImageUpdatePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"QuestionCreateInput",possibleTypes:null},{kind:"OBJECT",name:"QuestionCreatePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"QuestionUpdateInput",possibleTypes:null},{kind:"SCALAR",name:"Float",possibleTypes:null},{kind:"OBJECT",name:"QuestionUpdatePayload",possibleTypes:null},{kind:"OBJECT",name:"QuestionDeletePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"ItemCreateInput",possibleTypes:null},{kind:"OBJECT",name:"ItemCreatePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"ItemUpdateInput",possibleTypes:null},{kind:"OBJECT",name:"ItemUpdatePayload",possibleTypes:null},{kind:"OBJECT",name:"ItemDeletePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"LabelCreateInput",possibleTypes:null},{kind:"OBJECT",name:"LabelCreatePayload",possibleTypes:null},{kind:"OBJECT",name:"Label",possibleTypes:null},{kind:"INPUT_OBJECT",name:"LabelUpdateInput",possibleTypes:null},{kind:"OBJECT",name:"LabelUpdatePayload",possibleTypes:null},{kind:"OBJECT",name:"LabelDeletePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"ChoiceDescriptionCreateInput",possibleTypes:null},{kind:"OBJECT",name:"ChoiceDescriptionCreatePayload",possibleTypes:null},{kind:"OBJECT",name:"ChoiceDescription",possibleTypes:null},{kind:"INPUT_OBJECT",name:"ChoiceDescriptionUpdateInput",possibleTypes:null},{kind:"OBJECT",name:"ChoiceDescriptionUpdatePayload",possibleTypes:null},{kind:"OBJECT",name:"ChoiceDescriptionDeletePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"SurveyCreateInput",possibleTypes:null},{kind:"OBJECT",name:"SurveyCreatePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"SurveyUpdateInput",possibleTypes:null},{kind:"OBJECT",name:"SurveyUpdatePayload",possibleTypes:null},{kind:"OBJECT",name:"SurveyDeletePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"UserCreateInput",possibleTypes:null},{kind:"OBJECT",name:"UserCreatePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"UserUpdateInput",possibleTypes:null},{kind:"OBJECT",name:"UserUpdatePayload",possibleTypes:null},{kind:"OBJECT",name:"UserDeletePayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"LoginInput",possibleTypes:null},{kind:"OBJECT",name:"LoginPayload",possibleTypes:null},{kind:"INPUT_OBJECT",name:"AnswerCreateInput",possibleTypes:null},{kind:"OBJECT",name:"AnswerCreatePayload",possibleTypes:null},{kind:"OBJECT",name:"Subscription",possibleTypes:null},{kind:"OBJECT",name:"ContextUpdateSubscriptionPayload",possibleTypes:null},{kind:"OBJECT",name:"DeviceUpdateSubscriptionPayload",possibleTypes:null},{kind:"OBJECT",name:"UserUpdateSubscriptionPayload",possibleTypes:null},{kind:"OBJECT",name:"AnswerUpdateSubscriptionPayload",possibleTypes:null},{kind:"OBJECT",name:"NewVoteSubscriptionPayload",possibleTypes:null},{kind:"OBJECT",name:"__Schema",possibleTypes:null},{kind:"OBJECT",name:"__Type",possibleTypes:null},{kind:"ENUM",name:"__TypeKind",possibleTypes:null},{kind:"OBJECT",name:"__Field",possibleTypes:null},{kind:"OBJECT",name:"__InputValue",possibleTypes:null},{kind:"OBJECT",name:"__EnumValue",possibleTypes:null},{kind:"OBJECT",name:"__Directive",possibleTypes:null},{kind:"ENUM",name:"__DirectiveLocation",possibleTypes:null},{kind:"OBJECT",name:"LikeQuestion",possibleTypes:null},{kind:"OBJECT",name:"LikeDislikeQuestion",possibleTypes:null},{kind:"OBJECT",name:"ChoiceQuestion",possibleTypes:null},{kind:"OBJECT",name:"RegulatorQuestion",possibleTypes:null},{kind:"OBJECT",name:"RankingQuestion",possibleTypes:null},{kind:"OBJECT",name:"FavoriteQuestion",possibleTypes:null},{kind:"OBJECT",name:"LikeAnswer",possibleTypes:null},{kind:"OBJECT",name:"LikeDislikeAnswer",possibleTypes:null},{kind:"OBJECT",name:"ChoiceAnswer",possibleTypes:null},{kind:"OBJECT",name:"RegulatorAnswer",possibleTypes:null},{kind:"OBJECT",name:"RankingAnswer",possibleTypes:null},{kind:"OBJECT",name:"FavoriteAnswer",possibleTypes:null}]}}},u8he:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.937af3744c6d60b4941b.js.map