import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
          <div>
            <Image src="/disha-logo-light.png" alt="Disha" width={90} height={32} className="mb-1" />
            <div className="text-sm text-slate-500">
              Restaurant Intelligence · Luxembourg
            </div>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#capabilities" className="hover:text-white transition-colors">What you get</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#institutions" className="hover:text-white transition-colors">Institutions</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-slate-600">
          <div>
            © {new Date().getFullYear()} Disha Analytics · Luxembourg · All rights reserved
          </div>
          <div className="flex gap-4">
            <a
              href="https://sameerbhalerao.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              Built by Sameer Bhalerao
            </a>
            <a
              href="mailto:sameerbh08@gmail.com"
              className="hover:text-slate-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
