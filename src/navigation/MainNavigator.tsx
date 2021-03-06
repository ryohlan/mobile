import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from 'screens/home';
import {TutorialScreen} from 'screens/tutorial';
import {DataSharingScreen} from 'screens/datasharing';
import {PrivacyScreen} from 'screens/privacy';
import {SharingScreen} from 'screens/sharing';
import {OnboardingScreen} from 'screens/onboarding';
import {LanguageScreen} from 'screens/language';
import {StatusBar} from 'react-native';
import {useStorage} from 'services/StorageService';

const MainStack = createStackNavigator();

const withDarkNav = (Component: React.ElementType) => {
  const ComponentWithDarkNav = (props: any) => (
    <>
      <StatusBar barStyle="dark-content" />
      <Component {...props} />
    </>
  );
  return ComponentWithDarkNav;
};
const withLightNav = (Component: React.ElementType) => {
  const ComponentWithLightNav = (props: any) => (
    <>
      <StatusBar barStyle="light-content" />
      <Component {...props} />
    </>
  );
  return ComponentWithLightNav;
};

export interface MainStackParamList extends Record<string, object | undefined> {
  Home: undefined;
  Onboarding: undefined;
  Tutorial: undefined;
}

const HomeScreenWithNavBar = withLightNav(HomeScreen);
const OnboardingScreenWithNavBar = withDarkNav(OnboardingScreen);
const TutorialScreenWithNavBar = withDarkNav(TutorialScreen);
const DataSharingScreenWithNavBar = withDarkNav(DataSharingScreen);
const PrivacyScreenWithNavBar = withDarkNav(PrivacyScreen);
const SharingScreenWithNavBar = withDarkNav(SharingScreen);
const LanguageScreenWithNavBar = withDarkNav(LanguageScreen);

const MainNavigator = () => {
  const {isOnboarding} = useStorage();
  return (
    <MainStack.Navigator headerMode="none" mode="modal" initialRouteName={isOnboarding ? 'Onboarding' : 'Home'}>
      <MainStack.Screen name="Home" component={HomeScreenWithNavBar} />
      <MainStack.Screen name="Onboarding" component={OnboardingScreenWithNavBar} />
      <MainStack.Screen name="Tutorial" component={TutorialScreenWithNavBar} />
      <MainStack.Screen name="DataSharing" component={DataSharingScreenWithNavBar} />
      <MainStack.Screen name="Privacy" component={PrivacyScreenWithNavBar} />
      <MainStack.Screen name="Sharing" component={SharingScreenWithNavBar} />
      <MainStack.Screen name="LanguageSelect" component={LanguageScreenWithNavBar} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
