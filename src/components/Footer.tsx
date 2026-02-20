import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <footer className="relative w-full bg-white text-slate-900">
      {/* Wave */}
      <div className="absolute left-0 right-0 -top-[64px] h-[64px] overflow-hidden leading-none">
        <svg viewBox="0 0 1440 64" className="h-full w-full" preserveAspectRatio="none">
          <path
            d="M0,30 C240,46 480,10 720,30 C960,50 1200,14 1440,30 L1440,64 L0,64 Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">
        {/* CTA — visas ej på contact */}
        {!isContactPage && (
          <div className="pt-16 pb-14">
            <div className="rounded-2xl p-10 md:p-12 text-center border border-slate-200 bg-white shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Intresserad?
              </h2>

              <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                Låt oss prata igenom nuläge, målbild och första steg. Jag kan bidra
                med både riktning och hands-on leverans – utan onödig komplexitet.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
              >
                Kontakta mig!
              </Link>
            </div>
          </div>
        )}

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 pb-12 border-t border-slate-200">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Andrées Ingenjörsbyrå. Alla rättigheter
            förbehållna.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/resume"
              className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
            >
              CV
            </Link>
            <Link
              to="/contact"
              className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
            >
              Kontakt
            </Link>
            <Link
              to="/blogg"
              className="text-slate-600 hover:text-slate-900 text-sm transition-colors"
            >
              Blogg
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;