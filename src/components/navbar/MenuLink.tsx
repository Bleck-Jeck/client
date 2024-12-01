// components/MenuLink.jsx
import Link from "next/link";

const MenuLink = ({ href, title, className }: any) => (
  <li>
    <Link href={href} className={className}>
      {title}
    </Link>
  </li>
);

export default MenuLink;
