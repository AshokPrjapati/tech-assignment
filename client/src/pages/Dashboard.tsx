import Button from "../components/Button"
import AddCarModal from "../components/modal/AddCarModal";
import useToggle from "../hooks/useToggle";

const Dashboard: React.FC<any> = () => {
    const { isOpen, onOpen, onClose } = useToggle();

    return (
        <>
            <Button label="Add inventory" onClick={onOpen} />
            {isOpen && <AddCarModal isOpen={isOpen} onClose={onClose} />}
        </>
    )
}

export default Dashboard