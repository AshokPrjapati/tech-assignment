import { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io"
import styles from "../../styles/Modal.module.css";
import Button from '../Button';

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled }) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen])

    const handleClose = useCallback(() => {
        if (disabled) return;
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300)
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) return;
        onSubmit();
    }, [disabled, onSubmit]);


    if (!isOpen) return null;

    return (
        <div className={styles.modal}>

            {/* modal content */}
            <div className={showModal ? styles.show_modal : styles.hide_modal}>
                <div className={styles.modal_content}>
                    {/* header */}
                    <header className={styles.header}>
                        <div>{title}</div>
                        <button onClick={handleClose}>
                            <IoMdClose size={18} />
                        </button>
                    </header>
                    {/* body */}
                    <div className={styles.modal_body}>
                        {body}
                    </div>
                    {/* footer */}
                    <div className={styles.footer}>
                        <div>
                            <Button label={actionLabel} disabled={disabled} onClick={handleSubmit} small={true} />
                        </div>
                        {footer}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal