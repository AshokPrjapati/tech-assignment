import React from 'react'

function useToggle(initial = false) {
    const [isOpen, setIsOpen] = React.useState<boolean>(initial);

    const useToggle = {
        isOpen,
        onClose: () => setIsOpen(false),
        onOpen: () => setIsOpen(true)
    }

    return useToggle
}

export default useToggle