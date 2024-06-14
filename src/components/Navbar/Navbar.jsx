import cn from 'classnames';
import style from './style.module.css';
export const Navbar = ({changeModal, isChangeModal}) => {

    const handleClick = () => {
        console.log('handleclick')
        changeModal()
    }

    return(
        <nav className={style.root}>
            <div className={style.navWrapper}>
                <p className={style.brand}>
                LOGO
                </p>
                <a className={cn(style.menuButton, {[style.active]: isChangeModal})} onClick={handleClick}>
                    <span />
                </a>
            </div>
        </nav>
    )
}