import React from 'react'
import MainLayout from '../layout/MainLayout'
import OrdersPage from '../pages/OrdersPage'

const OrdersModule = () => {
  return (
    <div>
      <MainLayout>
        <OrdersPage />
      </MainLayout>
    </div>
  )
}

export default OrdersModule
