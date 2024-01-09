import { api } from '@/store/culero.api';
import { selectAuthToken } from '@/store/status';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { useSelector } from 'react-redux';
import ReactStars from 'react-stars'

export type ReviewFormModalProps = {
    reviewModalIsOpen: boolean,
    closeModal: () => void;
    star: number;
    review: string;
    anonymous_user: boolean;
    _id: string;
}

export const ReviewEditForm: React.FC<ReviewFormModalProps> = ({ reviewModalIsOpen, closeModal, star, review, anonymous_user, _id }: ReviewFormModalProps) => {
    const [reviewText, setReviewText] = useState(review);
    const [anonymous, setAnonymous] = useState(anonymous_user);
    const [rating, setRating] = useState<number>(star);

    const token = useSelector(selectAuthToken);

    const [editReview] = api.useEditReviewMutation();
    const [getReviewData] = api.useGetReviewByUserMutation()
    const descriptionChange = (e: any) => {
        setReviewText(e);
    };

    const ratingChanged = (newRating: number) => {
        setRating(newRating);
    };
    const editReviewHandler = async () => {
        const current_page = location.pathname.split('/')[2]
        const result = await editReview({
            payload: {
                review_id: _id,
                text: reviewText,
                anonymous_user: anonymous,
                score: rating,
            },
            token
        });
        if ((result as any).data) {
            closeModal();
            await getReviewData({
                payload: {
                    user_id: current_page,
                    skip: 10,
                    index: 1,
                },
                token
            })
            // setReviewText("");
            // setRating(0);
            // setAnonymous(false);
        }

    }
    return (
        <Modal
            closeTimeoutMS={200}
            isOpen={reviewModalIsOpen}
            // style={customStyles}
            className='absolute inset-modal border-none bg-[#6062cf] overflow-auto rounded-[15px] outline-none p-[20px] mr-[-50%] -translate-x-1/2 -translate-y-1/2 mt-[35px] text-white lg:h-[55%] md:h-[60%] sm:h-[65%] h-[65%] lg:w-[45%] md:w-[55%] sm:w-[70%] w-[80%]'
            overlayClassName='fixed top-0 left-0 right-0 bottom-0 bg-[#6c83b191]'
            ariaHideApp={false}
            onRequestClose={closeModal}
        >
            <div className="flex flex-col py-4 w-full">
                <ReactQuill
                    value={reviewText}
                    onChange={descriptionChange}
                    placeholder="Leave reviews..."
                    className="placeholder:italic placeholder:text-white text-white w-full h-[150px] rounded-[10px]"
                />
                <div className='flex md:flex-row flex-col sm:mt-14 mt-16 mb-4 gap-2 justify-center lg:justify-between items-center '>
                    <div className="flex justify-start items-center gap-2">
                        Rating:
                        <ReactStars
                            count={5}
                            value={rating}
                            onChange={ratingChanged}
                            size={25}
                            color2={'#ffd700'}
                        />
                    </div>
                    <div className='flex gap-1 items-center '>
                        <input type='checkbox' onChange={() => setAnonymous(!anonymous)} checked={anonymous} /> Send a review anonymously
                    </div>
                </div>
                <button className="border-2 px-4 py-2 text-center  rounded-[10px] border-[#5f6fdb] bg-[#5f6fdb] hover:bg-transparent duration-200" onClick={editReviewHandler}>Submit</button>
            </div>
        </Modal>
    )
}