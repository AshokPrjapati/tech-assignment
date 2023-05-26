import React from 'react'

function useEditModal(initial = false) {
    const [isOpen, setIsOpen] = React.useState(initial);

    const useToggle = {
        isOpen,
        onClose: () => setIsOpen(false),
        onOpen: () => setIsOpen(true)
    }

    return useToggle
}

export default useEditModal