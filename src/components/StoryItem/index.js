import './index.css'

const StoryItem = props => {
  const {storyDetails} = props
  const {userName, storyUrl} = storyDetails
  return (
    <li className="story-item">
      <img src={storyUrl} alt="user story" className="story-item-image" />
      <h1 className="story-item-name">{userName}</h1>
    </li>
  )
}

export default StoryItem
