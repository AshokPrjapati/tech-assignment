import { CarDetailsProps } from "../../constant/constant";
import styles from "../../styles/Post.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";


const Post = ({
    modelImage,
    modelName,
    modelYear,
    modelPrice,
    modelColor,
    modelMileage,
    odometerKM,
    majorScratch,
    accidents,
    dealer,
}: CarDetailsProps) => {
    const user = useSelector((store: RootState) => store.auth.userCredential);
    return (
        <div className={styles.post}>
            <div className={styles.image}>
                <img src={modelImage} alt={modelName} />
            </div>
            <div className={styles.description}>
                <h2>Name: {modelName}</h2>
                <p>Year: {modelYear}</p>
                <p>Price: {modelPrice}</p>
                <p>Color: {modelColor}</p>
                <p>Mileage: {modelMileage}</p>
                <p>Odometer: {odometerKM}</p>
                <p>Major straches: {majorScratch}</p>
                <p>Accidents: {accidents}</p>
            </div>
            {dealer === user._id}{
                <div className={styles.btns}>
                    <button className={styles.update}>Update</button>
                    <button className={styles.delete}>Delete</button>
                </div>

            }
        </div>
    );
};

export default Post;
