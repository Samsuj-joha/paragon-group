import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between pb-5">
      <div>
        <Image
          src="/paragongroup-logo.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/components/home">Home</Link>
            </li>
            <li>
              <Link href="/components/about">About</Link>
            </li>
            <li>
              <Link href="/components/contact">Contact</Link>
            </li>
            <li>
              <Link href="/components/career">Career</Link>
            </li>
            <li>
              <Link href="/components/news">News</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
