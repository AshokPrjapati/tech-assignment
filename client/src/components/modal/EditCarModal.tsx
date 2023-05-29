import React, { useState } from "react";
import styles from "../../styles/EditCarModel.module.css";
import { CarDetailsProps } from "../../constant/constant";
import Modal from "./Modal";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { updatePost } from "../../redux/post/updatePost/updatePost.action";
import { RootState } from "../../redux/store";
import Loader from "../Loader";

interface EditCarModalProps {
  isOpen: boolean;
  onClose: () => void;
  carDetails: CarDetailsProps;
}

const EditCarModal = ({ isOpen, onClose, carDetails }: EditCarModalProps) => {
  // initial edit form data
  const initialFormData = {
    carImage: carDetails.carImage,
    odometer: carDetails.odometer,
    majorScratches: carDetails.majorScratches,
    noOfAccidents: carDetails.noOfAccidents,
    noOfPreviousBuyers: carDetails.noOfPreviousBuyers,
    originalPaint: carDetails.originalPaint,
    registrationPlace: carDetails.registrationPlace,
  };

  // form data
  const [formData, setFormData] = useState(initialFormData);
  const { loading } = useSelector((store: RootState) => store.updatePost);
  const dispatch: Dispatch<any> = useDispatch();

  // handle change of input field of edit form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: val });
  };

  // handle the submission of edit form
  const handleSubmit = () => {
    const { carImage, odometer, majorScratches, registrationPlace } = formData;

    if (!carImage || !odometer || !majorScratches || !registrationPlace) return toast.error("Please fill all fields");

    const id = carDetails._id;
    if (id) dispatch(updatePost(id, formData, onClose, toast));
  };

  // bofy conntent for edit form
  const bodyContent = (
    <form className={styles.body}>
      <div>
        <label className={styles.label}>Original Paint:</label>
        <input
          type="checkbox"
          name="originalPaint"
          onChange={handleChange}
          checked={formData.originalPaint}
        />
      </div>
      <div className={styles.input_box}>
        <input
          type="text"
          name="carImage"
          onChange={handleChange}
          value={formData.carImage}
        />
        <label>Image url of Car</label>
      </div>
      <div className={styles.input_box}>
        <input
          type="number"
          name="odometer"
          value={formData.odometer}
          onChange={handleChange}
        />
        <label>KM in odometer</label>
      </div>
      <div className={styles.input_box}>
        <input
          type="text"
          name="majorScratches"
          value={formData.majorScratches}
          onChange={handleChange}
        />
        <label>Major Scratches</label>
      </div>
      <div className={styles.input_box}>
        <input
          type="number"
          name="noOfAccidents"
          value={formData.noOfAccidents}
          onChange={handleChange}
        />
        <label>Number of accidents reported,</label>
      </div>
      <div className={styles.input_box}>
        <input
          type="number"
          name="noOfPreviousBuyers"
          value={formData.noOfPreviousBuyers}
          onChange={handleChange}
        />
        <label>Number of previous buyers</label>
      </div>
      <div className={styles.input_box}>
        <input
          type="text"
          name="registrationPlace"
          value={formData.registrationPlace}
          onChange={handleChange}
        />
        <label>Registration Place</label>
      </div>
    </form>
  );

  return (
    <>
      {loading && <Loader />}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Edit Car Detail"
        actionLabel="Edit Car detail"
        onSubmit={handleSubmit}
        body={bodyContent}
      />
    </>

  );
};

export default EditCarModal;
