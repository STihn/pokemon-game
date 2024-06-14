import cn from "classnames";
import style from './style.module.css';

export const Menu = ({isChangeModal}) => {
    return (
        <div className={cn(style.menuContainer, isChangeModal ? style.active : style.deactive)}>
            <div className={style.overlay} />
            <div className={style.menuItems}>
                <ul>
                <li>
                    <a href="#welcome">
                    HOME
                    </a>
                </li>
                <li>
                    <a href="#game">
                    GAME
                    </a>
                </li>
                <li>
                    <a href="#about">
                    ABOUT
                    </a>
                </li>
                <li>
                    <a href="#contact">
                    CONTACT
                    </a>
                </li>
                </ul>
            </div>
        </div>
    )
}