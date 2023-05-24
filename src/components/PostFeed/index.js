import Cookies from 'js-cookie'

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import PostFeedItem from '../PostFeedItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class PostFeed extends Component {
  state = {
    postFeedList: [],
    apiStatus: apiStatusConstants.initial,
    isLikedIds: [],
    isMobile: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
    this.handleWindowSizeChange()

    this.getPostFeedData()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    const isMobile = window.innerWidth <= 768
    this.setState({isMobile})
  }

  getPostFeedData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const accessToken = Cookies.get('jwt_token')

    const storiesUrl = 'https://apis.ccbp.in/insta-share/posts'
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
        postFeedList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
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

  renderPostFeedSuccessView = () => {
    const {postFeedList, isLikedIds} = this.state

    return (
      <div className="post-feed-success-view">
        <ul className="post-feed-list-container">
          {postFeedList.map(eachFeed => (
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

  renderPostFeedLoadingView = () => {
    const {isMobile} = this.state

    return isMobile ? (
      <div className="mobile-post-feed-loader-container" data-testid="loader">
        <Loader type="TailSpin" color="#4094EF" height={48} width={48} />
      </div>
    ) : (
      <div className="desktop-post-feed-loader-container" data-testid="loader">
        <Loader type="TailSpin" color="#4094EF" height={80} width={80} />
      </div>
    )
  }

  onClickPostFeedFailureTryAgain = () => {
    this.getPostFeedData()
  }

  renderPostFeedFailureView = () => (
    <div className="post-feed-failure-view">
      <img
        className="post-feed-failure-view-image"
        src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1682953244/alert-trianglefailure-warning-icon-image_qdzegs.png"
        alt="failure view"
      />
      <h1 className="post-feed-failure-view-error">
        Something went wrong. Please try again
      </h1>
      <button
        type="button"
        className="post-feed-failure-view-button"
        onClick={this.onClickPostFeedFailureTryAgain}
      >
        Try again
      </button>
    </div>
  )

  renderAllPostFeed = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderPostFeedSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderPostFeedLoadingView()
      case apiStatusConstants.failure:
        return this.renderPostFeedFailureView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderAllPostFeed()}</>
  }
}

export default PostFeed
