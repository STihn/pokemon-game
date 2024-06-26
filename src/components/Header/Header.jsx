import style from './style.module.css';

const Header = ({title, descr, onClick}) => {
    const handleClick = () => {
        onClick('game')
    }
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                    <button onClick={handleClick}>
                        Start Game
                    </button>
                </div>
        </header>
    )
}

export default Header;