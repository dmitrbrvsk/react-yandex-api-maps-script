import React from 'react'
import ScriptTag from 'react-script-tag'
import { string, bool, func } from 'prop-types'

const srcApi = {
  free: 'https://api-maps.yandex.ru',
  paid: 'https://enterprise.api-maps.yandex.ru',
}

const YandexApiMapsScript = ({
  apikey,
  typeApi,
  lang,
  coordorder,
  load,
  mode,
  csp,
  ns,
  onload,
  onerror
}) => {
  const src = `
    ${srcApi[typeApi]}/2.1/
    ?lang=${lang}
    &apikey=${apikey}
    &coordorder=${coordorder}
    &load=${load}
    &mode=${mode}
    &csp=${csp}
    &ns=${ns}
    &onload=${onload}
    &onerror=${onerror}
  `

  return (
    <ScriptTag src={src} type="text/javascript" />
  )
}

YandexApiMapsScript.propTypes = {
  typeApi: string,
  apikey: string.isRequired,
  lang: string,
  coordorder: string,
  load: string,
  mode: string,
  csp: bool,
  ns: string,
  onload: func,
  onerror: func,
}

YandexApiMapsScript.defaultProps = {
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

export default YandexApiMapsScript