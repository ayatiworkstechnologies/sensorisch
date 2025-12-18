"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full text-white bg-primary overflow-hidden">
      
      {/* BACKGROUND IMAGE OVERLAY */}
      {/* <Image
        src="/senso.svg"
        alt="Footer background"
        fill
        priority
        className="opacity-20 mt-20"
      /> */}

      {/* CONTENT */}
      <div className="relative z-10">
        
        {/* MAIN GRID */}
        <div className="max-w-6xl mx-auto px-6 py-15  border-b border-white/20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 items-start">
            
            {/* BRAND */}
            <div className="space-y-4">
              <Image
                src="/head-logo.svg"
                alt="Sensorisch"
                width={110}
                height={36}
                className="object-contain"
              />
              <p className="text-2xl tracking-wide leading-relaxed">
                Where Science<br />Meets Senses
              </p>
            </div>

            {/* SOLUTIONS */}
            <div>
              <h4 className="text-2xl  mb-6">Solutions</h4>
              <ul className="space-y-2 font-secondary text-lg">
                <li><Link href="#" className="hover:opacity-80">Senso Ranges</Link></li>
                <li><Link href="#" className="hover:opacity-80">Bespoke Solutions</Link></li>
                <li><Link href="#" className="hover:opacity-80">Flavours</Link></li>
                <li><Link href="#" className="hover:opacity-80">Natural Colours</Link></li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="text-2xl mb-6">Company</h4>
              <ul className="space-y-2 font-secondary text-lg">
                <li><Link href="#" className="hover:opacity-80">About us</Link></li>
                <li><Link href="#" className="hover:opacity-80">Contact</Link></li>
                <li><Link href="#" className="hover:opacity-80">Contact Us</Link></li>
                <li><Link href="#" className="hover:opacity-80">Natural Colours</Link></li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h4 className="text-2xl mb-6">Support</h4>
              <ul className="space-y-2 font-secondary text-lg">
                <li><Link href="#" className="hover:opacity-80">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:opacity-80">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:opacity-80">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="max-w-6xl mx-auto px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-center font-secondary text-xl justify-between gap-4">
            <p className="opacity-80">
              © {year} Sensorisch. All rights reserved.
            </p>

            <Link
              href="https://ayatiworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-secondary text-xl opacity-90 hover:opacity-100"
            >
              <span>Designed & Developed by</span>
              <Image
                src="/web_logo.png"
                alt="Ayatiworks"
                width={60}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
