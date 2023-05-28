import Modal from './Modal';
import styles from "../../styles/AddCarModel.module.css";
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Dispatch } from 'redux';
import { CreatePost } from '../../redux/post/addPost/addPost.action';
import { RootState } from '../../redux/store';
interface AddCarModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddCarModal = ({ isOpen, onClose }: AddCarModalProps) => {
    const bodyRef: React.MutableRefObject<any> = useRef(null);
    const dispatch: Dispatch<any> = useDispatch();
    const { loading } = useSelector((store: RootState) => store.addPost);
    const { selectedOem } = useSelector((store: RootState) => store.oem);
    const [imgurl, setImgUrl] = useState("")

    // handle the image upload
    const handleImage = async () => {
        if (bodyRef.current) {
            try {
                const imgInput = bodyRef.current.carImage;
                const img = imgInput.files[0];

                const form = new FormData();
                form.append("image", img);

                const res = await fetch(import.meta.env.VITE_IMGBB_URL, {
                    method: 'POST',
                    body: form
                });
                const data = await res.json();

                setImgUrl(data.data.display_url);
            } catch (error) {
                console.log(error);
            }
        }


    }

    const handleSubmit = () => {
        if (bodyRef.current && imgurl) {
            const carDetail = {
                oemSpec: selectedOem,
                carImage: imgurl,
                odometer: bodyRef.current.odometer.value,
                majorScratches: bodyRef.current.model_scratch.value,
                noOfAccidents: bodyRef.current.model_accident.value,
                noOfPreviousBuyers: bodyRef.current.model_buyers.value,
                registrationPlace: bodyRef.current.register_place.value,
                originalPaint: bodyRef.current.register_place.checked
            }

            const { oemSpec, majorScratches, odometer, noOfAccidents, noOfPreviousBuyers, registrationPlace } = carDetail;

            if (!oemSpec || !odometer || !majorScratches || !noOfAccidents || !noOfPreviousBuyers || !registrationPlace) {
                return toast.error("Please fill all the fields");
            }
            dispatch(CreatePost(carDetail, onClose, toast));
        } else {
            return toast("Please wait car image is uploading", {
                icon: '..',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        }

    }


    const bodyContent = (
        <form className={styles.body} ref={bodyRef}>
            <div >
                <label htmlFor="original_paint" className={styles.label}>Original Paint:</label>
                <input type="checkbox" id="original_paint" />
            </div>
            <div className={styles.input_box}>
                <input type="file" id="carImage" onChange={handleImage} />
                <label htmlFor="carImage">Image of Car</label>
            </div>
            <div className={styles.input_box}>
                <input type="number" id="odometer" />
                <label htmlFor="odometer">KM in odometer</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_scratch" />
                <label htmlFor="model_scratch">Major Scratches</label>
            </div>
            <div className={styles.input_box}>
                <input type="number" id="model_accident" />
                <label htmlFor="model_accident">Number of accidents reported,</label>
            </div>
            <div className={styles.input_box}>
                <input type="number" id="model_buyers" />
                <label htmlFor="model_buyers">Number of previous buyers</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="register_place" />
                <label htmlFor="register_place">Registration Place</label>
            </div>

        </form>
    )

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Add Car Detail"
            actionLabel="Add Car Details"
            onSubmit={handleSubmit}
            body={bodyContent}
            disabled={loading}
        />
    )
}

export default AddCarModal