import React, { useState, useEffect } from 'react'
import swapiModule from '../../utils/swapiModule'
import PageContent from '../ApiResult/PageContent'
import { Button } from 'react-bootstrap'
import _concat from 'lodash/concat';

const apiName = 'People'
const apiPath = 'people'

export default function People() {
  const [peopleData, setPeopleData] = useState({})
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const handleLoadClick = () => {
    setLoading(true)
    setPage(prevState => prevState + 1)
  }

  useEffect(() => {
    const apiCall = swapiModule.getPeople({ page }, (data) => {
      if (page === 1){
        setPeopleData(data)
      } else {
        let resultMerge = _concat(peopleData.results, data.results)
        setPeopleData({
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
      <PageContent apiName={apiName} apiPath={apiPath} data={peopleData}/>
      { peopleData.next &&
        <div className="w-100 text-center mt-2 mb-5">
          <Button disabled={loading} onClick={handleLoadClick}>
            Load Page {page + 1}
          </Button>
        </div>
      }
    </>
  )
}
