import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import MapView, { Marker, Polyline } from 'react-native-maps';
import {
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

import { ButtonTemplate } from '../ButtonTemplate';
import { PermissionPlaceholder } from '../PermissionPlaceholder';

import { GEO_PERMISSION_LIST, colors } from '../../constants';

import { styles } from './style';

export const GeoMap = ({}) => {
  const stylesShema = styles();
  const { t } = useTranslation();

  const [geoPermission, setGeoPermission] = useState(RESULTS.null);
  const [userLocation, setUserLocation] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const companyLocation = { latitude: 49.42161, longitude: 26.99653 };

  const checkPermissions = async () => {
    await requestMultiple([
      PERMISSIONS?.IOS?.LOCATION_WHEN_IN_USE,
      PERMISSIONS?.ANDROID?.ACCESS_FINE_LOCATION,
    ]).then(statuses => {
      if (
        statuses[PERMISSIONS?.IOS?.LOCATION_WHEN_IN_USE] === RESULTS.GRANTED ||
        statuses[PERMISSIONS?.ANDROID?.ACCESS_FINE_LOCATION] === RESULTS.GRANTED
      ) {
        setGeoPermission(GEO_PERMISSION_LIST.authorized);
      } else {
        setGeoPermission(GEO_PERMISSION_LIST.denied);
      }
    });
  };

  const getMap = () => {
    if (geoPermission === GEO_PERMISSION_LIST.authorized && !isMapOpen) {
      Geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.error(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );

      setIsMapOpen(true);
    } else {
      setIsMapOpen(false);
    }
  };

  useEffect(() => {
    const getGeoPermission = async () => {
      await checkPermissions();
    };

    getGeoPermission();
  }, []);

  return (
    <View style={stylesShema.container}>
      <View style={stylesShema.buttonContainer}>
        <ButtonTemplate
          text={isMapOpen ? t('hideMap') : t('showMap')}
          handleClick={getMap}
        />
      </View>

      {userLocation && isMapOpen && (
        <View style={stylesShema.mapContainer}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: companyLocation.latitude,
              longitude: companyLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={companyLocation} title={'App'} />
            <Marker coordinate={userLocation} title={'Client'} />
            <Polyline
              coordinates={[companyLocation, userLocation]}
              strokeColor={colors.red}
              strokeWidth={2}
            />
          </MapView>
        </View>
      )}

      {geoPermission === GEO_PERMISSION_LIST.denied && (
        <PermissionPlaceholder text={t('permissionGeo')} />
      )}
    </View>
  );
};
