const Variable = {
  PRODUCTION: 'Production',
  USER: {
    LOGIN_TYPES: {
      LOGIN: 'LOGIN',
      SIGNUP: 'SIGNUP',
    },
    ACCOUNT_TYPES: {
      ARTIST: 'Artist',
      FAN: 'Fan',
    },
  },

  DRAWER_LIST_ITEMS: [
    {
      id: 0,
      icon: true,
      label: '',
      routeName: '',
    },
    {
      id: 1,
      label: 'Fan',
      routeName: 'FanMainMenu',
    },
    {
      id: 2,
      label: 'My Profile',
      routeName: 'Profile',
    },
    {
      id: 3,
      label: 'Artists',
      routeName: 'ArtistMainMenu',
    },
    {
      id: 4,
      label: 'NFT',
      routeName: '',
    },
    {
      id: 5,
      label: 'My Wallet',
      routeName: '',
    },
    {
      id: 6,
      label: 'Messages',
      routeName: '',
    },
    {
      id: 7,
      label: 'Logout',
      routeName: '',
    },
  ],
};

export default Variable;
