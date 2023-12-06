import React from 'react'
import Modal from 'react-modal';
import GoogleIcon from '@/assets/images/google.png'
import LinkedinIcon from '@/assets/images/linkedin.svg'

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
  const handleGoogleSignIn = async () => {
    console.log("Google Login")
  }

  const handleLinkedinSignin = async () => {
    console.log("Linkedin Login");
  }

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
              <div className='w-full flex space-x-4 justify-center items-center cursor-pointer' onClick={()=>handleGoogleSignIn()}>
                <img src={GoogleIcon} alt='Google Icon' className='w-[100px]' />
              </div>

              <div className='w-full flex space-x-4 justify-center items-center cursor-pointer' onClick={()=>handleLinkedinSignin()}>
                <img src={LinkedinIcon} alt='Google Icon' className='w-[100px]' />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}