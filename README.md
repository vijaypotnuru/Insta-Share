# React Mini Project (*****Insta Share*****)

## ***Website***:[https://durgainstashare.ccbp.tech](https://durgainstashare.ccbp.tech/)🔗


Throughout the development of the <a  href="https://durgainstashare.ccbp.tech/"  >**Insta Share App**</a>, I had the opportunity to apply the knowledge and skills I acquired during the React course. This project was a testament to my growth and proficiency in <a  href="https://react.dev/"  target="_blank">**Reactjs**</a> development.

The app successfully fetched data from an internal server using a class component, demonstrating my understanding of <a  href="https://legacy.reactjs.org/docs/react-component.html"  target="_blank"> **Component lifecycle methods**</a> and data management. The displayed data was presented in an appealing and organized manner, showcasing my ability to create visually engaging user interfaces.

By incorporating <a  href="https://www.w3schools.com/react/react_router.asp"  target="_blank"> **Routing Concepts**</a> , I crafted a seamless user experience, allowing users to effortlessly navigate different sections of the app. The implementation of authentication and authorization added an important layer of security, ensuring that only authorized users could access specific features.

A notable achievement in this project was the creation of a responsive website. By employing responsive design principles and <a  href="https://www.w3schools.com/css/css_rwd_mediaqueries.asp"  target="_blank"> **Media queries**</a> , I ensured that the app looked and functioned flawlessly across various devices and screen sizes.

the <a  href="https://durgainstashare.ccbp.tech/"  target="_blank">**Insta Share App**</a> stands as a remarkable showcase of my React proficiency. This project not only solidified my understanding of <a  href="https://www.w3schools.com/react/react_router.asp"  target="_blank"> **Routing Concepts**</a> but also enhanced my problem-solving abilities. I am proud of the final result and the valuable knowledge I gained throughout its development.

As I continue my journey in web development, I am excited to build upon this experience and explore new possibilities with <a  href="https://react.dev/"  target="_blank">**Reactjs**</a> . The Insta Share App serves as a strong foundation for future projects, and I am eager to apply my skills to create even more innovative and impactful applications.


# Functionalities of Insta-Share

*****I have successfully implemented all the required functionalities in the Insta Share App:*****

**Login Route:**

- Users can enter their username and password.
- If invalid credentials are provided, an error message received from the server will be displayed.
- Upon successful login, the user will be navigated to the Home Route.
- If an unauthenticated user tries to access the Home Route, Profile Route, or User Profile Route, they will be redirected to the Login Route.
- Similarly, an authenticated user attempting to access the Login Route will be redirected to the Home Route.

**Home Route:**

- When an authenticated user opens the Home Route, an HTTP GET request will be made to the User Stories API URL with the jwt_token in the Cookies.
- A loader will be displayed while fetching the data, and once successful, the response will be displayed.
- If the request fails, an appropriate error message will be displayed.
- Users can click the Retry button to make another HTTP GET request.
- An HTTP GET request will also be made to the Posts API URL with the jwt_token in the Cookies to fetch post data.
- Initially, each post will display icons for liking, commenting, and sharing.
- Clicking on a username within a post will navigate to the User Details Route.
- Users can like and unlike posts, which will trigger HTTP POST requests to the Post Like API URL and update the like status and like count accordingly.

**Header:**

- Clicking on the website logo or the Home link in the header will navigate to the Home Route.
- Clicking on the Profile link will navigate to the My Profile Route.
- Clicking the Logout button will navigate to the Login Route.

**User Profile Route:**

- When an authenticated user opens the User Profile Route, an HTTP GET request will be made to the User Profile API URL with the jwt_token in the Cookies and user_id as a path parameter.
- A loader will be displayed while fetching the data, and once successful, the response will be displayed.
- If the request fails, an appropriate error message will be displayed.
- Users can click the Retry button to make another HTTP GET request.
- The list of posts section will include the BsGrid3X3 icon.
- If the user has no posts, a "No Posts" view will be displayed.
- Clicking on a username within a post will navigate to the User Details Route.
- All functionalities present in the Header will work accordingly.

**My Profile Route:**

- When an authenticated user opens the My Profile Route, an HTTP GET request will be made to the My Profile API URL with the jwt_token in the Cookies.
- A loader will be displayed while fetching the data, and once successful, the response will be displayed.
- If the request fails, an appropriate error message will be displayed.
- Users can click the Retry button to make another HTTP GET request.
- The list of posts section will include the BsGrid3X3 icon.

**Search Functionality:**

- An authenticated user can search posts by clicking on the Search icon and providing a search term.
- An HTTP GET request will be made to the Search Posts API URL with the jwt_token in the Cookies and the search post as a query parameter.
- A loader will be displayed while fetching the data, and once successful, the response will be displayed.
- If the request fails, an appropriate error message will be displayed.
- If the search posts are empty, a "Search Not Found" message will be displayed.
- Initially, each post will display icons for liking, commenting, and sharing.
- Clicking on a username within a post will navigate to the User Details Route.
- Users can like and unlike posts, which will trigger HTTP POST requests to the Post Like API URL and update the like status

**Not Found Route:**

-   If a user enters a random path in the URL, the page will be redirected to the Not Found Route.
-   The Not Found Route will display a suitable message indicating that the requested page or route does not exist.


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


***Website***:[https://durgainstashare.ccbp.tech](https://durgainstashare.ccbp.tech/)🔗


# Thank You All🙂
