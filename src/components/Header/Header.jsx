import style from './style.module.css';

const Header = () => {
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                    <h1>this is title Header</h1>
                    <p>this is description</p>
                </div>
        </header>
    )
}

export default Header;