import {ArtistMainMenu, Profile, FanMainMenu} from '../../screens';

export const AccountStack = [
  {
    name: 'Profile',
    component: Profile,
    key: 'Profile',
  },
  {
    name: 'ArtistMainMenu',
    component: ArtistMainMenu,
    key: 'ArtistMainMenu',
  },
  {
    name: 'FanMainMenu',
    component: FanMainMenu,
    key: 'FanMainMenu',
  },
];
