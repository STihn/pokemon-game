import React, {useState} from "react";
import { Menu } from '../Menu/Menu';
import { Navbar } from "../Navbar/Navbar";

const MenuHeader = () => {
    const [isChangeModal, setChangeModal] = useState(false);

    const handleOpenModal = () => {
        setChangeModal(!isChangeModal)
    }
    return (
        <React.Fragment>
            <Menu isChangeModal={isChangeModal}/>
            <Navbar changeModal={handleOpenModal} isChangeModal={isChangeModal}/>
        </React.Fragment>

    )
}

export default MenuHeader;