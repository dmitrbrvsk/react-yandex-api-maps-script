# React-yandex-api-maps-script

yandex api maps script binding for React

## [Documentation](https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/load-docpage/#load__param)

# Installation

`yarn add react-yandex-api-maps-script`

# Usage

```javascript
import YandexApiMapsScript from 'react-yandex-api-maps-script'

const defaultSettings = {
  apikey: 'apikey',
  typeApi: 'free',
  lang: 'ru_RU',
  coordorder: 'latlong',
  load: 'package.full',
  mode: 'release',
  csp: false,
  ns: 'ymaps',
  onload: () => {},
  onerror: () => {},
}

<YandexApiMapsScript {...defaultSettings} />
```