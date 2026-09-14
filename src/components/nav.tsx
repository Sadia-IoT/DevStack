import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="flex justify-between container mx-auto">
      <img src={Logo} alt="logo" />
      <ul className="flex gap-4 items-center">
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <ul>
            <li>
                
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
