import React from 'react'
import ScriptTag from 'react-script-tag'
import { string } from 'prop-types'

const srcApi = {
  freeVersion: 'https://api-maps.yandex.ru',
  paidVersion: 'https://enterprise.api-maps.yandex.ru',
}

const YandexApiMapsScript = ({apikey, srcApi}) => {
  const src = `${srcApi}/2.1/?lang=ru_RU&amp;apikey=${apikey}`

  return (
    <ScriptTag src={src} type="text/javascript" />
  )
}

YandexApiMapsScript.propTypes = {
  typeSrc: string,
  apikey: string.isRequired,
}

YandexApiMapsScript.defaultProps = {
  typeSrc: srcApi.freeVersion,
}

export default YandexApiMapsScript