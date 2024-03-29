import Image from "/images/logo.svg";

export function Header() {
  return (
    <header className="px-20 py-8 flex items-center justify-between text-white">
      <img src={Image} alt="" />
      <ul className="flex gap-6 [&_li]:cursor-pointer">
        <li>About</li>
        <li>Discover</li>
        <li>Get Started</li>
      </ul>
    </header>
  );
}
