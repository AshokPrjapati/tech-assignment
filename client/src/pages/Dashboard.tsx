import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button"
import AddCarModal from "../components/modal/AddCarModal";
import useToggle from "../hooks/useToggle";
import { Dispatch } from "redux";
import { getPosts } from "../redux/post/getPost/getPost.action";
import { RootState } from "../redux/store";
import styles from "./Dashboard.module.css"
import Post from "../components/post/Post";
import { CarDetailsProps } from "../constant/constant";

const Dashboard = () => {
    const { isOpen, onOpen, onClose } = useToggle();

    return (
        <>
            <Button label="Add inventory" onClick={onOpen} />
            {isOpen && <AddCarModal isOpen={isOpen} onClose={onClose} />}
        </>
    )
}

export default Dashboard