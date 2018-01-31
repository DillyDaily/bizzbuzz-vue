import SplashPage from './components/SplashPage.vue';
import RegisterBizz from './components/RegisterBizz.vue';
import RegisterBuzz from './components/RegisterBuzz.vue';
import ProfileSuccess from './components/ProfileSuccess.vue';
import BusinessList from './components/BusinessList.vue';
import InfluencerList from './components/InfluencerList.vue';
import ProfileBizz from './components/ProfileBizz.vue';
import ProfileBuzz from './components/ProfileBuzz.vue';
import MyBizzProfile from './components/MyBizzProfile.vue';
import MyBuzzProfile from './components/MyBuzzProfile.vue';
import SendMessage from './components/SendMessage.vue';
import SendMessageToBuzz from './components/SendMessageToBuzz.vue';

import BizzMessages from './components/BizzMessages.vue';
import BuzzMessages from './components/BuzzMessages.vue';

import LoginBizz from './components/LoginBizz.vue';
import LoginBuzz from './components/LoginBuzz.vue';

export default [
    { path: '/', component: SplashPage },                                         //SplashPage
    { path: '/register/bizz', component: RegisterBizz },                          //Register Bizz
    { path: '/register/buzz', component: RegisterBuzz },                          //Register Buzz
    { path: '/success', component: ProfileSuccess },                              //Success Creating Profile
    { path: '/businesses', component: BusinessList },                             //Get All Bizz
    { path: '/influencers', component: InfluencerList },                          //Get All Buzz
    { path: '/profile/bizz/:id', props: true, component: ProfileBizz },           //Get One Bizz
    { path: '/profile/buzz/:id', props: true, component: ProfileBuzz },           //Get One Buzz
    { path: '/contact/buzz/:id', props: true, component: SendMessage },           //Send a Message
    { path: '/contact/bizz/:id', props: true, component: SendMessageToBuzz },     //Send a Message
   
    { path: '/my/bizz/messages/:id', props: true, component: BizzMessages },      //Get All Own Messages
    { path: '/my/buzz/messages/:id', props: true, component: BuzzMessages },      //Get All Own Messages
   
    { path: '/my/bizz/profile/:id', props: true, component: MyBizzProfile },      //Get Own Profile
    { path: '/my/buzz/profile/:id', props: true, component: MyBuzzProfile },      //Get Own Profile
    
    { path: '/login/bizz', component: LoginBizz },                                //Login
    { path: '/login/buzz', component: LoginBuzz },                                //Login
]