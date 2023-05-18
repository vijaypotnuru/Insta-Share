import './index.css'

import {Component} from 'react'
import Cookies from 'js-cookie'

import {FaSearch} from 'react-icons/fa'

import PostFeedItem from '../PostFeedItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SearchResults extends Component {
  onGetSearchResults = () => {
    const {getSearchResults} = this.props
    getSearchResults()
  }

  renderSearchResultsSuccessView = () => {
    const {searchResultsList, isLikedIds, selectLike, selectUnlike} = this.props

    return (
      <div className="search-results-success-view">
        <h1 className="search-results-success-view-heading">Search Results</h1>
        <ul className="search-results-list-container">
          {searchResultsList.map(eachFeed => (
            <PostFeedItem
              key={eachFeed.postId}
              postFeedDetails={eachFeed}
              isLikedIds={isLikedIds}
              selectLike={selectLike}
              selectUnlike={selectUnlike}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderAllSearchResultsViews = () => {
    const {apiStatus} = this.props
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSearchResultsSuccessView()
      default:
        return null
    }
  }

  render() {
    const {onChangeSearchInput, searchInput} = this.props
    return (
      <>
        <div className="search-results-mobile-search-input-container">
          <input
            type="search"
            value={searchInput}
            className="search-results-mobile-search-input"
            onChange={onChangeSearchInput}
            placeholder="Search Caption"
          />
          <button
            type="button"
            className="search-results-mobile-search-icon-btn"
            onClick={this.onGetSearchResults}
          >
            <FaSearch className="search-results-mobile-search-icon" />
          </button>
        </div>

        {this.renderAllSearchResultsViews()}
      </>
    )
  }
}

export default SearchResults
