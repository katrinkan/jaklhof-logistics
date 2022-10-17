import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import jaklhofLogo from "../public/jaklhof-logo.png";
import jaklhofSonne from "../public/jaklhof-sonne.png";
import NavItem from "./NavItem";

const MenuList = [
  { text: "To Do", href: "/todo" },
  { text: "Lagerbestand", href: "/lagerbestand" },
  { text: "Großbestellung", href: "/grossbestellung" },
];

export default function Navbar() {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav>
        <Link href={"/dashboard"}>
          <a>
            <Image src={jaklhofLogo} width={90} height={40} />
          </a>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className="nav__menuBar">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menuList`}>
          {MenuList.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          <button className="logOutBtn">Log out</button>
        </div>
      </nav>
    </header>
  );
}
