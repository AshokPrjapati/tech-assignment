import { CarDetailsProps } from "../../constant/constant";
import styles from "../../styles/Post.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../Button";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import useToggle from "../../hooks/useToggle";
import EditCarModal from "../modal/EditCarModal";
import { deletePost } from "../../redux/post/deletePost/deletePost.action";
import { toast } from "react-hot-toast";
import { Dispatch } from "redux";
import Loader from "../Loader";

const Post = (carDetails: CarDetailsProps) => {
  // destructuring car details
  const {
    _id,
    carImage,
    odometer,
    majorScratches,
    noOfAccidents,
    noOfPreviousBuyers,
    originalPaint,
    registrationPlace,
    oemSpec,
    dealer,
  } = carDetails;

  const user = useSelector((store: RootState) => store.auth.userCredential);
  const loading = useSelector((store: RootState) => store.deletePost.loading);

  const { isOpen, onOpen, onClose } = useToggle();
  const dispatch: Dispatch<any> = useDispatch()

  const handleDelete = () => {
    const id = _id;
    if (id) dispatch(deletePost(id, toast))
  };

  return typeof oemSpec !== "string" ? (
    <div className={styles.card}>
      <div className={styles.car_image}>
        <img src={carImage} />
      </div>
      <div className={styles.specs}>
        <div className={styles.oem_specs}>
          <h3>OEM Specifications</h3>
          <div>
            <div>
              <bdi>Brand: </bdi>
              <span>{oemSpec?.brand}</span>
            </div>
            <div>
              <bdi>Model: </bdi>
              <span>{oemSpec?.model}</span>
            </div>
            <div>
              <bdi>Price: </bdi>
              <span>₹{oemSpec?.listPrice} /-</span>
            </div>
            <div>
              <bdi>Max Speed: </bdi>
              <span>{oemSpec?.maxSpeed} KM/H</span>
            </div>
            <div>
              <bdi>Mileage: </bdi>
              <span>{oemSpec?.mileage}</span>
            </div>
            <div>
              <bdi>Power: </bdi>
              <span>{oemSpec?.power} BHP</span>
            </div>
            <div>
              <bdi>Launch Year: </bdi>
              <span>{oemSpec?.year}</span>
            </div>
            <div className={styles.colors}>
              <bdi>Colors: </bdi>
              <div>
                {oemSpec?.colors?.map((ele: string, i: number) => {
                  return (
                    <span
                      key={i}
                      style={{
                        height: "20px",
                        width: "20px",
                        borderRadius: "50% ",
                        backgroundColor: ele.toLowerCase(),
                        display: "inline-block",
                        marginRight: "5px",
                      }}
                    ></span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dealer_spec}>
          <h3>Delear Specifications</h3>

          <div>
            <bdi>Dealer: </bdi>
            <span>{dealer && dealer.name}</span>
          </div>
          <div>
            <div>
              <bdi>Scratches: </bdi>
              <span>{!majorScratches ? "-" : majorScratches}</span>
            </div>
            <div>
              <bdi>No. Of Accidents: </bdi>
              <span>{noOfAccidents}</span>
            </div>
            <div>
              <bdi>No. Of Owners: </bdi>
              <span>{noOfPreviousBuyers}</span>
            </div>
            <div>
              <bdi>Odometer: </bdi>
              <span>{odometer}</span>
            </div>
            <div>
              <bdi>Original Paint: </bdi>
              <span>{originalPaint ? "Original" : "Repainted"}</span>
            </div>
            <div>
              <bdi>Registered At: </bdi>
              <span>{registrationPlace}</span>
            </div>
          </div>
          <div>
            {user?._id == dealer?._id && (
              <div className={styles.btns}>
                <Button
                  label={"Edit Car Details"}
                  icon={AiFillEdit}
                  onClick={onOpen}
                />
                <Button
                  label={"Delete Car Details"}
                  icon={MdDeleteOutline}
                  onClick={handleDelete}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* loader */}
      {loading && <Loader />}

      {/* Edit modal */}
      {isOpen && (
        <EditCarModal
          isOpen={isOpen}
          onClose={onClose}
          carDetails={carDetails}
        />
      )}
    </div>
  ) : null;
};

export default Post;
