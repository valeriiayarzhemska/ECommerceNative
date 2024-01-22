import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { selectUser } from '../../store/redux/features/auth/authSelectors';

import { Loader } from '../../components/Loader';
import { CustomHeader } from '../../components/CustomHeader';
import { SettingsItem } from '../../components/SettingsItem';
import { UserIcon } from '../../assets/icons';

import {
  settingsGeneral,
  settingsRed,
  settingsSystem,
} from './settingsOptions';
import { colors } from '../../constants';
import { capitalizedValue } from '../../utils';

import { styles } from './style';

export const Profile = () => {
  const stylesShema = styles();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser) || {};

  const { id = '', name = {}, email = '' } = user;

  const userName = `${capitalizedValue(name.firstname)} ${capitalizedValue(
    name.lastname,
  )}`;

  useEffect(() => {
    setIsLoading(user ? false : true);
  }, []);

  return (
    <SafeAreaView style={stylesShema.container}>
      <ScrollView style={stylesShema.containerScroll}>
        <View style={stylesShema.headerContainer}>
          <CustomHeader title={t('account')} isTitled={true} />
        </View>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <View style={stylesShema.contentContainer}>
              <View style={stylesShema.avatar}>
                <UserIcon width={60} height={60} color={colors.lightGray} />
              </View>

              <View style={stylesShema.nameContainer}>
                <Text style={stylesShema.name}>{userName}</Text>
              </View>

              <View style={stylesShema.emailContainer}>
                <Text style={stylesShema.email}>{email}</Text>
              </View>
            </View>

            <View style={stylesShema.settingsContainer}>
              <View style={stylesShema.settingsWrapper}>
                <View style={stylesShema.titleContainer}>
                  <Text style={stylesShema.title}>{t('settingsGeneral')}</Text>
                </View>

                <View style={stylesShema.settings}>
                  {settingsGeneral.map(item => (
                    <SettingsItem item={item} key={item.id} />
                  ))}
                </View>
              </View>

              <View style={stylesShema.settingsWrapper}>
                <View style={stylesShema.titleContainer}>
                  <Text style={stylesShema.title}>{t('settingsSystem')}</Text>
                </View>

                <View style={stylesShema.settings}>
                  {settingsSystem.map(item => (
                    <SettingsItem item={item} key={item.id} />
                  ))}
                </View>
              </View>

              <View style={stylesShema.settingsWrapper}>
                <View style={stylesShema.settings}>
                  {settingsRed.map(item => (
                    <SettingsItem userId={id} item={item} key={item.id} />
                  ))}
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
