import Modal from './Modal';
import styles from "./AddCarModel.module.css"
import { useRef } from 'react';
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

    let imgUrl: string;

    // handle the image upload
    const handleImage = async () => {
        if (bodyRef.current) {
            try {
                const imgInput = bodyRef.current.model_image;
                const img = imgInput.files[0];

                const form = new FormData();
                form.append("image", img);

                const res = await fetch(import.meta.env.VITE_IMGBB_URL, {
                    method: 'POST',
                    body: form
                });
                const data = await res.json();

                imgUrl = data.data.display_url
                console.log(imgUrl);

            } catch (error) {
                console.log(error);
            }
        }


    }

    const handleSubmit = () => {
        if (bodyRef.current) {
            const carDetail = {
                modelImage: imgUrl,
                modelName: bodyRef.current.model_name.value,
                modelYear: bodyRef.current.model_year.value,
                modelPrice: bodyRef.current.model_price.value,
                modelColor: bodyRef.current.model_color.value,
                modelMileage: bodyRef.current.model_mileage.value,
                odometerKM: bodyRef.current.model_km.value,
                majorScratch: bodyRef.current.model_scratch.value,
                accidents: bodyRef.current.model_accident.value,
                buyers: bodyRef.current.model_buyers.value,
                registerPlace: bodyRef.current.register_place.value,
            }

            const { modelName, modelYear, modelPrice, modelColor, modelMileage, odometerKM, majorScratch, accidents, buyers, registerPlace } = carDetail;

            if (!modelName || !modelYear || !modelPrice || !modelColor || !modelMileage || !odometerKM || !majorScratch || !accidents || !buyers || !registerPlace) {
                toast.error("Please fill all the fields");
            }

            dispatch(CreatePost);
        }

    }

    const bodyContent = (
        <form className={styles.body} ref={bodyRef}>
            <div className={styles.input_box}>
                <input type="file" id="model_image" onChange={handleImage} />
                <label htmlFor="model_name">Image of model</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_name" />
                <label htmlFor="model_name">Name of model</label>
            </div>
            <div className={styles.input_box}>
                <input type="number" id="model_year" />
                <label htmlFor="model_year">Year of model</label>
            </div>
            <div className={styles.input_box}>
                <input type="number" id="model_price" />
                <label htmlFor="model_price">Price</label>
            </div>
            <div className={styles.input_box}>
                <input type="number" id="model_mileage" />
                <label htmlFor="model_mileage">Mileage in (KMPL)</label>
            </div>
            <div className={styles.input_box}>
                <input type="number" id="model_km" />
                <label htmlFor="model_km">KM in odometer</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_color" />
                <label htmlFor="model_color">Vehicle color</label>
            </div>
            <div className={styles.input_box}>
                <input type="number" id="model_scratch" />
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