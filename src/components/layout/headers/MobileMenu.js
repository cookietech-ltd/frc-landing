"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/assets/img/logo.png";
import { useWishlistContext } from "@/providers/WshlistContext";
import { useCartContext } from "@/providers/CartContext";
import countDataLength from "@/libs/countDataLength";
import modifyNumber from "@/libs/modifyNumber";
const MobileMenu = () => {
  const { wishlistProducts } = useWishlistContext();
  const { cartProducts } = useCartContext();
  const totalCartProduct = countDataLength(cartProducts);
  const totalWishlistProduct = countDataLength(wishlistProducts);
  // Simplified navigation - no accordions
  const navItems = [
    {
      name: "Home",
      path: "/",
      accordion: null,
    },
    {
      name: "Technology",
      path: "/technology",
      accordion: null,
    },
    {
      name: "Services",
      path: "/services",
      accordion: null,
    },
    {
      name: "Store",
      path: "/shop-grid",
      accordion: null,
    },
    {
      name: "Contact",
      path: "/contact",
      accordion: null,
    },
  ];
  return (
    <div
      id="ltn__utilize-mobile-menu"
      className="ltn__utilize ltn__utilize-mobile-menu"
    >
      <div className="ltn__utilize-menu-inner ltn__scrollbar">
        <div className="ltn__utilize-menu-head">
          <div className="site-logo">
            <Link href="/">
              <Image src={logoImage} alt="Logo" />
            </Link>
          </div>
          <button className="ltn__utilize-close">×</button>
        </div>
        <div className="ltn__utilize-menu-search-form">
          <form action="#">
            <input type="text" placeholder="Search..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="ltn__utilize-menu">
          <ul>
            {navItems?.map(({ name, path, accordionItems }, idx) => (
              <li key={idx}>
                <Link href={path}>{name}</Link>
                {accordionItems ? (
                  <ul className="sub-menu">
                    {accordionItems?.map(
                      ({ name: name1, path: path1, label }, idx1) => (
                        <li key={idx1}>
                          <Link href={path1}>
                            {name1}{" "}
                            {label ? (
                              <span className="menu-item-badge">{label}</span>
                            ) : (
                              ""
                            )}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="ltn__social-media-2">
          <ul>
            <li>
              <Link href="https://www.facebook.com" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com" title="Twitter">
                <i className="fab fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com" title="Linkedin">
                <i className="fab fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com" title="Instagram">
                <i className="fab fa-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
