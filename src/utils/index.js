export function _getFormValues_(form) {
  const values = {};
  Object.entries(form).forEach(([key, item]) => (values[key] = item.value));
  return values;
}

export function _isDevMode_() {
  return typeof google == "undefined";
}

export function _runAppsScript_(script, params) {
  if (typeof params == "object") {
    params = JSON.stringify(params);
  }
  return new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler((res) => {
        try {
          resolve(JSON.parse(res));
        } catch (error) {
          resolve(res);
        }
      })
      .withFailureHandler((error) => reject(error))
      [script]();
  });
}
