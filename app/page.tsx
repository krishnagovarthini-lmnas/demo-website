import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ActionTiles } from "@/components/action-tiles";
import Image from "next/image";
import Link from "next/link";

const imgData = [
  {
    imgSrc: "/images/largepower.png",
    label: "Large power transformers",
    imgUrl: "https://lumi.lmnaslens.com/large-power-tranformers",
  },
  {
    imgSrc: "/images/mediumpower.png",
    label: "Medium power transformers",
    imgUrl: "https://lumi.lmnaslens.com/transformers/medium-power-transformers",
  },
  {
    imgSrc: "/images/oildistribution.png",
    label: "Oil distribution transformers",
    imgUrl: "https://lumi.lmnaslens.com/transformers/oil",
  },
  {
    imgSrc: "/images/castresin.png",
    label: "Dry Type Transformers",
    imgUrl: "https://lumi.lmnaslens.com/transformers/dry",
  },
  {
    imgSrc: "/images/compactstation.png",
    label: "Compact substations",
    imgUrl: "https://lumi.lmnaslens.com/transformers/compact-substations",
  },
  {
    imgSrc: "/images/special.png",
    label: "Special transformers",
    imgUrl: "https://lumi.lmnaslens.com/transformers/special-transformers",
  },
];

export default function Page() {
  return (
    <main className="min-h-dvh bg-white">
      <SiteHeader />
      <Hero />
      <ActionTiles />

      {/* product/service tiles row inspired by screenshot */}
      <section id="products" className="border-t bg-white">
        <div className="mx-auto max-w px-4 py-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {imgData.map((item) => (
              <Link
                key={item.label}
                href={item.imgUrl}
                target="_blank"
                className="flex flex-col items-center gap-4 rounded-md border border-gray-200 bg-gray-50 p-4 hover:shadow-lg transition"
              >
                <Image
                  src={item.imgSrc}
                  alt={item.label}
                  width={195}
                  height={195}
                />
                <div className="text-center text-sm font-medium text-blue-900">
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
