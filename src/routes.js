import SplashPage from './components/SplashPage.vue';
import RegisterBizz from './components/RegisterBizz.vue';
import RegisterBuzz from './components/RegisterBuzz.vue';
import CreateProfileBizz from './components/CreateProfileBizz.vue';
import CreateProfileBuzz from './components/CreateProfileBuzz.vue';
import ProfileSuccess from './components/ProfileSuccess.vue';
import BusinessList from './components/BusinessList.vue';
import InfluencerList from './components/InfluencerList.vue';
import ProfileBizz from './components/ProfileBizz.vue';
import ProfileBuzz from './components/ProfileBuzz.vue';
import SendMessage from './components/SendMessage.vue';
import Messages from './components/Messages.vue';
import EditBizz from './components/EditBizz.vue';
import EditBuzz from './components/EditBuzz.vue';
import Login from './components/Login.vue';

export default [
    { path: '/', component: SplashPage },                           //SplashPage
    { path: '/register', component: RegisterBizz },                 //Register Bizz
    { path: '/register/bizz', component: RegisterBizz },            //Register Bizz
    { path: '/register/buzz', component: RegisterBuzz },            //Register Buzz
    // { path: '/bizz/profile/new', component: CreateProfileBizz },    //Create Profile Bizz
    // { path: '/buzz/profile/new', component: CreateProfileBuzz },    //Create Profile Buzz
    { path: '/success', component: ProfileSuccess },                //Success Creating Profile
    { path: '/businesses', component: BusinessList },               //Get All Bizz
    { path: '/influencers', component: InfluencerList },            //Get All Buzz
    { path: '/profile/bizz/:id', component: ProfileBizz },          //Get One Bizz
    { path: '/profile/buzz/:id', component: ProfileBuzz },          //Get One Buzz

    { path: '/contact/:id', component: SendMessage },               //Send a Message
    { path: '/my/messages/:id', component: Messages },              //Get All Own Messages
    { path: '/message/:id', component: Messages },                  //Get One Message
    
    { path: '/profile/bizz/edit/:id', component: EditBizz },        //Edit Own Bizz Profile
    { path: '/profile/buzz/edit/:id', component: EditBuzz },        //Edit Own Buzz Profile
    { path: '/login', component: Login },                           //Login
]