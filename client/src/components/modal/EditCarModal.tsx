import Modal from "./Modal"

interface EditCarModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EditCarModal = ({ isOpen, onClose }: EditCarModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Edit Car Detail"
            actionLabel="Edit Car detail"
            onSubmit={() => { }}
        />
    )
}

export default EditCarModal