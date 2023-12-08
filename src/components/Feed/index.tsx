import { FeedData } from '@/types/feed';

export const FeedUserTab: React.FC<{ data: FeedData }> = ({ data }) => {
    console.log("data ", data)
    return (
        <div className="flex items-center space-x-6">
            <div className="">
                <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
            </div>
            <div className="grid grid-cols-6 gap-4 w-1/2 text-white">
                <p className="col-span-3">{data.name}</p>
                <p className="col-span-2">{data.star}</p>
            </div>
        </div>
    )
}