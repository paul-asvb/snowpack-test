import {createApp} from 'vue';
import AppVue from './app.vue';
import React from 'react';
import ReactDOM from 'react-dom';
import AppReact from './app-react';

const app = createApp(AppVue);
app.mount('#app-vue');

ReactDOM.render(
  <React.StrictMode>
    <AppReact />
  </React.StrictMode>,
  document.getElementById('app-react'),
);

if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}