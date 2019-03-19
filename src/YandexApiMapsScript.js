import React from 'react'
import ScriptTag from 'react-script-tag'
import { string } from 'prop-types'

const srcApi = {
  free: 'https://api-maps.yandex.ru',
  paid: 'https://enterprise.api-maps.yandex.ru',
}

const YandexApiMapsScript = ({apikey, typeVersionApi}) => {
  const src = `${srcApi[typeVersionApi]}/2.1/?lang=ru_RU&amp;apikey=${apikey}`

  return (
    <ScriptTag src={src} type="text/javascript" />
  )
}

YandexApiMapsScript.propTypes = {
  typeSrc: string,
  apikey: string.isRequired,
}

YandexApiMapsScript.defaultProps = {
  typeSrc: srcApi.free,
}

export default YandexApiMapsScript