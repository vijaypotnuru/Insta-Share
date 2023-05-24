import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {BsGrid3X3} from 'react-icons/bs'
import {BiCamera} from 'react-icons/bi'

import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class UserProfile extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    userProfileData: {},
    isMobile: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
    this.handleWindowSizeChange()

    this.getUserProfileData()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    const isMobile = window.innerWidth <= 768
    this.setState({isMobile})
  }

  getUserProfileData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const accessToken = Cookies.get('jwt_token')

    const userProfileUrl = `https://apis.ccbp.in/insta-share/users/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(userProfileUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()

      //   console.log(fetchedData)

      const updatedData = {
        id: fetchedData.user_details.id,
        userId: fetchedData.user_details.user_id,
        username: fetchedData.user_details.user_name,
        profilePic: fetchedData.user_details.profile_pic,
        followersCount: fetchedData.user_details.followers_count,
        followingCount: fetchedData.user_details.following_count,
        userBio: fetchedData.user_details.user_bio,
        posts: fetchedData.user_details.posts,
        postsCount: fetchedData.user_details.posts_count,
        stories: fetchedData.user_details.stories,
      }

      this.setState({
        userProfileData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderUserProfileSuccessView = () => {
    const {userProfileData, isMobile} = this.state
    const {
      userId,
      username,
      userBio,
      profilePic,
      postsCount,
      followersCount,
      followingCount,
      stories,
      posts,
    } = userProfileData

    const shouldShowPosts = posts.length > 0

    return (
      <div className="user-profile-success-view">
        <div className="user-profile-success-view-profile-section">
          {/* Profile info Mobile & Desktop View */}

          {isMobile ? (
            <div className="user-profile-success-view-profile-mobile-info-container">
              <h1 className="user-profile-success-view-profile-mobile-info-username">
                {username}
              </h1>
              <div className="user-profile-success-view-profile-mobile-info-stats-container">
                <img
                  src={profilePic}
                  alt="profile_pic"
                  className="user-profile-success-view-profile-mobile-info-profile-pic"
                />

                <div className="user-profile-success-view-profile-mobile-info-stats">
                  <p className="user-profile-success-view-profile-mobile-info-stats-count">
                    {postsCount}
                  </p>
                  <p className="user-profile-success-view-profile-mobile-info-stats-type">
                    posts
                  </p>
                </div>
                <div className="user-profile-success-view-profile-mobile-info-stats">
                  <p className="user-profile-success-view-profile-mobile-info-stats-count">
                    {followersCount}
                  </p>
                  <p className="user-profile-success-view-profile-mobile-info-stats-type">
                    followers
                  </p>
                </div>
                <div className="user-profile-success-view-profile-mobile-info-stats">
                  <p className="user-profile-success-view-profile-mobile-info-stats-count">
                    {followingCount}
                  </p>
                  <p className="user-profile-success-view-profile-mobile-info-stats-type">
                    following
                  </p>
                </div>
              </div>
              <div className="user-profile-success-view-profile-mobile-info-bio-container">
                <p className="user-profile-success-view-profile-mobile-info-bio-userId">
                  {userId}
                </p>
                <p className="user-profile-success-view-profile-mobile-info-bio-description">
                  {userBio}
                </p>
              </div>
            </div>
          ) : (
            <div className="user-profile-success-view-profile-desktop-info-container">
              <img
                src={profilePic}
                alt="user profile"
                className="user-profile-success-view-profile-desktop-info-profile-pic"
              />
              <div className="user-profile-success-view-profile-desktop-info-stats-container">
                <h1 className="user-profile-success-view-profile-desktop-info-stats-username">
                  {username}
                </h1>
                <div className="user-profile-success-view-profile-desktop-info-stats-details-container">
                  <p className="user-profile-success-view-profile-desktop-info-stats-details-type">
                    <span className="user-profile-success-view-profile-desktop-info-stats-details-count">
                      {postsCount}
                    </span>{' '}
                    posts
                  </p>

                  <p className="user-profile-success-view-profile-desktop-info-stats-details-type">
                    <span className="user-profile-success-view-profile-desktop-info-stats-details-count">
                      {followersCount}
                    </span>{' '}
                    followers
                  </p>

                  <p className="user-profile-success-view-profile-desktop-info-stats-details-type">
                    <span className="user-profile-success-view-profile-desktop-info-stats-details-count">
                      {followingCount}
                    </span>{' '}
                    following
                  </p>
                </div>
                <div className="user-profile-success-view-profile-desktop-info-bio-container">
                  <p className="user-profile-success-view-profile-desktop-info-bio-userId">
                    {userId}
                  </p>
                  <p className="user-profile-success-view-profile-desktop-info-bio-description">
                    {userBio}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Profile Stories Section */}
          <ul className="user-profile-success-view-stories-list-container">
            {stories.map(eachStory => (
              <li
                key={eachStory.id}
                className="user-profile-success-view-story-item"
              >
                <img
                  src={eachStory.image}
                  alt="user story"
                  className="user-profile-success-view-story-item-image"
                />
              </li>
            ))}
          </ul>
        </div>
        {/* Profile Posts Section */}
        <div className="user-profile-success-view-posts-section">
          <div className="user-profile-success-view-posts-icon-container">
            <BsGrid3X3 className="user-profile-success-view-posts-icon" />
            <h1 className="user-profile-success-view-posts-icon-heading">
              Posts
            </h1>
          </div>
          {shouldShowPosts ? (
            <ul className="user-profile-success-view-posts-list-container">
              {posts.map(eachPost => (
                <li
                  key={eachPost.id}
                  className="user-profile-success-view-posts-list-item"
                >
                  <img
                    src={eachPost.image}
                    alt="user post"
                    className="user-profile-success-view-posts-list-item-image"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="user-profile-success-view-no-posts-container">
              <div className="user-profile-success-view-no-posts-icon-container">
                <BiCamera />
              </div>
              <h1 className="user-profile-success-view-no-posts-heading">
                No Posts
              </h1>
            </div>
          )}
        </div>
      </div>
    )
  }

  renderAllUserProfileLoadingView = () => {
    const {isMobile} = this.state

    return (
      <div className="user-profile-loading-view">
        {isMobile ? (
          <div
            className="user-profile-mobile-loader-container"
            data-testid="loader"
          >
            <Loader type="TailSpin" color="#4094EF" height={32} width={32} />
          </div>
        ) : (
          <div
            className="user-profile-desktop-loader-container"
            data-testid="loader"
          >
            <Loader type="TailSpin" color="#4094EF" height={53} width={53} />
          </div>
        )}
      </div>
    )
  }

  onClickTryAgainBtn = () => {
    this.getUserProfileData()
  }

  renderUserProfileFailureView = () => (
    <div className="user-profile-failure-view">
      <img
        className="user-profile-failure-view-image"
        src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1683130740/Group_7522something-went-wrong-image_hjsfjr.png"
        alt="failure view"
      />
      <p className="user-profile-failure-view-error">
        Something went wrong. Please try again
      </p>
      <button
        className="user-profile-failure-view-btn"
        type="button"
        onClick={this.onClickTryAgainBtn}
      >
        Try again
      </button>
    </div>
  )

  renderAllUserProfileViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderUserProfileSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderAllUserProfileLoadingView()
      case apiStatusConstants.failure:
        return this.renderUserProfileFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="user-profile-container">
          {this.renderAllUserProfileViews()}
        </div>
      </>
    )
  }
}

export default UserProfile
