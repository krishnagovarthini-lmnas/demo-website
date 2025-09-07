import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="w-full border-b bg-white mb-10">
      <div className="mx-auto max-w px-14 py-4">
        {/* main nav */}
        <div className="flex items-center justify-between py-3">
          <Image
            src="/images/logo.png"
            alt="sgb-smith-logo"
            width={255}
            height={66}
          />

          <nav className="hidden items-center gap-6 md:flex">
            {[
              ["PRODUCTS", "https://lumi.lmnaslens.com/shop-by-category"],
              ["BUSINESS SECTORS", "/"],
              ["SGB-SMIT GROUP", "/"],
              ["SUSTAINABILITY", "/"],
              ["CAREER & JOBS", "/"],
              ["CONTACT", "/"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="text-base font-semibold uppercase tracking-wide text-blue-900 border border-t-2 border-b-0 border-r-0 border-l-0 border-transparent hover:border-orange-500 transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* blue-to-orange accent */}
      <div className="mx-auto max-w">
        <div className="h-2 w-full bg-gradient-to-r from-blue-900 via-blue-900 to-orange-500 rounded-lg" />
      </div>
    </header>
  );
}
