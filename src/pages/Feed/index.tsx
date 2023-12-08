import { FeedUserTab } from '@/components/Feed';
import { FeedData } from '@/types/feed';

export const Feed = () => {
    const dummyReviewData : FeedData[] = [
        {
            id: 1,
            avatar: '',
            name: "Ben Hong",
            star: 4.0,
        },
        {
            id: 2,
            avatar: '',
            name: "Ben Hong",
            star: 4.5,
        },
        {
            id: 3,
            avatar: '',
            name: "Ben Hong",
            star: 4.8,
        },
        {
            id: 4,
            avatar: '',
            name: "Ben Hong",
            star: 4.3,
        },
        {
            id: 5,
            avatar: '',
            name: "Ben Hong",
            star: 3,
        },

    ]

    return (
        <div className='h-screen flex flex-col justify-center items-center bg-gradient-to-t from-[#3231b2ad] to-[#aeb3e97d]'>
            <div className='flwx flex-col bg-[#3432cdb0] w-[60%] h-full mt-60 rounded-lg'>
                <div className="p-20 mx-auto flex flex-col space-y-12 justify-center w-full">
                    {dummyReviewData.map((item: FeedData, index: number) => (
                        <FeedUserTab key={index} data={item}  />
                    ))}
                </div>
            </div>
        </div>
    );
}
