import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
      {/* mobile view */}
      <button className="text-xl md:hidden">
        ☰
      </button>
      <img src={Logo} alt="logo" className="w-28 md:w-32"/>

      <ul className="hidden md-flex gap-4 items-center">
        <li><a href="#" >Home</a></li>
        <li><a href="#">Technologies</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="flex items-center gap-3">
        <button className="hidden text-sm text-gray-600 sm:block">
            Sign In
          </button>

         <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white">
            Sign Up</button> 
        
      </div>

       </div>    
    </nav>
  );
};

export default Nav;
