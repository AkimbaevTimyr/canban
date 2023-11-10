import React from 'react'
import './dashboard.scss'
import SalesOverview from './components/SalesOverview'
import PurchaseOverview from './components/PurchaseOverview'
import InventorySummary from './components/InventorySummary'
import ProductSummary from './components/ProductSummary'
import SalesPurchase from './components/SalesPurchase'
import OrderSummary from './components/OrderSummary'
import TopSellingStock from './components/TopSellingStock'
import LowQuantityStock from './components/LowQuantityStock'

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
        <div className='dashboard_block'>
          <SalesPurchase />
          <OrderSummary />
        </div>
        <div className='dashboard_block'>
          <TopSellingStock />
          <LowQuantityStock />
        </div>
    </div>
  )
}

export default Dashobard