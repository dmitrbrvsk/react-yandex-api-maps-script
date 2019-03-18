import React from 'react'
import ScriptTag from 'react-script-tag'
import { string } from 'prop-types'

const YandexApiMapsScript = apikey => {
  const src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=${apikey}`
  return  (
    <ScriptTag src={src} type="text/javascript" />
  )
}

YandexApiMapsScript.propTypes = {
  apikey: string.isRequired,
}

export default YandexApiMapsScript