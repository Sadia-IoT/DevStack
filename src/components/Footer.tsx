import Logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={Logo} alt="DevStack" className="w-24" />
          <p className="mt-3 max-w-xs text-xs leading-5 text-gray-500">
            {" "}
            Build your ideal development stack with the right technologies for
            your next project.
          </p>
          <div className="mt-4 flex gap-4 text-xs text-gray-500">
  <a href="#" className="hover:text-black font-bold">
    GitHub
  </a>

  <a href="#" className="hover:text-black font-bold">
    Twitter
  </a>

  <a href="#" className="hover:text-black font-bold">
    LinkedIn
  </a>
</div>
        </div>
        <div>
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
        <div>
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
        <div>
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
        <div className="container mx-auto flex flex-col gap-2 px-6 py-4 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
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
