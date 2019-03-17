import React from 'react'
import { string } from 'prop-types'

const YandexApiMapsScript = apikey => {
  return `<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=${apikey}" type="text/javascript" />`
}

YandexApiMapsScript.propTypes = {
  apikey: string.isRequired,
}

export default YandexApiMapsScript