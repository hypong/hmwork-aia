import React, { useState, useEffect } from 'react'
import swapiModule from '../../utils/swapiModule'
import PageContent from '../ApiResult/PageContent'
import { Button } from 'react-bootstrap'
import _concat from 'lodash/concat';

const apiName = 'Planet'
const apiPath = 'planets'

export default function Planets() {
  const [planetsData, setPlanetsData] = useState({})
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const handleLoadClick = () => {
    setLoading(true)
    setPage(prevState => prevState + 1)
  }

  useEffect(() => {
    const apiCall = swapiModule.getPlanets({ page }, (data) => {
      if (page === 1){
        setPlanetsData(data)
      } else {
        let resultMerge = _concat(planetsData.results, data.results)
        setPlanetsData({
          ...data,
          results: resultMerge
        })
      }
      setLoading(false)
    });
    return () => {
      apiCall
    }
  }, [page])

  return (
    <>
      <PageContent apiName={apiName} apiPath={apiPath} data={planetsData}/>
      { planetsData.next &&
        <div className="w-100 text-center mt-2 mb-5">
          <Button disabled={loading} onClick={handleLoadClick}>
            Load Page {page + 1}
          </Button>
        </div>
      }
    </>
  )
}
