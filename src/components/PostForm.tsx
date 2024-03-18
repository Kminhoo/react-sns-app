import { CiImageOn } from "react-icons/ci"

import './PostForm.scss'

const PostForm = () => {
  const handleFileUpload = () => {

  }

  return (
    <form className="post-form">
      <textarea 
        className="post-form__textarea"
        required 
        name="content" 
        id="content" 
        placeholder="What is happening?" 
      />

      <div className="post-form__submit-area">
        <label htmlFor="file-input" className="post-form__file">
          <CiImageOn className="post-form__file-icon" />
        </label>
        <input
          type='file' 
          name='file-input' 
          accept='image/*' 
          onChange={handleFileUpload} 
          className='hidden'
        />
        <input type='submit' value='작성하기' className='post-form__submit-btn' />
      </div>
    </form>
  )
}

export default PostForm