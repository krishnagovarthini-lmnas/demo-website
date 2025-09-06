"use client";

import Link from "next/link";
import { ContactDialog } from "./contact-dialog";
import {
  ClipboardList,
  FileSearch,
  ShoppingCart,
  LifeBuoy,
  Mail,
} from "lucide-react";

const tile =
  "flex flex-col items-center justify-center gap-2 rounded-md bg-gray-100 p-6 text-center hover:bg-gray-200 transition-colors border border-gray-200";

export function ActionTiles() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w px-4 py-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <Link
            href="https://lumi.lmnaslens.com/cart"
            className={tile}
            aria-label="Request for quote"
          >
            <ClipboardList className="h-8 w-8 text-orange-500" aria-hidden />
            <div className="w-full bg-blue-900 text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">
              Request for quote
            </div>
          </Link>

          <Link
            href="https://lumi.lmnaslens.com/quotations"
            className={tile}
            aria-label="Know my previous quote"
          >
            <FileSearch className="h-8 w-8 text-orange-500" aria-hidden />
            <div className="w-full bg-blue-900 text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium">
              My previous quote
            </div>
          </Link>

          <Link
            href="https://lumi.lmnaslens.com/orders"
            className={tile}
            aria-label="My previous order"
          >
            <ShoppingCart className="h-8 w-8 text-orange-500" aria-hidden />
            <div className="w-full bg-blue-900 text-white hover:bg-blue-800 px-3 py-2 text-sm rounded-md font-medium">
              My previous order
            </div>
          </Link>

          {/* Contact form opens modal */}
          <div className={tile} role="group" aria-label="Contact us">
            <Mail className="h-8 w-8 text-orange-500" aria-hidden />
            <ContactDialog triggerClassName="w-full bg-blue-900 text-white hover:bg-blue-800" />
          </div>

          <Link
            href="https://lumi.lmnaslens.com/helpdesk/my-tickets"
            className={tile}
            aria-label="Get Support"
          >
            <LifeBuoy className="h-8 w-8 text-orange-500" aria-hidden />
            <div className="w-full bg-blue-900 text-white text-sm  hover:bg-blue-800 px-3 py-2 rounded-md font-medium">
              Get Support
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
