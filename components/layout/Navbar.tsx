"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const gyms = [
    { href: "/teretane/gym-1", label: "Gym 1" },
    { href: "/teretane/gym-2", label: "Gym 2" },
    { href: "/teretane/gym-3", label: "Gym 3" },
    { href: "/teretane/gym-4", label: "Gym 4" },
];

const links = [
    { href: "/o-nama", label: "o nama" },
    { href: "/usluge", label: "usluge" },
];

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastY, setLastY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setVisible(currentY < lastY || currentY < 10);
            setLastY(currentY);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastY]);

    // Zatvori dropdown kad kliknes van njega
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className={`z-50 w-full backdrop-blur-3xl fixed px-[5vw] py-6 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
            <nav className="w-full flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={100} height={100} priority />
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-2">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="group relative uppercase p-2.5">
                            {link.label}
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                        </Link>
                    ))}

                    {/* Dropdown — teretane */}
                    <div
                        ref={dropdownRef}
                        className="relative"
                    >
                        <button
                            onClick={() => setDropdownOpen((prev) => !prev)}
                            className="group relative uppercase p-2.5 flex items-center gap-1 cursor-pointer"
                        >
                            teretane
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                            />
                            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                        </button>

                        {/* Dropdown panel */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 rounded-xl border border-border bg-bg-secondary backdrop-blur-xl overflow-hidden transition-all duration-200 ${dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                            {gyms.map((gym) => (
                                <Link
                                    key={gym.href}
                                    href={gym.href}
                                    onClick={() => setDropdownOpen(false)}
                                    className="block px-4 py-3 uppercase text-sm text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors duration-150"
                                >
                                    {gym.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link href="/kontakt" className="ml-2 uppercase px-8 py-2 rounded-xl bg-accent text-foreground hover:opacity-80 transition-opacity">
                        kontaktiraj nas
                    </Link>
                </div>

                {/* Hamburger */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        className="flex flex-col gap-1.5 p-1"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 pt-4" : "max-h-0"}`}>
                <div className="flex flex-col gap-4">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="uppercase" onClick={() => setMenuOpen(false)}>
                            {link.label}
                        </Link>
                    ))}

                    {/* Teretane u mobilnom — accordion */}
                    <div>
                        <button
                            onClick={() => setDropdownOpen((prev) => !prev)}
                            className="flex items-center gap-1 uppercase w-full"
                        >
                            teretane
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${dropdownOpen ? "max-h-40 pt-2" : "max-h-0"}`}>
                            <div className="flex flex-col gap-3 pl-4 border-l border-border">
                                {gyms.map((gym) => (
                                    <Link
                                        key={gym.href}
                                        href={gym.href}
                                        className="uppercase text-sm text-text-secondary"
                                        onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}
                                    >
                                        {gym.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/kontakt"
                        className="uppercase px-4 py-2 rounded-xl bg-accent text-background text-center hover:opacity-80 transition-opacity"
                        onClick={() => setMenuOpen(false)}
                    >
                        kontaktiraj nas
                    </Link>
                </div>
            </div>
        </header>
    );
}