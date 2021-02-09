import React, { useState, useEffect } from 'react'
import swapiModule from '../../utils/swapiModule'
import PageContent from '../ApiResult/PageContent'
import { Button } from 'react-bootstrap'
import _concat from 'lodash/concat';

const apiName = 'Species'
const apiPath = 'species'

export default function Planets() {
  const [speciesData, setSpeciesData] = useState({})
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const handleLoadClick = () => {
    setLoading(true)
    setPage(prevState => prevState + 1)
  }

  useEffect(() => {
    const apiCall = swapiModule.getAllSpecies({ page }, (data) => {
      if (page === 1){
        setSpeciesData(data)
      } else {
        let resultMerge = _concat(speciesData.results, data.results)
        setSpeciesData({
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
      <PageContent apiName={apiName} apiPath={apiPath} data={speciesData}/>
      { speciesData.next &&
        <div className="w-100 text-center mt-2 mb-5">
          <Button disabled={loading} onClick={handleLoadClick}>
            Load Page { page + 1}
          </Button>
        </div>
      }
    </>
  )
}
