
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/forecast"
  },
  {
    "renderMode": 2,
    "route": "/not-found"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27860, hash: 'e77f4c94125132613952f301ba3b328983bc8c45a2de0bde93212ebfdbb866ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17143, hash: '0212e96620f4f88ec5514c2a65dbd9a88ea37e022e7b571eeb1ca57f2941d6d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 42108, hash: 'a47402c84fe66fddded871f9671c253dc0ec7d7155a223173838d61df0eafa5c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'forecast/index.html': {size: 41853, hash: 'f92c304acabe07ef7fcb65d44db3a3e5157c78e00744d86404434006b8f8c527', text: () => import('./assets-chunks/forecast_index_html.mjs').then(m => m.default)},
    'not-found/index.html': {size: 41152, hash: '5774f9b8067c8b2627dd66c75f331507fa17bc46bec3dac1384d7568954d01bb', text: () => import('./assets-chunks/not-found_index_html.mjs').then(m => m.default)},
    'styles-CHA4UZZU.css': {size: 322269, hash: '7S2+NUtTxgM', text: () => import('./assets-chunks/styles-CHA4UZZU_css.mjs').then(m => m.default)}
  },
};
