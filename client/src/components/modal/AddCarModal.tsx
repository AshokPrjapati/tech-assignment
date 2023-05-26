import useAddModal from '../../hooks/useAddModal';
import Modal from './Modal';

const AddCarModal = () => {
    const { isOpen, onClose } = useAddModal(false);
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Add Car Detail"
            actionLabel="Add Car"
            onSubmit={() => { }}
        />
    )
}

export default AddCarModal