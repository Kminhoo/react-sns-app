import App from "App"
import ErrorPage from "pages/error/ErrorPage"
import HomePage from "pages/home/HomePage"
import NotificationPage from "pages/notification/NotificationPage"
import NewPost from "pages/posts/NewPost"
import PostDetail from "pages/posts/PostDetail"
import PostEdit from "pages/posts/PostEdit"
import PostList from "pages/posts/PostList"
import ProfileEdit from "pages/profile/ProfileEdit"
import ProfilePage from "pages/profile/ProfilePage"
import SearchPage from "pages/search/SearchPage"
import Login from "pages/user/Login"
import SignUp from "pages/user/SignUp"

import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'posts', element: <PostList /> },
      { path: 'posts/:id', element: <PostDetail /> },
      { path: 'posts/edit/:id', element: <PostEdit /> },
      { path: 'posts/new', element: <NewPost /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'profile/edit', element: <ProfileEdit /> },
      { path: 'notification', element: <NotificationPage /> },
      { path: 'search', element: <SearchPage /> },
      // { path: 'login', element: <Login /> },
      // { path: 'signup', element: <SignUp /> }
      {
        path: 'users',
        // element: <App />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'signup', element: <SignUp /> }
        ]
      }
    ]
  }
])

export default router