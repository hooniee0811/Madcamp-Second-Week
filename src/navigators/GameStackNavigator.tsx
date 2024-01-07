import { createStackNavigator } from '@react-navigation/stack';
import React, { FC, useEffect, useState } from 'react';

import EnterGameScreen from '../screens/EnterGameScreen';
import WaitGameScreen from '../screens/WaitGameScreen';
import GameLobbyScreen from '../screens/GameLobbyScreen';

export type GameStackParamList = {
  EnterGame: { profile: string, token: string};
  WaitGame: { gameTitle: string };
  GameLobby: undefined;
};

type Props = {
  token: string;
  profile: string;
}

const Stack = createStackNavigator<GameStackParamList>();

const GameStackNavigator:FC<Props> = ({token, profile}) => {
  const [isWaitGameScreen, setShowWaitGame] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowWaitGame(false);
    }, 2000);
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EnterGame"
        component={EnterGameScreen}
        options={{headerShown: false}}
        initialParams={{profile: profile, token: token}}
      />
      <Stack.Screen
        name="WaitGame"
        component={WaitGameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameLobby"
        component={GameLobbyScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default GameStackNavigator;


