const menuItems = ['ГЛАВНАЯ', 'ОБ АВТОРЕ', 'РАБОТЫ', 'ПРОЦЕСС', 'КОНТАКТЫ']

function Header() {
    return (
        <header className="header">
            <strong className="logo">
                <div>
                    <img style={{ "cursor": "pointer" }} src="./img/WD.png" alt="logo" />
                </div>
            </strong>
            <nav className="main-nav">
                <ul className="menu">
                    {menuItems.map(item => <li key={item} style={{ "cursor": "pointer" }}>
                        <div>{item}</div>
                    </li>)}
                </ul>
            </nav>
            <nav className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>
                <ul className="menu__box">
                    {menuItems.map(item => <li key={item} style={{ "cursor": "pointer" }}>
                        <div className="menu__item">{item}</div>
                    </li>)}
                </ul>
            </nav>
        </header>
    )
}
export default Header