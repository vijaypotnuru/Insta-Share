import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

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

    const showSearchResults = searchResultsList.length > 0

    return (
      <div className="search-results-success-view">
        {showSearchResults ? (
          <>
            <h1 className="search-results-success-view-heading">
              Search Results
            </h1>
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
          </>
        ) : (
          <div className="search-results-success-view-search-not-found">
            <img
              className="search-results-success-view-search-not-found-image"
              src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1684481635/Groupsearch-notfound-img_x7hs6m.png"
              alt="search not found"
            />
            <h1 className="search-results-success-view-search-not-found-heading">
              Search Not Found
            </h1>
            <p className="search-results-success-view-search-not-found-description">
              Try different keyword or search again
            </p>
          </div>
        )}
      </div>
    )
  }

  renderSearchResultLoaderView = () => (
    <>
      <div
        className="mobile-search-result-loader-container"
        data-testid="loader"
      >
        <Loader type="TailSpin" color="#4094EF" height={48} width={48} />
      </div>
      <div
        className="desktop-search-result-loader-container"
        data-testid="loader"
      >
        <Loader type="TailSpin" color="#4094EF" height={80} width={80} />
      </div>
    </>
  )

  onClickTryAgainBtn = () => {
    const {getSearchResults} = this.props
    getSearchResults()
  }

  renderSearchResultFailureView = () => (
    <div className="search-results-failure-view">
      <img
        className="search-results-failure-view-image"
        src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1683130740/Group_7522something-went-wrong-image_hjsfjr.png"
        alt="failure view"
      />
      <p className="search-results-failure-view-error">
        Something went wrong. Please try again
      </p>
      <button
        className="search-results-failure-view-btn"
        type="button"
        onClick={this.onClickTryAgainBtn}
      >
        Try again
      </button>
    </div>
  )

  renderSearchResultInitialView = () => (
    <div className="search-results-initial-view-container">
      <img
        className="search-results-initial-view-search-icon-img"
        src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1684479910/1623738902553_qpxiqe.png"
        alt="search-icon"
      />
      <p className="search-results-initial-view-description">
        Search Results will be appear here
      </p>
    </div>
  )

  renderAllSearchResultsViews = () => {
    const {apiStatus} = this.props
    switch (apiStatus) {
      case apiStatusConstants.initial:
        return this.renderSearchResultInitialView()
      case apiStatusConstants.success:
        return this.renderSearchResultsSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderSearchResultLoaderView()
      case apiStatusConstants.failure:
        return this.renderSearchResultFailureView()
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
