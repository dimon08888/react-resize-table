import React from 'react'
import ReactDOM from 'react-dom'
import Table from './Table'
import TableContent from './TableContent'

const tableHeaders = ['Description', 'id', 'Price', 'Status', 'Name']

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Table headers={tableHeaders} minCellWidth={120} tableContent={<TableContent />} />
  </React.StrictMode>,
  rootElement
)
