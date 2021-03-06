import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { ScreenWrapper } from 'components/ScreenWrapper';

export const WishlistScreen = () => (
  <ScreenWrapper>
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </ScreenWrapper>
);
