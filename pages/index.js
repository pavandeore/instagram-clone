import Feed from '@/components/Feed'
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import React from 'react'

const index = () => {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Header />
      <Feed />
      <Modal />
    </div>
  )
}

export default index