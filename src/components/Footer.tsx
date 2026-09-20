import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center sm:text-left">
          <img src={Logo} alt="DevStack" className="mx-auto w-24 sm:mx-0" />
          <p className="mx-auto mt-3 max-w-xs text-xs leading-5 text-gray-500 sm:mx-0">
            {" "}
            Build your ideal development stack with the right technologies for
            your next project.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs text-gray-500 sm:justify-start">
  <a href="#" className="font-bold hover:text-black">
    GitHub
  </a>
     <span className="sm:hidden">•</span>
  <a href="#" className="font-bold hover:text-black ">
    Twitter
  </a>
    <span className="sm:hidden">•</span>
  <a href="#" className="font-bold hover:text-black ">
    LinkedIn
  </a>
</div>
        </div>
        <div className="hidden sm:block">   {/*sm:block mean hidden for small device and showing above 640px screen*/}
          <h3 className="text-xs font-semibold uppercase text-gray-800">
            Product
          </h3>
          <ul className="mt-4 space-y-2 text-xs text-gray-500">
            <li>
              <a href="#" className="hover:text-gray-800">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Technologies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="hidden sm:block">
          <h3 className="text-xs font-semibold uppercase text-gray-800">
            Company
          </h3>

          <ul className="mt-4 space-y-2 text-xs text-gray-500">
            <li>
              <a href="#" className="hover:text-gray-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="hidden sm:block ">
          <h3 className="text-xs font-semibold uppercase text-gray-800">
            Legal
          </h3>

          <ul className="mt-4 space-y-2 text-xs text-gray-500">
            <li>
              <a href="#" className="hover:text-gray-800">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto flex items-center gap-3 px-6 py-4 text-xs text-gray-400 justify-between">
          <p>© 2026 DevStack. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
