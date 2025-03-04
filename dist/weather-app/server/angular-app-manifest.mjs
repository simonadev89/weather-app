
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
    'index.csr.html': {size: 27875, hash: 'b3e8f4acdaab01da7bc53e3d5ac89f9d0bc8284efa235b44d8a385fb4de98c8d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17158, hash: '812d9e5754462f46d12735c13630669b15bc1d0cc2ca32c3c3bfc2293ad092fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'forecast/index.html': {size: 41868, hash: 'bcffc8a885685d3d642897a889ea312d0602d4619af549e350523358e3ce07a2', text: () => import('./assets-chunks/forecast_index_html.mjs').then(m => m.default)},
    'not-found/index.html': {size: 41167, hash: '01acc73f67e1bae5e1679718dd54c730baf4d1907defb46c60eeb234474bc03e', text: () => import('./assets-chunks/not-found_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 42123, hash: '8767ebe6919c3322b1c37fcf3c7fe5731f3f68c824987eb482cd237caddf4941', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-CHA4UZZU.css': {size: 322269, hash: '7S2+NUtTxgM', text: () => import('./assets-chunks/styles-CHA4UZZU_css.mjs').then(m => m.default)}
  },
};
