import React from "react"
import 'regenerator-runtime/runtime'
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import PageContent from "../../components/ApiResult/PageContent.js"
import { MOCK_DATA } from "../../config/app.config"

const apiName = "test" 
const apiPath = "test"

describe("Navbar testing", () => {
  it("Home Text exist", async () => {
    render(<PageContent apiName={apiName} apiPath={apiPath} data={MOCK_DATA}/>)
    expect(screen.queryByText(`${apiName} List`)).toBeInTheDocument()
  })
})