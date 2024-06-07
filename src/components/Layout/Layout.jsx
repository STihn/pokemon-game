import style from './style.module.css';

const Layout = ({title, urlBg, colorBg, children}) => {

    const backdrop = urlBg ? {backgroundImage: `url(${urlBg})`} : {backgroundColor: colorBg};

    return(
        <section  className={style.root} style={backdrop}>
            <div className={style.wrapper}>
                <article>
                    <div className={style.title}>
                        <h3>{title}</h3>
                        <span className={style.separator}></span>
                    </div>
                    <div className={style.desc.full}>
                        {children}
                    </div>
                </article>  
            </div>
        </section>
    )
}

export default Layout;