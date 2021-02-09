import React, { useState, useEffect } from 'react'
import swapiModule from '../../utils/swapiModule'
import PageContent from '../ApiResult/PageContent'

const apiName = 'Film'
const apiPath = 'films'

export default function Films() {
  const [filmData, setFilmData] = useState({})

  useEffect(() => {
    const apiCall = swapiModule.getFilms((data) => {
      setFilmData(data)
    })
    return () => {
      apiCall
    }
  }, [])

  return (
    <PageContent apiName={apiName} apiPath={apiPath} data={filmData}/>
  )
}
