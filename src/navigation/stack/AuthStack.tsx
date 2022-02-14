// import {
//   ChooseLoginOrSignup,
// } from '../../screens';

import {
  LoginContainer,
  SignupContainer,
  IntroContainer,
  ReferralCodeContainer,
  ForgotPassContainer,
  VerificationContainer,
  ChangePassContainer,
  UpdateProfileContainer,
  AllergiesRestrictionContainer,
  OtherEllergiesRestrictionsContainer,
  ChildFitnessGoalsContainer,
  FitnessContainer,
  CardsListContainer,
  CalenderCardContainer,
  CongratzScreen,
  //   ExploreContainer,
  ChatContainer,
  CardDetailsContainer,
  PaymentMethod,
  FavouriteContainer,
  YourBuildContainer,
  DietPreferencesContainer,
  Give3Container,
  NotificationContainer,
  DeliveryAddressContainer,
  AddNewDeliveryAddressContainer,
  CreditRewardContainer,
  CreditHistoryContainer,
  ConfirmOrder,
  Settings,
  ConfirmationType,
  PickUpLocationsContainer,
  DeliveryType,
  ProductsMenuContainer,
  ContactUs,
  Subscription,
  CalendarsScreen,
  AuthLoadingScreen,
} from '../../packages';

const AuthRoutes = {
  AuthLoading: {
    name: 'AuthLoading',
    key: 'AuthLoading',
    component: AuthLoadingScreen,
  },
  CalendarsScreen: {
    name: 'CalendarsScreen',
    key: 'CalendarsScreen',
    component: CalendarsScreen,
  },
  Introduction: {
    name: 'Introduction',
    key: 'Introduction',
    component: IntroContainer,
  },
  Login: {
    name: 'Login',
    key: 'Login',
    component: LoginContainer,
  },
  Signup: {
    name: 'Signup',
    key: 'Signup',
    component: SignupContainer,
  },
  ReferralCode: {
    name: 'ReferralCode',
    key: 'ReferralCode',
    component: ReferralCodeContainer,
  },
  ForgotPass: {
    name: 'ForgotPass',
    key: 'ForgotPass',
    component: ForgotPassContainer,
  },
  Verification: {
    name: 'Verification',
    key: 'Verification',
    component: VerificationContainer,
  },
  ChangePass: {
    name: 'ChangePass',
    key: 'ChangePass',
    component: ChangePassContainer,
  },
  Profile: {
    name: 'Profile',
    key: 'Profile',
    component: UpdateProfileContainer,
  },
  AllergiesRestriction: {
    name: 'AllergiesRestriction',
    key: 'AllergiesRestriction',
    component: AllergiesRestrictionContainer,
  },
  OtherEllergiesRestrictions: {
    name: 'OtherEllergiesRestrictions',
    key: 'OtherEllergiesRestrictions',
    component: OtherEllergiesRestrictionsContainer,
  },
  FitnessGoals: {
    name: 'FitnessGoals',
    key: 'FitnessGoals',
    component: FitnessContainer,
  },
  ChildFitnessGoals: {
    name: 'ChildFitnessGoals',
    key: 'ChildFitnessGoals',
    component: ChildFitnessGoalsContainer,
  },
  CongratzScreen: {
    name: 'CongratzScreen',
    key: 'CongratzScreen',
    component: CongratzScreen,
  },
  CardsList: {
    name: 'CardsList',
    key: 'CardsList',
    component: CardsListContainer,
  },
  CalenderCardsScreen: {
    name: 'CalenderCardsScreen',
    key: 'CalenderCardsScreen',
    component: CalenderCardContainer,
  },
  // // Explore: {
  // name:'',
  // key:'',//
  // component: ExploreContainer
  // // },
  ChatScreen: {
    name: 'ChatScreen',
    key: 'ChatScreen',
    component: ChatContainer,
  },
  CardsOrders: {
    name: 'CardsOrders',
    key: 'CardsOrders',
    component: CardDetailsContainer,
  },
  Favourite: {
    name: 'Favourite',
    key: 'Favourite',
    component: FavouriteContainer,
  },
  PaymentMethod: {
    name: 'PaymentMethod',
    key: 'PaymentMethod',
    component: PaymentMethod,
  },
  Yourbuild: {
    name: 'Yourbuild',
    key: 'Yourbuild',
    component: YourBuildContainer,
  },
  DietGoals: {
    name: 'DietGoals',
    key: 'DietGoals',
    component: DietPreferencesContainer,
  },
  Give3: {
    name: 'Give3',
    key: 'Give3',
    component: Give3Container,
  },
  Notification: {
    name: 'Notification',
    key: 'Notification',
    component: NotificationContainer,
  },
  DeliveryAddress: {
    name: 'DeliveryAddress',
    key: 'DeliveryAddress',
    component: DeliveryAddressContainer,
  },
  AddNewDeliveryAddress: {
    name: 'AddNewDeliveryAddress',
    key: 'AddNewDeliveryAddress',
    component: AddNewDeliveryAddressContainer,
  },
  CreditReward: {
    name: 'CreditReward',
    key: 'CreditReward',
    component: CreditRewardContainer,
  },
  CreditHistory: {
    name: 'CreditHistory',
    key: 'CreditHistory',
    component: CreditHistoryContainer,
  },
  ConfirmOrder: {
    name: 'ConfirmOrder',
    key: 'ConfirmOrder',
    component: ConfirmOrder,
  },
  Settings: {
    name: 'Settings',
    key: 'Settings',
    component: Settings,
  },
  DailyConfirmation: {
    name: 'DailyConfirmation',
    key: 'DailyConfirmation',
    component: ConfirmationType,
  },
  PickUpLocations: {
    name: 'PickUpLocations',
    key: 'PickUpLocations',
    component: PickUpLocationsContainer,
  },
  DeliveryType: {
    name: 'DeliveryType',
    key: 'DeliveryType',
    component: DeliveryType,
  },
  Menu: {
    Menume: '',
    key: 'Menu',
    component: ProductsMenuContainer,
  },
  ContactUs: {
    name: 'ContactUs',
    key: 'ContactUs',
    component: ContactUs,
  },
  Subscription: {
    name: 'Subscription',
    key: 'Subscription',
    component: Subscription,
  },

  // Extra
};

export default AuthRoutes;

export const AuthStack = [
  // {
  //   name: 'ChooseLoginOrSignup',
  // name:'ChooseLoginOrSignup',
  // key:'ChooseLoginOrSignup',//
  // component: ChooseLoginOrSignup,
  //   key: 'ChooseLoginOrSignup',
  // },
];
