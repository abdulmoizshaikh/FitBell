import {
  ArtistMainMenu,
  Profile,
  FanMainMenu,
} from '../../../src-Artist-nft/screens';

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
