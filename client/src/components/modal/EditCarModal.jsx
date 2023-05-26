import React from 'react'
import useEditModal from '../../hooks/useEditModal';
import Modal from "./Modal"

const EditCarModal = () => {
    const { isOpen, onClose } = useEditModal(false);
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