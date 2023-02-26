function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Site Name</a>
            <ul>
                <CustomLink href="/pricing">Pricing</CustomLink>
                <CustomLink href="/about">About</CustomLink>
            </ul>
        </nav>
    );
}

// @ts-ignore
function CustomLink({href, children, ...props}) {
    const path = window.location.pathname
    return  <li className={path === href ? 'active' : ''}>
                <a href={href} {...props}>{children}</a>
            </li>

}

export default Navbar;
