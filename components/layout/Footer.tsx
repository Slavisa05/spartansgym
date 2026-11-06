import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/data/site";
import CookieSettingsButton from "@/components/analytics/CookieSettingsButton";

const instagramHandle = `@${SITE.social.instagram.split("/").filter(Boolean).pop()}`;

const navLinks = [
	{ href: "/", label: "pocetna" },
	{ href: "/o-nama", label: "o nama" },
	{ href: "/usluge", label: "usluge" },
	{ href: "/kontakt", label: "kontakt" },
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-16 border-t border-border bg-bg-secondary/80 px-page">
			<div className="py-12 grid gap-10 md:grid-cols-3">
				<div className="flex items-center justify-center md:justify-start">
					<Link href="/" className="inline-flex items-center">
						<Image src="/logo.png" alt={`${SITE.name} logo`} width={110} height={110} />
					</Link>
				</div>

				<div>
					<h3 className="mb-4 text-base uppercase tracking-wide">navigacija</h3>
					<ul className="space-y-2 text-sm uppercase">
						{navLinks.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className="text-text-secondary transition-colors hover:text-accent"
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="mb-4 text-base uppercase tracking-wide">kontakt</h3>
					<div className="space-y-2 text-sm text-text-secondary">
						<a 
                            href={`tel:${SITE.phone}`} 
                            className="block transition-colors hover:text-accent">
							{SITE.phone}
						</a>
						<a
							href={`mailto:${SITE.email}`}
							className="block transition-colors hover:text-accent"
						>
							{SITE.email}
						</a>
                        <a 
                            href={SITE.social.instagram}
                            className="block transition-colors hover:text-accent"
                            target="_blank" rel="noopener noreferrer">
                            {instagramHandle}
                        </a>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center gap-2 border-t border-border py-5 text-center text-xs uppercase tracking-wide text-text-secondary sm:flex-row sm:justify-between">
				<span>© {year} {SITE.name}. Sva prava zadržana.</span>
				<div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
					<Link
						href="/politika-privatnosti"
						className="transition-colors hover:text-accent"
					>
						Politika privatnosti
					</Link>
					<CookieSettingsButton className="uppercase tracking-wide transition-colors hover:text-accent" />
				</div>
			</div>
		</footer>
	);
}
