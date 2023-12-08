import DefaultAvatar from '@/assets/images/default_avatar.png';
import EditIcon from '@/assets/images/edit.png'
import { EditProfile } from '@/components/Profile/EditProfile';

export const Profile = () => {
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

                <EditProfile />
            </div>
        </div>
    );
}
