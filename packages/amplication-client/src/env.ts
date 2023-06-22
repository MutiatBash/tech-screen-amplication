<<<<<<< HEAD
=======
import { environment } from "./environments/environment";
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
/**
 * Environment variables can come from process.env or from window
 * This module abstracts the source of them.
 */

function get(name: string): string | undefined {
  // @ts-ignore
<<<<<<< HEAD
  return window[name] || process.env[name];
=======
  return window[name] || environment[name] || process.env[name];
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
}

export const NODE_ENV = get("NODE_ENV");
export const REACT_APP_GITHUB_AUTH_ENABLED = get(
  "NX_REACT_APP_GITHUB_AUTH_ENABLED"
);
export const REACT_APP_PADDLE_VENDOR_ID = get("NX_REACT_APP_PADDLE_VENDOR_ID");
export const REACT_APP_AMPLITUDE_API_KEY = get(
  "NX_REACT_APP_AMPLITUDE_API_KEY"
);
export const REACT_APP_FEATURE_FLAGS = get("NX_REACT_APP_FEATURE_FLAGS");
export const REACT_APP_GITHUB_CONTROLLER_LOGIN_URL = get(
  "NX_REACT_APP_GITHUB_CONTROLLER_LOGIN_URL"
);
export const REACT_APP_STORAGE_GATEWAY_URL = get(
  "NX_REACT_APP_STORAGE_GATEWAY_URL"
);
export const REACT_APP_DATA_SOURCE = get("NX_REACT_APP_DATA_SOURCE");
export const REACT_APP_PLUGIN_API_DATA_SOURCE = get(
  "NX_REACT_APP_PLUGIN_API_DATA_SOURCE"
);
<<<<<<< HEAD
export const REACT_APP_SERVER_URI = get("NX_REACT_APP_SERVER_URI");
export const REACT_APP_BILLING_ENABLED = get("NX_REACT_APP_BILLING_ENABLED");
export const REACT_APP_BILLING_API_KEY = get("NX_REACT_APP_BILLING_API_KEY");
=======

export const REACT_APP_PLUGIN_VERSION_USE_LATEST = get(
  "NX_REACT_APP_PLUGIN_VERSION_USE_LATEST"
);

export const REACT_APP_BILLING_ENABLED = get("NX_REACT_APP_BILLING_ENABLED");
export const REACT_APP_BILLING_API_KEY = get("NX_REACT_APP_BILLING_API_KEY");

export const NX_REACT_APP_AUTH_LOGIN_URI = get("NX_REACT_APP_AUTH_LOGIN_URI");
export const NX_REACT_APP_AUTH_LOGOUT_URI = get("NX_REACT_APP_AUTH_LOGOUT_URI");
>>>>>>> 46ef1fee2562a397e75dc75d8aa1b3e2356c30e9
