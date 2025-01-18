import React, { useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { motion, AnimatePresence } from "framer-motion";

import { navbar_details, navlinks } from "../../data/data";
import Divider from "../main/Divider";
import HamburgerButton from "./HamburgerButton";

export const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const variants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 108 },
  };

  function scrollToElement(
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    id: string,
    padding: number = 0
  ) {
    event.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY - padding;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setIsOpened(false); // Close the menu after clicking a link
    }
  }

  return (
    <div className="text-sm font-montserrat font-black w-[70vw] m-auto">
      {/* Top Navbar */}
      <div className="flex justify-between items-center z-50 relative py-6 bg-white">
        {/* Navigation Links */}
        <div className="md:flex gap-7 hidden md:w-[45%]">
          {navlinks &&
            navlinks.map((navlink) => (
              <div key={navlink.elementId}>
                <div
                  className="text-black no-underline"
                  onClick={(e) =>
                    scrollToElement(e, `${navlink.elementId}`, 80)
                  }
                >
                  {navlink.name}
                </div>
              </div>
            ))}
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center gap-3 md:w-[10%]">
          <div>
            <img
              loading="lazy"
              src={navbar_details.logo}
              alt="logo"
              className="w-10"
            />
          </div>
          <div>{navbar_details.name}</div>
        </div>

        {/* Social Media Links */}
        <div className="hidden md:flex md:justify-end md:w-[45%]">
          <SocialMediaLinks />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <HamburgerButton isOpen={isOpened} toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Divider for Mobile */}
      <div className="md:hidden">
        <Divider />
      </div>

      {/* Hamburger Menu Content */}
      
        {isOpened && (
          <div className="bg-white z-50 flex justify-center w-full">
            <motion.div
              key={"hamburger"}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
              transition={{ duration: 0.5 }}
              className="p-4 md:hidden absolute top-0 left-0 bg-white w-full border-b-black border"
            >
              <div className="flex flex-col gap-7 md:gap-4 w-[70vw] m-auto">
                {navlinks &&
                  navlinks.map((navlink) => (
                    <div key={navlink.elementId}>
                      <div
                        className="text-black no-underline cursor-pointer"
                        onClick={(e) =>
                          scrollToElement(e, `${navlink.elementId}`, 80)
                        }
                      >
                        {navlink.name}
                      </div>
                    </div>
                  ))}
                <SocialMediaLinks />
              </div>
            </motion.div>
          </div>
        )}
      
    </div>
  );
};
