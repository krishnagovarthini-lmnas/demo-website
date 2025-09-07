import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w grid-cols-1 gap-0 px-4 md:grid-cols-2">
        {/* Left side: illustration */}
        <div className="relative h-[360px] overflow-hidden rounded-md md:h-[480px]">
          <Image
            src="/images/sgb-portfolio.jpg"
            alt="Illustrated energy landscape with transformers, power lines, and infrastructure"
            className="absolute inset-0 h-full w-full object-cover object-left"
            width={1500}
            height={826}
          />
        </div>

        {/* Right side: textured info panel approximation */}
        <div className="relative flex h-full items-center rounded-md bg-gray-100">
          {/* <div className="absolute left-0 top-0 h-1 w-2/3 rounded-tr-lg bg-orange-500" aria-hidden /> */}
          <div className="relative w-full px-6 py-10 md:px-10">
            <h2 className="mb-2 text-2xl font-extrabold text-blue-900 md:text-3xl text-balance font-oswald">
              SGB-SMIT GROUP -
              <span className="text-orange-500 uppercase">
                {" "}
                The pure-play transformer specialist from Europe...
              </span>
            </h2>
            <p className="mb-8 text-sm md:text-base text-gray-600">
              Welcome to the SGB-SMIT Group, the pure-play transformer
              specialist from Europe with the highest customer dedication.
              Wherever electricity is required, generated and distributed: the
              SGB-SMIT Group supplies products in line with demand, adapted to
              the customers and their requirements. Our key objective has been
              ever since the complete satisfaction of our customers. You may
              trust that we go into your special technical problems, analyze
              them, and find a solution tailored to your individual request.{" "}
            </p>
            <a
              href="https://lumi.lmnaslens.com/shop-by-category"
              className="inline-flex items-center justify-center rounded-md bg-orange-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              aria-label="Explore products"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
