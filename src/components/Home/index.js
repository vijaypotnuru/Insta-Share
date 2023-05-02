import './index.css'
import {Component} from 'react'

import Header from '../Header'
import StoriesSlider from '../StoriesSlider'
import PostFeed from '../PostFeed'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <StoriesSlider />
          <PostFeed />
        </div>
      </>
    )
  }
}

export default Home
