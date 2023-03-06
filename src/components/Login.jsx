import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

const Login = () => {
  const user = false;
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.Object))
    
    const { name, googleId, imageUrl } = response.Object

    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    }
  }

  return (
    <GoogleOAuthProvider clientId='7139633976-vfbbcop7p2fq6rsb7enhsoc0m2m0jbc9.apps.googleusercontent.com'>
      <div className=' flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video 
          src={shareVideo}
          type='video/mp4'
          loop
          controls={false}
          muted
          autoPlay
          className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width="130px" alt='logo'/>
          </div>
          <div className='shadow-2x1'>
            {user ? (
              <div>Logged In</div>
            ) : (
              <GoogleLogin
                onSuccess={responseGoogle}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
    </GoogleOAuthProvider>
  )
}

export default Login
