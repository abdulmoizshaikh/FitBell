import {
  ChooseLoginOrSignup,
  ArtistCreateAccount,
  FanCreateAccount,
  ArtistFanCreateAccountS1,
  Login,
  SendOTP,
  VerifyOTP,
  AsArtistOrFanSignup,

  // ArtistFanCreateAccountS2,
} from '../../screens';

export const AuthStack = [
  {
    name: 'ChooseLoginOrSignup',
    component: ChooseLoginOrSignup,
    key: 'ChooseLoginOrSignup',
  },
  {
    name: 'AsArtistOrFanSignup',
    component: AsArtistOrFanSignup,
    key: 'AsArtistOrFanSignup',
  },
  {
    name: 'ArtistFanCreateAccountS1',
    component: ArtistFanCreateAccountS1,
    key: 'ArtistFanCreateAccountS1',
  },
  // {
  //   name: 'ArtistFanCreateAccountS2',
  //   component: ArtistFanCreateAccountS2,
  //   key: 'ArtistFanCreateAccountS2',
  // },
  {
    name: 'ArtistCreateAccount',
    component: ArtistCreateAccount,
    key: 'ArtistCreateAccount',
  },
  {
    name: 'FanCreateAccount',
    component: FanCreateAccount,
    key: 'FanCreateAccount',
  },
  {
    name: 'Login',
    component: Login,
    key: 'Login',
  },
  {
    name: 'SendOTP',
    component: SendOTP,
    key: 'SendOTP',
  },
  {
    name: 'VerifyOTP',
    component: VerifyOTP,
    key: 'VerifyOTP',
  },
];
