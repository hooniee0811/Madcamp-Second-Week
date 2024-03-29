import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import GameStackNavigator from './src/navigators/GameStackNavigator';

export type Profile = {
  id: number;
  nickname: string;
  thumbnailImageUrl: string;
};

function App(): JSX.Element {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [profile, setProfile] = useState<Profile>({
    id: -1,
    nickname: '',
    thumbnailImageUrl: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  });

  return (
    <NavigationContainer>
      {showSplash ? (
        <SplashScreen />
      ) : !isLogin ? (
        <LoginScreen
          setIsLogin={setIsLogin}
          setProfile={setProfile}
          setToken={setToken}
        />
      ) : (
        <GameStackNavigator token={token} profile={profile} />
      )}
    </NavigationContainer>
  );
}

export default App;
