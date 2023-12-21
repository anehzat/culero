import { api } from '@/store/culero.api';
import { selectAuthToken, selectUser } from '@/store/status';
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { useSelector } from 'react-redux';
import ReactStars from 'react-stars'

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
        backgroundColor: '#6062cf',
        borderRadius: '15px',
        border: 'none',
        marginTop: '35px',
        color: 'white',
        height: '40%',
        width: '35%',
        scrollbars: false,
    },
};

export type ReviewFormModalProps = {
    reviewModalIsOpen: boolean,
    closeModal: () => void
}

export const ReviewForm: React.FC<ReviewFormModalProps> = ({ reviewModalIsOpen, closeModal }: ReviewFormModalProps) => {
    const [reviewText, setReviewText] = useState("");
    const [anonymous, setAnonymous] = useState(false);
    const [rating, setRating] = useState<number>(0);

    const token = useSelector(selectAuthToken);
    const user = useSelector(selectUser);

    const [addReview] = api.useAddReviewMutation();
    const [getReviewData] = api.useGetReviewByUserMutation()
    const descriptionChange = (e: any) => {
        setReviewText(e);
    };

    const ratingChanged = (newRating: number) => {
        setRating(newRating);
    };
    const addReviewHandler = async () => {
        const current_page = location.pathname.split('/')[2]
        const result = await addReview({
            payload: {
                user_id: current_page,
                text: reviewText,
                anonymous_user: anonymous,
                score: rating,
                reviewer_id: anonymous ? '' : user._id
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
            setReviewText("");
            setRating(0);
            setAnonymous(false);
        }

    }
    return (
        <Modal
            closeTimeoutMS={200}
            isOpen={reviewModalIsOpen}
            style={customStyles}
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
                <div className='flex mt-14 my-4 gap-2 justify-center lg:justify-between items-center '>
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
                        <input type='checkbox' onChange={() => setAnonymous(!anonymous)} /> Send a review anonymously
                    </div>
                </div>
                <button className="border-2 px-4 py-2 text-center  rounded-[10px] border-[#5f6fdb] bg-[#5f6fdb] hover:bg-transparent duration-200" onClick={addReviewHandler}>Submit</button>
            </div>
        </Modal>
    )
}