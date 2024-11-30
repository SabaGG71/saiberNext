import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="pt-9   bg-primary-800">
      <div className="container custom-container">
        <div className="flex flex-col pb-9 xl:flex-row xl:justify-between items-center gap-6">
          <div>
            <Image src={logo} alt="logo" className="h-[52px] w-auto" />
          </div>
          <div className="flex items-center">
            <nav className="flex gap-12 max-lg:gap-9">
              <Link
                href="/"
                className="text-white/50 hover:text-white transition duration-200 text-sm xl:text-base 2xl:text-lg"
              >
                Contact
              </Link>
              <Link
                href="/"
                className="text-white/50 text-sm hover:text-white transition duration-200 xl:text-base 2xl:text-lg"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-white/50 text-sm hover:text-white transition duration-200 xl:text-base 2xl:text-lg"
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-primary-400">
        <div className="container custom-container">
          <div className="">
            <p
              href="/"
              className="text-white py-5 font-bold text-base xl:text-xl max-lg:max-w-80 max-lg:mx-auto text-center "
            >
              © 2024 SaiberNext. Designed and developed by - Saba Gachechiladze
              ✨.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
