// Packages
import LoginContainer from '../packages/auth/login/login-container';
import SignupContainer from '../packages/auth/signup/signup-container';
import IntroContainer from '../packages/auth/intro/intro-container';
import ReferralCodeContainer from '../packages/auth/referral-code/referral-code-container';
import ForgotPassContainer from '../packages/auth/forgot-pass/forgot-pass-container';
import VerificationContainer from '../packages/auth/verification/verification-container';
import ChangePassContainer from '../packages/auth/change-pass/change-pass-container';
import UpdateProfileContainer from '../packages/account/profile/update-profile/update-profile-container';
import AllergiesRestrictionContainer from '../packages/account/profile/allergies and restriction/allergies-restriction';
import OtherEllergiesRestrictionsContainer from '../packages/account/profile/other-allergies-restrictions/other-allergies-restrictions';
import ChildFitnessGoalsContainer from '../packages/account/profile/fitness goals/child-fitness-goals/child-fitness-goals-container';
import FitnessContainer from '../packages/account/profile/fitness goals/fitness-goals-container';
import CardsListContainer from '../packages/orders/cards-list/cards-list-container';
import CalenderCardContainer from '../packages/orders/calender-and-cards/calender-cards-container';
import CongratzScreen from '../packages/account/profile/congratz/index';
// import ExploreContainer from '../packages/products/explore/explore-container';
import ChatContainer from '../packages/chat/chat-container';
import CardDetailsContainer from '../packages/products/card-details/card-details-container';
import PaymentMethod from '../packages/account/payment/payment/payment-method';
import FavouriteContainer from '../packages/products/favourite/favourite-container';
import YourBuildContainer from '../packages/orders/your-build/basic-tab';
import DietPreferencesContainer from '../packages/account/profile/diet-preferences-goals/diet-preferences-goals-container';
import Give3Container from '../packages/give3-get3/give3-get3-container';
import NotificationContainer from '../packages/notification/notification-container';
import DeliveryAddressContainer from '../packages/account/delivery/delivery-address/delivery-address-container';
import AddNewDeliveryAddressContainer from '../packages/account/delivery/delivery-address/add-new-address/add-new-address-container';
import CreditRewardContainer from '../packages/products/credit-rewards/credit-rewards-container';
import CreditHistoryContainer from '../packages/products/credit-rewards/credit-history/credit-history-container';
import ConfirmOrder from '../packages/orders/confirm-order';
import Settings from '../packages/account/profile/settings/settings';
import ConfirmationType from '../packages/account/profile/confirmation-type/confirmation-type';
import PickUpLocationsContainer from '../packages/orders/pickup-locations/pickup-locations';
import DeliveryType from '../packages/orders/delivery-type/delivery-type';
import ProductsMenuContainer from '../packages/products/products-menu/products-menu';
import ContactUs from '../packages/contact-us/contact-us';
import Subscription from '../packages/account/subscription';
// extra
import CalendarsScreen from '../packages/calender temp/tempCalender';
import AuthLoadingScreen from '../common/components/auth-loading/auth-loading';

const AuthRoutes = {
  AuthLoading: {
    screen: AuthLoadingScreen,
  },
  CalendarsScreen: {
    screen: CalendarsScreen,
  },
  Introduction: {
    screen: IntroContainer,
  },
  Login: {
    screen: LoginContainer,
  },
  Signup: {
    screen: SignupContainer,
  },
  ReferralCode: {
    screen: ReferralCodeContainer,
  },
  ForgotPass: {
    screen: ForgotPassContainer,
  },
  Verification: {
    screen: VerificationContainer,
  },
  ChangePass: {
    screen: ChangePassContainer,
  },
  Profile: {
    screen: UpdateProfileContainer,
  },
  AllergiesRestriction: {
    screen: AllergiesRestrictionContainer,
  },
  OtherEllergiesRestrictions: {
    screen: OtherEllergiesRestrictionsContainer,
  },
  FitnessGoals: {
    screen: FitnessContainer,
  },
  ChildFitnessGoals: {
    screen: ChildFitnessGoalsContainer,
  },
  CongratzScreen: {
    screen: CongratzScreen,
  },
  CardsList: {
    screen: CardsListContainer,
  },
  CalenderCardsScreen: {
    screen: CalenderCardContainer,
  },
  // Explore: {
  //     screen: ExploreContainer
  // },
  ChatScreen: {
    screen: ChatContainer,
  },
  CardsOrders: {
    screen: CardDetailsContainer,
  },
  Favourite: {
    screen: FavouriteContainer,
  },
  PaymentMethod: {
    screen: PaymentMethod,
  },
  Yourbuild: {
    screen: YourBuildContainer,
  },
  DietGoals: {
    screen: DietPreferencesContainer,
  },
  Give3: {
    screen: Give3Container,
  },
  Notification: {
    screen: NotificationContainer,
  },
  DeliveryAddress: {
    screen: DeliveryAddressContainer,
  },
  AddNewDeliveryAddress: {
    screen: AddNewDeliveryAddressContainer,
  },
  CreditReward: {
    screen: CreditRewardContainer,
  },
  CreditHistory: {
    screen: CreditHistoryContainer,
  },
  ConfirmOrder: {
    screen: ConfirmOrder,
  },
  Settings: {
    screen: Settings,
  },
  DailyConfirmation: {
    screen: ConfirmationType,
  },
  PickUpLocations: {
    screen: PickUpLocationsContainer,
  },
  DeliveryType: {
    screen: DeliveryType,
  },
  Menu: {
    screen: ProductsMenuContainer,
  },
  ContactUs: {
    screen: ContactUs,
  },
  Subscription: {
    screen: Subscription,
  },

  // Extra
};

export default AuthRoutes;
