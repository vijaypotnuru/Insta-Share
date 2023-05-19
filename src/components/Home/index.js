import './index.css'

import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import StoriesSlider from '../StoriesSlider'
import PostFeed from '../PostFeed'
import SearchResults from '../SearchResults'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchMode: false,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
    searchResultsList: [],
    isLikedIds: [],
  }

  getSearchResults = async () => {
    const {searchInput} = this.state
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

  onChangeSearchMode = () => {
    this.setState(prevState => ({searchMode: !prevState.searchMode}))
  }

  onChangeSearchModeDesktop = () => {
    this.setState({searchMode: true})
  }

  onChangeSearchModeOff = () => {
    this.setState({searchMode: false})
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

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {
      searchInput,
      searchMode,
      apiStatus,
      searchResultsList,
      isLikedIds,
    } = this.state

    const pageActive = 'HOME'

    return (
      <>
        <Header
          searchMode={searchMode}
          pageActive={pageActive}
          onChangeSearchInput={this.onChangeSearchInput}
          searchInput={searchInput}
          getSearchResults={this.getSearchResults}
          onChangeSearchMode={this.onChangeSearchMode}
          onChangeSearchModeOff={this.onChangeSearchModeOff}
          onChangeSearchModeDesktop={this.onChangeSearchModeDesktop}
        />
        {searchMode ? (
          <div className="search-results-container">
            <SearchResults
              selectLike={this.selectLike}
              selectUnlike={this.selectUnlike}
              getSearchResults={this.getSearchResults}
              isLikedIds={isLikedIds}
              searchResultsList={searchResultsList}
              apiStatus={apiStatus}
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
