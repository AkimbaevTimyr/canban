import React from 'react'
import './dashboard.scss'
import SalesOverview from './components/SalesOverview'
import PurchaseOverview from './components/PurchaseOverview'
import InventorySummary from './components/InventorySummary'
import ProductSummary from './components/ProductSummary'

function Dashobard() {
  return (
    <div className='dashboard'>
        <div className='dashboard_block'>
          <SalesOverview />
          <InventorySummary />
        </div>
        <div className='dashboard_block'>
          <PurchaseOverview />
          <ProductSummary />
        </div>
    </div>
  )
}

export default Dashobard