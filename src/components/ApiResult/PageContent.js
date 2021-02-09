import React from 'react'

export default function PageContent({ apiName, apiPath, data }) {
  return (
    <div className="content-main">
      <div className="page-header">
        <h1>{apiName} List</h1>
      </div>
      <div className="request-info">
        <pre className="prettyprint"><b>GET</b> /api/{apiPath}/</pre>
      </div>
      <div className="response-info">
        <pre className="prettyprint">
          {JSON.stringify({ data }, undefined, 2)}
        </pre>
      </div>
    </div>
  )
}
