import { ReviewDetailType } from "@/types/feed";
import ReactStars from 'react-stars'
import parse from "html-react-parser";
import DefaultAvatar from '@/assets/images/default_avatar.png';

export const ReviewDetail: React.FC<ReviewDetailType> = ({ name, anonymous_user, avatar, star, review }: ReviewDetailType) => {
    return (
        <div className="p-2 flex flex-col md:space-x-6">
            <div className='flex justify-end items-center gap-2'>
                <ReactStars
                    count={5}
                    value={star}
                    size={22}
                    edit={false}
                    color2={'#ffd700'} />
            </div>

            <div className="md:pl-20 text-white md:text-md text-sm">
                <p>
                    {parse(review)}
                </p>
            </div>
            <div className="flex justify-end">
                <div className="flex items-center gap-4 text-white md:text-md text-sm">
                    <p>
                        {anonymous_user? 'Anonymous': name }
                    </p>
                    <img className="h-8 w-8 md:h-12 md:w-12 object-cover rounded-full" src={avatar? avatar: DefaultAvatar} alt="Current profile photo" />
                </div>

            </div>
        </div>
    )
}