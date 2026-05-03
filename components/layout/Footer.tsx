import Image from "next/image";
import Link from "next/link";

const navLinks = [
	{ href: "/", label: "pocetna" },
	{ href: "/o-nama", label: "o nama" },
	{ href: "/usluge", label: "usluge" },
	{ href: "/blog", label: "blog" },
	{ href: "/kontakt", label: "kontakt" },
];

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-16 border-t border-border bg-bg-secondary/80 px-[5vw]">
			<div className="py-12 grid gap-10 md:grid-cols-3">
				<div className="flex items-center justify-center md:justify-start">
					<Link href="/" className="inline-flex items-center">
						<Image src="/logo.png" alt="Spartans Gym logo" width={110} height={110} />
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
                            href="tel:+381601234567" 
                            className="block transition-colors hover:text-accent">
							+381 60 123 4567
						</a>
						<a
							href="mailto:info@spartansgym.rs"
							className="block transition-colors hover:text-accent"
						>
							info@spartansgym.rs
						</a>
                        <a 
                            href="https://instagram.com/dejan_mladenovic_condition"
                            className="block transition-colors hover:text-accent"
                            target="_blank" rel="noopener noreferrer">
                            @dejan_mladenovic_condition
                        </a>
					</div>
				</div>
			</div>

			<div className="border-t border-border py-5 text-center text-xs uppercase tracking-wide text-text-secondary">
				© {year} Spartans Gym. Sva prava zadrzana.
			</div>
		</footer>
	);
}
