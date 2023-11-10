import React from 'react'
import './sales.scss'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'; // ADD THIS

function SalesPurchase() {

    const canvas = document.createElement('canvas');
    const ctx:any = canvas.getContext('2d');

    const canvasPurchase = document.createElement('canvas');
    const ctxPurchase:any = canvasPurchase.getContext('2d');

    const gradientSales = ctx.createLinearGradient(0, 0, 0, 400);
    const gradientPurchase = ctxPurchase.createLinearGradient(0, 0, 0, 400);

    gradientSales.addColorStop(0, '#46A46C');
    gradientSales.addColorStop(0.4792, '#51CC5D');
    gradientSales.addColorStop(1, '#57DA65');

    gradientPurchase.addColorStop(0, '#817AF3');
    gradientPurchase.addColorStop(0.4792, '#74B0FA');
    gradientPurchase.addColorStop(1, '#79D0F1');


  const data =  {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: 'Purchase',
        data:  [1, 2, 4, 8, 20, 10, 34, 9, 59,2, 5, 120],
        backgroundColor: gradientPurchase
      },
      {
        label: 'Sales',
        data: [2, 4, 8, 16, 40, 30, 3, 75, 20, 10, 34, 9],
        backgroundColor: gradientSales
      }
    ]
  };
  return (
    <div className='sales'>
        <div className='sales_header'>
            <div className='sales_header_title'>
                Sales & Purchase
            </div>
            <div className='sales_header_calendar'>
                <button className='sales_header_calendar_button'>
                    Weekly
                </button>
            </div>
        </div>
        <div className='sales_chart'>
            <Bar 
                data={data}
            />
        </div>
    </div>
  )
}

export default SalesPurchase