import './HomePage.scss'

import PostForm from "components/PostForm";
import PostBox from "components/PostBox";



export interface PostProps {
  id: string
  email: string
  content: string
  createdAt: string
  uid: string
  profilUrl?: string
  likes?: string[]
  likeCount?: number
  comments?: any
}

const postData: PostProps[] = [
  {
    id: '1',
    email: 'alsgn4158@naver.com',
    content: '첫 포스팅입니다. 팔로우해주세요!',
    createdAt: '2024-03-16',
    uid: '12341234'
  },
  {
    id: '2',
    email: 'whdgus4158@naver.com',
    content: '첫 포스팅입니다. 팔로우해주세요!',
    createdAt: '2024-03-16',
    uid: '12341234'
  },
  {
    id: '3',
    email: 'rkgus4158@naver.com',
    content: '첫 포스팅입니다. 팔로우해주세요!',
    createdAt: '2024-03-16',
    uid: '12341234'
  },
  {
    id: '4',
    email: 'wogur4158@naver.com',
    content: '첫 포스팅입니다. 팔로우해주세요!',
    createdAt: '2024-03-16',
    uid: '12341234'
  }
  ,  {
    id: '5',
    email: 'tmddbs6631@naver.com',
    content: '첫 포스팅 축하해요 민후야~',
    createdAt: '2024-03-16',
    uid: '12341234'
  }
]


const HomePage = () => {
  return (
    <div className="home">
      <div className='home__top'>
        <div className="home__title">미누의 SNS</div>

        <div className="home__tabs">
          <div className="home__tab home__tab--active">For You</div>
          <div className="home__tab">Following</div>
        </div>
      </div>


      <PostForm />

      <div className="post">
        {postData?.map((post) => (
         <PostBox post={post} key={post.id} />
        ))}
      </div>
    </div>
  )
}

export default HomePage