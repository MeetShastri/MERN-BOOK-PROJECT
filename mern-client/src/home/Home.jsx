import React from 'react'
import Banner from '../components/Banner'
import MostReadBooks from './MostReadBooks'
import RareBooks from './RareBooks'
import Shortlisted from './Shortlisted'
import MoreBooks from './MoreBooks'
import CustomersPage from './CustomersPage'
import SignUp from '../authentication/SignUp'

const Home = () => {
  return (
    <>
      {/* <SignUp/> */}
      <Banner />
      <MostReadBooks />
      <RareBooks />
      <Shortlisted />
      <MoreBooks />
      <CustomersPage />
    </>
  )
}

export default Home
