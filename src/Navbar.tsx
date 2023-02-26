import {Link, useMatch, useResolvedPath} from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Site Name</Link>
            <ul>
                <CustomLink href="/pricing">Pricing</CustomLink>
                <CustomLink href="/about">About</CustomLink>
            </ul>
        </nav>
    );
}

// @ts-ignore
function CustomLink({href, children, ...props}) {
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch({path: href, end: true})
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={resolvedPath} {...props}>{children}</Link>
        </li>
    )
}

export default Navbar;
