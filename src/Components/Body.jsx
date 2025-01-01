import React from 'react'
import { GoSearch } from "react-icons/go";
import Task from './Task'
import Updates from './Updates'
import QuickLink from './QuickLink'
import Community from './Community'
import Leaderboard from './Leaderboard'
import Events from './Events'
import News from './News'

const Body = () => {
  return (
    <div className='body-section'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="search">
                  <form>
                    <input type="text" placeholder='Search' />
                    <span>
                      {/* Search icon */}
                      <GoSearch/>
                    </span>
                  </form>
                </div>
                <Task/>
                <Updates/>
                <QuickLink/>
                <Community/>
                <Leaderboard/>
                <Events/>
                <News/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body