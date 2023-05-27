import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button"
import AddCarModal from "../components/modal/AddCarModal";
import useToggle from "../hooks/useToggle";

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