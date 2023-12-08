import { RevewForm } from '@/components/Review';

export const Review = () => {

    return (
        <div className='h-screen flex flex-col justify-center bg-gradient-to-t from-[#3231b2ad] to-[#aeb3e97d]'>
            <div className="mx-auto flex flex-col justify-center w-[60%]">
                <div className="p-8 w-full flex justify-between items-center">
                    <p className="font-[600] text-[14px]">Please choose the social platform and input user's name who you want to leave the review</p>
                </div>

                <div className="px-4 w-full border-b border-b-[#505258] flex justify-between items-center">
                    <div className="grid grid-cols-5 gap-4 w-full">
                        <div className="col-span-2 flex items-center">
                            <select id="countries" className="bg-[#5869dd80] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
                                <option defaultValue="Choose a social platform">Choose a social platform</option>
                                <option value="US">Github</option>
                                <option value="CA">Linkedin</option>
                            </select>
                        </div>

                        <div className="col-span-3">
                            <div className="w-full">
                                <input type="input" className="w-full border-2 px-2 py-1 text-center rounded-[10px] border-[#5f6fdb] bg-transparent" />
                            </div>
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                </div>

                <RevewForm />
            </div>
        </div>
    );
}
