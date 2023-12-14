import DefaultAvatar from '@/assets/images/default_avatar.png';
import EditIcon from '@/assets/images/edit.png'
import { ProfileInput } from '@/components/UI/ProfileInput';
import {  useNavigate } from "react-router-dom";
import { selectUser } from '@/store/status';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Profile = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    useEffect(()=> {
        if(!user) {
            navigate('/');
        }
    }, []);

    return (
        <div className='h-screen flex flex-col justify-center bg-gradient-to-t from-[#3231b2ad] to-[#aeb3e97d]'>
            <div className="mx-auto flex flex-col justify-center w-[60%]">
                <div className="p-8 py-14 w-full border-b border-b-[#505258] flex justify-between items-center">
                    <div className="flex items-center gap-10">
                        <div>
                            <img src={DefaultAvatar} alt="Profile Icon" className="rounded-[50%] border-[#5f6fdb] border-2" width={110} height={110} />
                            <label htmlFor='upload_image' className="relative block cursor-pointer">
                                <div className="absolute right-1 top-[-28px] border-[#5f6fdb] p-0.5 border-2 bg-[#9293d7] rounded-[50%]">
                                    <img src={EditIcon} alt="Avatar Edit Icon" width={17} height={17} />
                                </div>
                            </label>
                            <input type="file" id='upload_image' className="hidden" />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <h2>My Profile <span className="bg-[#00A4F2] border-2 border-[#00A4F2] rounded-[10px] text-[14px] px-2 ml-2">Premium</span></h2>
                            <p className="mb-0">User Name</p>
                            <p>User Email</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 px-16 py-14 w-full">

                    <div className="flex flex-col gap-6 w-[80%]">
                        <div className="flex item-center gap-10 px-16 w-full">
                            <div className="grid grid-cols-5 gap-4 w-full">
                                <div className="col-span-1 flex items-center">
                                    <p className="font-[600] text-[14px] mb-0">First Name: </p>
                                </div>

                                <div className="col-span-2">
                                    <ProfileInput type='input' />
                                </div>
                                <div className="col-span-2"></div>
                            </div>
                        </div>

                        <div className="flex item-center gap-10 px-16 w-full">
                            <div className="grid grid-cols-5 gap-4 w-full">
                                <div className="col-span-1 flex items-center">
                                    <p className="font-[600] text-[14px] mb-0">Last Name: </p>
                                </div>

                                <div className="col-span-2">
                                    <ProfileInput type='input' />
                                </div>

                                <div className="col-span-2"></div>
                            </div>
                        </div>

                        <div className="flex item-center gap-10 px-16 w-full">
                            <div className="grid grid-cols-5 gap-4 w-full">
                                <div className="col-span-1 flex items-center"></div>

                                <div className="col-span-2">
                                    <button className="border-2 w-full px-2 py-1 text-center rounded-[10px] border-[#5f6fdb] bg-[#5f6fdb] hover:bg-transparent duration-200">SAVE</button>
                                </div>

                                <div className="col-span-2"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
