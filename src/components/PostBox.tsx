import { Link } from 'react-router-dom'

import { FaRegCommentDots } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

import { PostProps } from 'pages/home/HomePage';

import './PostBox.scss'


interface PostBoxProps {
  post: PostProps
}

const PostBox = ({ post }: PostBoxProps) => {
  const handleDelete = () => {

  }

  return (
    <div className="post__box" key={post.id}>
      <Link to={`posts/${post.id}`}>
        <div className="post__box-profile">
          <div className="post__flex">
            { post.profilUrl 
              ? <img src={post.profilUrl} alt="profile" className="post__box-profile-img" /> 
              : <FaRegCircleUser className="post__box-profile-icon" />}
            <div className="post__email">{post.email}</div>
            <div className="post__createdAt">{post.createdAt}</div>
          </div>

          <div className="post__box-content">{post.content}</div>
        </div>
      </Link>

      <div className="post__box-footer">
        {/* post.uid === user.uid */}
        <>
          <button
            type="button"
            className="post__delete"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button type="button" className="post__edit" >
            <Link to={`/posts/edit/${post.id}`}>Edit</Link>
          </button>
        </> 

        <button type="button" className="post__likes">
          <CiHeart />
          {post.likeCount || 0}
        </button>
        <button type="button" className="post__comments">
          <FaRegCommentDots />
          {post.comments || 0}
        </button>
      </div>
    </div>
  )
}

export default PostBox