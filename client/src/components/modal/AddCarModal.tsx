import Modal from './Modal';
import styles from "./AddCarModel.module.css"
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
interface AddCarModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddCarModal = ({ isOpen, onClose }: AddCarModalProps) => {
    const bodyRef = useRef(null);
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (bodyRef.current) {
            const carDetail = {
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
        }

    }

    const bodyContent = (
        <form className={styles.body} ref={bodyRef}>
            <div className={styles.input_box}>
                <input type="text" id="model_name" />
                <label htmlFor="model_name">Name of model</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_year" />
                <label htmlFor="model_year">Year of model</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_price" />
                <label htmlFor="model_price">Price</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_mileage" />
                <label htmlFor="model_mileage">Mileage</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_km" />
                <label htmlFor="model_km">KM in odometer</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_color" />
                <label htmlFor="model_color">Vehicle color</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_scratch" />
                <label htmlFor="model_scratch">Major Scratches</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_accident" />
                <label htmlFor="model_accident">Number of accidents reported,</label>
            </div>
            <div className={styles.input_box}>
                <input type="text" id="model_buyers" />
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
        />
    )
}

export default AddCarModal