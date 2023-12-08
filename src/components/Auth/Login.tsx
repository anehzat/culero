import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import GoogleIcon from '@/assets/images/google.png'
import LinkedinIcon from '@/assets/images/linkedin.svg'
import {
  LoginSocialGoogle,
  LoginSocialLinkedin,
  IResolveParams
} from 'reactjs-social-login';
// import { useSelector, useDispatch } from "react-redux";
// import { selectAvatarURL, selectUserName, selectLoginStatus, setLoginStatus, setAvatarURL, setUserName, setUserId, setUserEmail, selectUserId, selectUserEmail, setLoginProvider } from "@/store/status";

const customStyles = {
  overlay: {
    backgroundColor: '#6c83b191',
  },
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2a349b',
    borderRadius: '15px',
    border: 'none',
    marginTop: '35px',
    color: 'white',
    height: '53%',
    scrollbars: false,
  },
};

export type LoginProps = {
  authModalIsOpen: boolean,
  closeModal: () => void
}
export const AuthModal: React.FC<LoginProps> = ({ authModalIsOpen, closeModal }: LoginProps) => {
  // const dispatch = useDispatch()
  
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState<any>();

  const handleGoogleSignIn = async () => {
    console.log("Google Login")
  }

  const handleLinkedinSignin = async () => {
    console.log("Linkedin Login");
  }

  const authLogin = async (provider: string, profile: any) => {
    console.log("Interacting Provider ", provider);
    console.log("Interacting Profile ", profile);
    // dispatch(setUserId(user.uid))
    // dispatch(setLoginProvider(provider))
    // dispatch(setUserEmail(profile.email));
    // dispatch(setUserName(profile.name));
    // dispatch(set)
  }

  useEffect(() => {
    if(provider && profile) {
      authLogin(provider, profile)
    }
  }, [provider, profile])

  return (
    <div>
      <Modal
        closeTimeoutMS={200}
        isOpen={authModalIsOpen}
        style={customStyles}
        ariaHideApp={false}
        onRequestClose={closeModal}
      >
        <div className="text-center font-poppins text-[20px]">
          <div className='w-full text-center text-[50px] font-semibold mt-8 pb-6'>
            Log in
          </div>
          <div className='px-20'>
            <div className='w-full flex flex-col space-y-14 py-8 px-10'>
              <div className='w-full flex space-x-4 justify-center items-center cursor-pointer'>
                <LoginSocialGoogle
                  client_id={"1044491487797-iu6gkav7vtunq9a6l432tvufgv5eqoch.apps.googleusercontent.com"}
                  secret = {"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"}
                  onLoginStart={handleGoogleSignIn}
                  redirect_uri={"http://127.0.0.1:4000"}
                  typeResponse="idToken"
                  scope="openid profile email"
                  // isOnlyGetToken
                  ux_mode="popup"
                  // discoveryDocs="claims_supported"
                  access_type="online"
                  onResolve={({ provider, data }: IResolveParams) => {
                    console.log("provider", provider);
                    console.log("data", data);
                    setProvider(provider);
                    setProfile(data);
                  }}
                  onReject={(err: any) => {
                    console.log(err);
                  }}
                >
                  <img src={GoogleIcon} alt='Google Icon' className='w-[100px]' />
                </LoginSocialGoogle>
              </div>

              <div className='w-full flex space-x-4 justify-center items-center cursor-pointer' onClick={()=>handleLinkedinSignin()}>
                <LoginSocialLinkedin
                  // isOnlyGetToken
                  client_id={'86e6qf8zqc75ve'}
                  client_secret={'2hpm6KXIBu4B0bO1'}
                  redirect_uri={"http://127.0.0.1:4000"}
                  scope="r_emailaddress,r_liteprofile,w_member_social"
                  onLoginStart={handleLinkedinSignin}
                  onResolve={({ provider, data }: IResolveParams) => {
                    console.log("provider", provider);
                    console.log("data", data);
                    setProvider(provider)
                    setProfile(data)
                  }}
                  onReject={(err: any) => {
                    console.log(err)
                  }}
                >
                </LoginSocialLinkedin>
                <img src={LinkedinIcon} alt='Google Icon' className='w-[100px]' />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}