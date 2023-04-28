In this project let's build a **Insta Share App** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a class component, displaying that data, using **component lifecycle methods**, **routing** concepts, **authentication**, and **authorization**, and adding responsiveness to the website.

This is an individual assessment. All work must be your own.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">Website</a>
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g" target="_blank">this</a> video to create a Free Figma account. Watch the video upto **00:55**
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://youtu.be/B242nuM3y2s?t=80" target="_blank">this</a> video to check CSS in the Figma screen. Watch the video upto **02:45**
- Export Images in Figma screen

  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from the Figma screen
  - Click on the Export button to get Export options as shown in the below image

  <div style="text-align:center;margin:10px 0px 0px 45px;width:200px;">
    <img src="https://assets.ccbp.in/frontend/react-js/figma-export-option.png" />
  </div>

- Upload your exported images from Figma to Cloudinary and get image URLs from Cloudinary. Refer <a href="https://learning.ccbp.in/projects/course?c_id=fe4c935d-3ad5-4bb8-a1a5-9b045ae70010&s_id=2f72d6fe-09a7-4c0a-b0db-196740c853a0&t_id=6535e48d-fb4e-45c4-9654-3da423c79e26" target="_blank">this</a> session for better understanding

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/FwBVnpWfl5DYJ77kbljTdT/Insta_Share?node-id=0%3A1" target="_blank">here</a>

</details>

### Set Up Instructions

<details>

<summary>Click to view</summary>

- Download dependencies by running `npm install`

- Start up the app using `npm start`

</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br />
The app must have the following functionalities

- **Login Route**

  - When an invalid username and password are provided and the Login button is clicked, then the respective error message received from the response should be displayed
  - When a valid username and password are provided and the Login button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user tries to access the Home Route, Profile Route, and User Profile Route, then the page should be navigated to the Login Route
  - When an _authenticated_ user tries to access the Home Route, Profile Route, and User Profile Route, then the page should be navigated to the respective route
  - When an _authenticated_ user tries to access the Login Route, then the page should be navigated to the Home Route

- **Home Route**

  - When an _authenticated_ user opens the Home Route

    - An HTTP GET request should be made to **User Stories API URL** with `jwt_token` in the Cookies

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **User Stories API URL**

    - An HTTP GET request should be made to the **Posts API URL** with `jwt_token` in the Cookies

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Posts API URL**

    - Initially for every Post **BsHeart**, **FaRegComment**, **BiShareAlt** from `react-icons` should be displayed
    - When the **username** in the particular post is clicked, then the page should be navigated to the User Details Route
    - When the **Like** icon (FcLike) is clicked,
      - An HTTP POST request should be made to the **Post Like API URL** with `like_status` as `true`
      - It should change to **Unlike** icon (BsHeart)
      - Likes count of that particular post should be incremented by one
    - When the **Unlike** icon is clicked,

      - An HTTP POST request should be made to the **Post Like API URL** with `like_status` as `false`
      - It should change to **Like** icon
      - Likes count of that particular post should be decremented by one

    - **Header**

      - When the Website logo is clicked, then the page should be navigated to the Home Route
      - When the **Home** link in the Header is clicked, then the page should be navigated to the Home Route
      - When the **Profile** link in the Header is clicked, then the page should be navigated to the My Profile Route
      - When the **Logout** button is clicked, then the page should be navigated to the Login Route

- **User Profile Route**

  - When an _authenticated_ user opens the User Profile Route

    - An HTTP GET request should be made to the **User Profile API URL** with `jwt_token` in the Cookies and `user_id` as a path parameter

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **User Profile API URL**

    - The list of posts section should contain the **BsGrid3X3** from `react-icons`
    - If the list of posts are empty, then the No Posts View in the **Figma** screens should be displayed
    - If the list of posts are empty, then the **BiCamera** from `react-icons` should be displayed
    - All the header functionalities mentioned in the Home Route should work in this route accordingly

- **My Profile Route**

  - When an _authenticated_ user opens the My Profile Route

    - An HTTP GET request should be made to the **My Profile API URL** with `jwt_token` in the Cookies

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **My Profile API URL**

    - The list of posts section should contain the **BsGrid3X3** from `react-icons`

- **Search Functionality**

  - When an _authenticated_ user search posts using **post caption** by clicking on the Search icon (`FaSearch` from `react-icons`)

    - An HTTP GET request should be made to the **Search Posts API URL** with `jwt_token` in the Cookies and search post as a query parameter

      - **_Loader_** should be displayed while fetching the data
      - After the data is fetched successfully, the response received should be displayed
      - If the HTTP GET request made is unsuccessful, then the failure view given in the **Figma** screens should be displayed
        - When the **Retry** button is clicked, an HTTP GET request should be made to the **Search Posts API URL**

    - If the search posts are empty, then the Search Not Found View in the **Figma** screens should be displayed
    - Initially for every Post **BsHeart**, **FaRegComment**, **BiShareAlt** from `react-icons` should be displayed
    - When the **username** in the particular post is clicked, then the page should be navigated to the User Details Route
    - When the **Like** icon is clicked,
      - An HTTP POST request should be made to the **Post Like API URL** with `like_status` as `true`
      - It should change to **Unlike** icon
      - Likes count of that particular post should be incremented by one
    - When the **Unlike** icon is clicked,
      - An HTTP POST request should be made to the **Post Like API URL** with `like_status` as `false`
      - It should change to **Like** icon
      - Likes count of that particular post should be decremented by one

- **Not Found Route**

  - When a random path is provided in the URL, then the page should be navigated to the Not Found Route

- Users should be able to view the website responsively in mobile view, tablet view as well

</details>

### Quick Tips

<details>

<summary>Click to view</summary>

- Third party packages to be used to achieve the design or functionality

  - React Slick

    - React Slick <a  href="https://react-slick.neostack.com/docs/get-started"  target="_blank">Documentation</a>
    - React Slick implementation <a  href="https://codesandbox.io/s/react-slick-demo-iz90x?file=/src/components/ReactSlick/index.js"  target="_blank">CodeSandbox</a>
    - Update the CSS accordingly to style the React Slider and arrow buttons, you can check the <a href="https://codesandbox.io/s/react-slick-demo-iz90x?file=/src/components/ReactSlick/index.css" target="_blank">CodeSandbox</a>
    - Add the below CDN links in your `public > index.html` file for CSS and Font, you can check the <a href="https://codesandbox.io/s/react-slick-demo-iz90x?file=/public/index.html" target="_blank">CodeSandbox</a> for adding below lines

    ```jsx
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    ```

</details>

### Important Note

- In this project, the data you have sent through `POST-APIs` are not saved in the `Database`. If you refresh the page, the changes will not be persisted
- Whenever you do a `POST-API` call, we are sending a mock object as a response

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- **Note:**

  - Don't use any third-party packages other than packages mentioned in the **Quick Tips**
  - Use media queries for responsiveness. Instead of rendering the same elements twice for responsiveness.
  - For Mini Projects, you have to use normal HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, if you use styled components
  - Refer to the below Example for the usage of `testid` in the HTML elements.

    - Example: `<div testid="postItem" className="post-item"/>`.

- **Routes**

  - Render `Login` Route component when the path in URL matches `/login`
  - Render `Home` Route component when the path in URL matches `/`
  - Render `MyProfile` Route component when the path in URL matches `/my-profile`
  - Render `UserProfile` Route component when the path in URL matches `/users/:id`
    - **Note:-** use the specific user id in place of id

- Wrap the `Loader` component with an HTML container element and add the `testid` attribute value as **loader** to it

  ```jsx
  <div className="loader-container" testid="loader">
    <Loader type="TailSpin" color="#4094EF" height={50} width={50} />
  </div>
  ```

- Wrap the Clickable `react-icons` components with an HTML button element and add the `testid` attribute values accordingly

  ```jsx
  <button type="button" testid="searchIcon">
    <FaSearch />
  </button>
  ```

- The Failure View image should consist of alt attribute value as `failure view`

- **Login Route**

  - The Landing image should consist of alt attribute value as `website login`
  - The Insta Share image should consist of alt attribute value as `website logo`
  - The Cookies should be set by using the key name `jwt_token`

- **Home Route**

  - User Stories List
    - User Stories List images should consist of alt attribute value as `user story`
  - Posts List
    - The Post User Profile image should consist of alt attribute value as `post author profile`
    - The Post image should consist of alt attribute value as `post`
    - The HTML button element with Like icon (`BsHeart` from `react-icons`) should contain the `testid` attribute value as `likeIcon`
    - The HTML button element with Dis Like icon (`FcLike` from `react-icons`) should contain the `testid` attribute value as `unLikeIcon`

- **User Profile Route**

  - The Profile image should consist of alt attribute value as `user profile`
  - Story images should consist of alt attribute value as `user story`
  - Post images should consist of alt attribute value as `user post`

- **My Profile Route**

  - The Profile image should consist of alt attribute value as `my profile`
  - Story images should consist of alt attribute value as `my story`
  - Post images should consist of alt attribute value as `my post`

- **Search Functionality**

  - When Search Results are not empty
    - The Author Profile image in the post should consist of alt attribute value as `post author profile`
    - The Post image should consist of alt attribute value as `post`
    - The HTML button element with Like icon (`BsHeart` from `react-icons`) should contain the `testid` attribute value as `likeIcon`
    - The HTML button element with Dis Like icon (`FcLike` from `react-icons`) should contain the `testid` attribute value as `unLikeIcon`
  - When Search Results are Empty
    - Search Results Not Found image should consist of alt attribute value as `search not found`

- **Not Found Route**

  - The page not found image should consist of alt attribute value as `page not found`

- **Header**

  - The Insta Share image should consist of alt attribute value as `website logo`
  - The HTML button element with Search icon (`FaSearch` from `react-icons`) should contain the `testid` attribute value as `searchIcon`

</details>

### Resources

<details>
<summary>Data fetch URLs</summary>

- **Note**: Use the values in the APIs as shown below

- Use the search input value in place of `searchInput` in the query parameters
- The value of the key `user_id` should be given in the place of `userId`

- **Note:** Use the below sample code snippet to make a POST request on Login using valid username and password.

  ```js
  const options = {
    method: 'POST',
    body: JSON.stringify(userDetails),
  }
  ```

**Login API**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Description:

Returns a response based on the credentials provided

#### Sample request object:

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9. nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

**User Stories API**

#### API: `https://apis.ccbp.in/insta-share/stories`

#### Method: `GET`

#### Description:

Returns a response containing the list of all user stories

#### Sample Response

```json
{
  "users_stories": [
    {
      "user_id": "Varun_Aadithya",
      "user_name": "Varun Aadithya",
      "story_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/stories/instagram-mini-project-story-1-img.png"
    },
    ...
  ],
  "total": 9
}
```

**Posts API**

#### API: `https://apis.ccbp.in/insta-share/posts`

#### Method: `GET`

#### Description:

Returns a response containing the list of user posts.

#### Sample Response

```json
{
  "posts": [
      {
      "post_id": "f25d77f0-602e-41d1-971e-4b8cf54709eb",
      "user_id": "Varun_Aadithya",
      "user_name": "Varun Aadithya",
      "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-1-img.png",
      "post_details": {
  	    "image_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-1-img.png",
  	    "caption": "Another day, another sunrise"
      },
      "likes_count": 7,
      "comments": [{
          "user_name": "Prabuddha Dasgupta",
          "user_id": "Prabuddha_Dasgupta",
          "comment": "Lightning is incredible."
      },
      ...
      ],
      "created_at": "4 Hours Ago"
  },
  ...
  ],
  "total": 33
}
```

**Post Like API**

#### API: `https://apis.ccbp.in/insta-share/posts/{postId}/like`

#### Example: `https://apis.ccbp.in/insta-share/posts/f25d77f0-602e-41d1-971e-4b8cf54709eb/like`

#### Method: `POST`

#### Request:

```json
{
  "like_status": true // If you want to like a post then set like_status as true otherwise set it as false.
}
```

#### Description:

Returns a response containing the whether post has been liked or not

#### Sample Response

```json
{
  "message": "Post has been liked"
}
```

**My Profile API**

#### API: `https://apis.ccbp.in/insta-share/my-profile`

#### Method: `GET`

#### Description:

Returns a response containing the details of my profile

#### Sample Response

```json
{
    "profile": {
        "id": "df3234jkjn2-324sdf1132nnknn-234324234",
        "user_id": "rahul",
        "user_name": "Rahul",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/profile/instagram-mini-project-profile-1.png",
        "followers_count": 289,
        "following_count": 12,
        "user_bio": "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
        "posts": [
            {
                "id": "1a698dc4-sdf6e83-4ede-998e-638305f7aee6",
                "image": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-31-img.png"
            },
        ...
        ],
        "posts_count": 3,
        "stories": [
            {
                "id": "5HJ25nUNJ",
                "image": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/previous-stories/instagram-mini-project-previous-story-34-img.png"
            },
        ...
        ]
    }
 }
```

**User Profile API**

#### API: `https://apis.ccbp.in/insta-share/users/{userId}`

#### Example: `https://apis.ccbp.in/insta-share/users/Prabuddha_Dasgupta`

#### Method: `GET`

#### Description:

Returns a response containing the details of user profile.

#### Sample Response

```json
{
    "user_details": {
    	"id": "df3234jkjn2-32432nnknn-w23231",
        "user_id": "Prabuddha_Dasgupta",
        "user_name": "Prabuddha Dasgupta",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-4-img.png",
        "followers_count": 297,
        "following_count": 303,
        "user_bio": "Prabuddha Dasgupta (21 September 1956 – 12 August 2012) was an Indian fashion and fine-art photographer. ",
        "posts_count": 3,
        "posts": [
            {
                "id": "390562f5-298f-4904-aea4-07ecc212febe",
                "image": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-10-img.png"
            },
        ...
        ],
        "stories": [
            {
                "id": "UnrObltRP",
                "image": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/previous-stories/instagram-mini-project-previous-story-10-img.png"
            },
        ...
        ]
    }
}
```

**Search Posts API**

#### API: `https://apis.ccbp.in/insta-share/posts?search={searchInput}`

#### Example: `https://apis.ccbp.in/insta-share/posts?search=sky`

#### Method: `GET`

#### Description:

Returns a response containing the list of search posts.

#### Sample Response

```json
{
  "posts": [
      {
        "post_id": "6fb210a9-0c4d-431f-8585-b3a4f065a171",
        "user_id": "Atul_Kasbekar",
        "user_name": "Atul Kasbekar",
        "profile_pic": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/users/instagram-mini-project-user-5-img.png",
        "post_details": {
            "image_url": "https://assets.ccbp.in/frontend/react-js/instagram-mini-project/posts/instagram-mini-project-post-5-img.png",
            "caption": "The sky is the daily bread of the eyes."
        },
        "likes_count": 9,
        "comments": [
            {
                "user_name": "Arjun Mark",
                "user_id": "Arjun_Mark",
                "comment": "Aim for the sky, but move slowly, enjoying every step along the way."
            },
        ...
        ],
        "created_at": "4 Hours Ago"
        },
    ...
    ],
  "total": 2
}
```

</details>

### User Credentials

<details>
<summary>Click to view user credentials</summary>

<br/>

**You can use any one of the following credentials**

```text
  username: aakash
  password: sky@007
```

```text
  username: agastya
  password: myth#789
```

```text
  username: advika
  password: world@5
```

```text
  username: binita
  password: modest*6
```

```text
  username: chetan
  password: vigor$life
```

```text
  username: deepak
  password: lightstar@1
```

```text
  username: harshad
  password: joy@85
```

```text
  username: kapil
  password: moon$008
```

```text
 username: rahul
 password: rahul@2021
```

```text
  username: shravya
  password: musical#stone
```

```text
  username: saira
  password: princess@9
```

<br/>
</details>

### Project Submission Instructions

- For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews

- Also it's important to publish your code frequently using `Step - 4` in the Instructions tab

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
