import Logo from "./Logo";

// children: to handle props drilling
export default function Navbar ({children}){
    return (
      <nav className="nav-bar">
        <Logo />
        {children}
      </nav>
    );
}