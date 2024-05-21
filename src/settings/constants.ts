import { TIME_FORMAT } from './formatDateTime';

const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const API_SERVER_SOCKET = process?.env?.NEXT_PUBLIC_SERVER_SOCKET_URL;
const ASSETS_URL = process.env.NEXT_PUBLIC_ASSETS_URL;
const SITE_URL = '/';

const USER_INFO = '_user_info';
const ACCESS_TOKEN = '_access_token';
const REFRESH_TOKEN = '_refresh_token';
const IS_AUTH = '_is_auth';

const MAX_SUB_ACCOUNT = 4;

const SUB_ACCOUNT_ID = '_sub_account_id';
const SUB_ACCOUNT_INFO = '_sub_account_info';

const SCRIPT_JITSI = 'https://meet.jit.si/external_api.js';

const constants = {
  API_SERVER,
  ASSETS_URL,
  SITE_URL,
  USER_INFO,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  IS_AUTH,
  MAX_SUB_ACCOUNT,
  SUB_ACCOUNT_ID,
  SUB_ACCOUNT_INFO,
  TIME_FORMAT,
  SCRIPT_JITSI,
  API_SERVER_SOCKET,
};

export default constants;
