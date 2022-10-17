import Link from "next/link";

export default function NavItem(props) {
  return (
    <Link href={props.href}>
      <a className="nav__link">{props.text}</a>
    </Link>
  );
}
