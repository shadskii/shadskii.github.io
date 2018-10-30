/* eslint-disable no-console */

import {register} from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      window.alert(
          'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      );
    },
    cached() {
      window.alert('Content has been cached for offline use.');
    },
    updated() {
      window.alert('New content is available; please refresh.');
    },
    offline() {
      window.alert('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      window.alert('Error during service worker registration:', error);
    },
  });
}
