import './index.css'
import {Component} from 'react'

import Header from '../Header'
import StoriesSlider from '../StoriesSlider'
import PostFeed from '../PostFeed'
import SearchResults from '../SearchResults'

class Home extends Component {
  state = {
    searchMode: false,
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, searchMode} = this.state
    return (
      <>
        <Header
          onChangeSearchInput={this.onChangeSearchInput}
          searchInput={searchInput}
        />
        {!searchMode ? (
          <div className="search-results-container">
            <SearchResults
              onChangeSearchInput={this.onChangeSearchInput}
              searchInput={searchInput}
            />
          </div>
        ) : (
          <div className="home-container">
            <StoriesSlider />
            <PostFeed />
          </div>
        )}
      </>
    )
  }
}

export default Home
