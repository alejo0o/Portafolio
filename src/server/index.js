require('ignore-styles'); //en el server se ignora todos los llamados a clases de css desde el lado del servidor ya que no es posible

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: [
    'jpg',
    'pdf',
    'png',
    'mp3',
    'mp4',
    'svg',
    'eot',
    'ttf',
    'woff',
    'webm',
    'ico',
    'woff2',
  ],
  name: 'assets/[hash].[ext]',
});

require('./server');
