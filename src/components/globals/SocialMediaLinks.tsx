import React from "react";
import { socials } from "../../data/data";

const SocialMediaLinks = () => {
  return (
    <div className="flex md:gap-9 justify-between w-full md:w-fit ">
      {socials &&
        socials.map((social) => (
          <div key={social.name}>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <img
                src={social.icon}
                alt={social.name}
                className="aspect-square w-7 grayscale hover:grayscale-0 transition-all"
              />
            </a>
          </div>
        ))}
    </div>
  );
};

export default SocialMediaLinks;
