import { name } from '../../package.json';

export const appName = name;

export const cookieConfig = {
  tokenKeyName: `${appName}-token`,
  accountKeyName: `${appName}-account`,
  accountIdKeyName: `${appName}-account-id`,
  localeKeyName: `${appName}-locale`,
};
export const defaultLocale = 'en_US'; // or navigator.language

export const APP_ICS_CONFIG = {
  client_secret: 'Fih793987',
  client_id: 'console_911427',
  grant_type: 'password',
  userType: '8540868',
};
/* *************************** CODETYPE CONFIG *************************** */
export const CodeType = {
  SUCCESS: 200,
  isSuccess: (code) => code === CodeType.SUCCESS,
  UNAUTHENTICATED: 401,
  isUnAuthenticated: (code) => code === CodeType.UNAUTHENTICATED,
  TIMEOUT: 408,
  isTimeout: (code) => code === CodeType.TIMEOUT,
};
export const SUPPORT_DASHBOARD_FEATURES = [
  {
    label: 'face ID',
    value: 'face_id',
  },
  {
    label: 'turn away',
    value: 'turn_away',
  },
  {
    label: 'smoking',
    value: 'smoking',
  },
  {
    label: 'phone using',
    value: 'phone_using',
  },
  {
    label: 'drink',
    value: 'drink',
  },
  {
    label: 'yawn',
    value: 'yawn',
  },
];
export const configs = { cookieConfig };

export default configs;
