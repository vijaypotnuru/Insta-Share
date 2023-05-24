import './index.css'

import {Link} from 'react-router-dom'

import {BsHeart} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {BiShareAlt} from 'react-icons/bi'
import {FcLike} from 'react-icons/fc'

const PostFeedItem = props => {
  const {postFeedDetails, isLikedIds, selectLike, selectUnlike} = props

  const {
    postId,
    userId,
    userName,
    profilePic,
    postDetails,
    likesCount,
    comments,
    createdAt,
  } = postFeedDetails

  const onSelectLike = () => {
    selectLike(postId)
  }
  const onSelectUnLike = () => {
    selectUnlike(postId)
  }

  const increamentLikeCount = isLikedIds.includes(postId) ? 1 : 0

  return (
    <li className="post-feed-item">
      <div className="post-feed-item-dp-section">
        <div className="post-feed-item-dp-profile">
          <img
            src={profilePic}
            alt="post author profile"
            className="post-feed-item-dp-profile-pic"
          />
        </div>
        <Link to={`/users/${userId}`} className="link">
          <h1 className="post-feed-item-dp-profile-name">{userName}</h1>
        </Link>
      </div>
      <img
        className="post-feed-item-user-post-image"
        src={postDetails.image_url}
        alt="post"
      />
      <div className="post-feed-item-comments-and-likes-section">
        <div className="post-feed-item-icons-container">
          {isLikedIds.includes(postId) ? (
            <button
              type="button"
              className="post-feed-item-icons-btn"
              onClick={onSelectLike}
              data-testid="unLikeIcon"
            >
              <FcLike className="post-feed-item-Fclike-icon" />
            </button>
          ) : (
            <button
              type="button"
              className="post-feed-item-icons-btn"
              onClick={onSelectUnLike}
              data-testid="likeIcon"
            >
              <BsHeart className="post-feed-item-BsHeart-icon" />
            </button>
          )}

          <FaRegComment className="post-feed-item-FaRegComment" />
          <BiShareAlt className="post-feed-item-BiShareAlt" />
        </div>
        <p className="post-feed-item-likes-count">
          {likesCount + increamentLikeCount} likes
        </p>
        <p className="post-feed-item-caption">{postDetails.caption}</p>
        <ul className="post-feed-item-comments-list-container">
          {comments.map(eachcomment => (
            <li
              className="post-feed-item-comment-item"
              key={eachcomment.user_id}
            >
              <p className="post-feed-item-comment-item-comment">
                <span className="post-feed-item-comment-item-username">
                  {eachcomment.user_name}{' '}
                </span>
                {eachcomment.comment}
              </p>
            </li>
          ))}
        </ul>
        <p className="post-feed-item-created-at">{createdAt}</p>
      </div>
    </li>
  )
}

export default PostFeedItem
