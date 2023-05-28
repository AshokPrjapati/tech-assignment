import { useCallback, useEffect, useState } from "react";
import Button from "../components/Button"
import AddCarModal from "../components/modal/AddCarModal";
import useToggle from "../hooks/useToggle";
import { getAllOEMs } from "../redux/oems/oems.action";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import OEMsTable from "../components/oemTable/OEMsTable";
import { toast } from "react-hot-toast";
import { RootState } from "../redux/store";

const Dashboard: React.FC<any> = () => {
    const { isOpen, onOpen, onClose } = useToggle();
    const dispatch: Dispatch<any> = useDispatch();
    const { selectedOem } = useSelector((store: RootState) => store.oem);

    // fetch oem data on every render
    useEffect(() => {
        dispatch(getAllOEMs())
    }, []);

    const handleButton = () => {
        if (selectedOem) onOpen();
        else toast.error("Please select OEMs first")
    }

    return (
        <>
            {/* Add inventory button */}
            <Button label="Add inventory" onClick={handleButton} selectedOem={selectedOem} />

            {/* OEM table */}
            <OEMsTable />
            {isOpen && <AddCarModal isOpen={isOpen} onClose={onClose} />}
        </>
    )
}

export default Dashboard