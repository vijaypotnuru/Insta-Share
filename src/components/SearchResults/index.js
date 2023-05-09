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
  state = {
    apiStatus: apiStatusConstants.initial,
    searchResultsList: [],
    isLikedIds: [],
  }

  getSearchResults = async () => {
    const {searchInput} = this.props
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const accessToken = Cookies.get('jwt_token')

    const storiesUrl = `https://apis.ccbp.in/insta-share/posts?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(storiesUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.posts.map(eachPost => ({
        postId: eachPost.post_id,
        userId: eachPost.user_id,
        userName: eachPost.user_name,
        profilePic: eachPost.profile_pic,
        postDetails: eachPost.post_details,
        likesCount: eachPost.likes_count,
        comments: eachPost.comments,
        createdAt: eachPost.created_at,
      }))

      this.setState({
        searchResultsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onGetSearchResults = () => {
    this.getSearchResults()
  }

  selectLike = async postId => {
    const {isLikedIds} = this.state

    const accessToken = Cookies.get('jwt_token')

    const likeUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: 'POST',
      body: JSON.stringify({like_status: false}),
    }

    const response = await fetch(likeUrl, options)
    const data = await response.json()

    const updatedLikedIds = isLikedIds.filter(eachId => {
      if (eachId !== postId) {
        return true
      }
      return false
    })

    this.setState({isLikedIds: updatedLikedIds})
  }

  selectUnlike = async postId => {
    const accessToken = Cookies.get('jwt_token')

    const likeUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: 'POST',
      body: JSON.stringify({like_status: true}),
    }

    const response = await fetch(likeUrl, options)
    const data = await response.json()
    this.setState(prevState => ({
      isLikedIds: [...prevState.isLikedIds, postId],
    }))
  }

  renderSearchResultsSuccessView = () => {
    const {searchResultsList, isLikedIds} = this.state

    return (
      <div className="search-results-success-view">
        <h1 className="search-results-success-view-heading">Search Results</h1>
        <ul className="search-results-list-container">
          {searchResultsList.map(eachFeed => (
            <PostFeedItem
              key={eachFeed.postId}
              postFeedDetails={eachFeed}
              isLikedIds={isLikedIds}
              selectLike={this.selectLike}
              selectUnlike={this.selectUnlike}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderAllSearchResultsViews = () => {
    const {apiStatus} = this.state
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
