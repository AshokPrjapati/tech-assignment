import React from 'react'

function useAddModal(initial = false) {
    const [isOpen, setIsOpen] = React.useState<boolean>(initial);

    const useToggle = {
        isOpen,
        onClose: () => setIsOpen(false),
        onOpen: () => setIsOpen(true)
    }

    return useToggle
}

export default useAddModal