import React, { ComponentType, ReactNode } from "react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
  FaDev as DevTo,
  FaFilePdf as Pdf,
} from "react-icons/fa";
import { SiHashnode as Hashnode } from "react-icons/si";
import { FiExternalLink as ExternalLink } from "react-icons/fi";
import { SiDevpost as Devpost } from "react-icons/si";
import { MdEmail as MailIcon } from "react-icons/md";

import { twMerge as cn } from "tailwind-merge";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Social from "./Social";
import SectionHeader from "./SectionHeader";

export default function Socials() {
  return (
    <div className="bg-[#121212] text-white py-16">
      <div className="container p-4 max-w-xl mx-auto">
        <SectionHeader
          title="Contact Me"
          subtitle="Blogs, Socials, and Portfolios"
        />
        <div className="grid grid-cols-12 gap-4">
          <Social
            href="https://ansellmax.hashnode.dev/"
            icon={
              <Hashnode className="text-white text-lg md:text-2xl group-hover:text-[#2962FF] transition-all duration-200" />
            }
            text="Hashnode"
            className="col-span-6 md:col-span-8 row-span-2"
          />
          <Social
            side="RIGHT"
            href="https://dev.to/ansellmaximilian"
            icon={
              <DevTo className="text-white text-lg md:text-2xl group-hover:text-black transition-all duration-200" />
            }
            text="Dev.to"
            className="col-span-6 md:col-span-4"
          />
          <Social
            side="RIGHT"
            href="https://devpost.com/AnsellMaximilian"
            icon={
              <Devpost className="text-white text-lg md:text-2xl group-hover:text-[#003E54] transition-all duration-200" />
            }
            text="Devpost"
            className="col-span-6 md:col-span-4"
          />
          <Social
            href="https://www.linkedin.com/in/ansell-maximilian/"
            icon={
              <Linkedin className="text-white text-lg md:text-2xl group-hover:text-[#0A66C2] transition-all duration-200" />
            }
            text="LinkedIn"
            className="col-span-6"
          />
          <Social
            side="RIGHT"
            href="https://github.com/AnsellMaximilian"
            icon={
              <Github className="text-white text-lg md:text-2xl group-hover:text-black transition-all duration-200" />
            }
            text="Github"
            className="col-span-6"
          />
          <Social
            href="https://twitter.com/AnsellMax"
            icon={
              <Twitter className="text-white text-lg md:text-2xl group-hover:text-[#1D9BF0] transition-all duration-200" />
            }
            text="Twitter"
            className="col-span-6 md:col-span-4"
          />
          <Social
            href="/Ansell_Maximilian_Resume.pdf"
            icon={
              <Pdf className="text-white text-lg md:text-2xl group-hover:text-[#1D9BF0] transition-all duration-200" />
            }
            text="Resume"
            className="col-span-6 md:col-span-8"
          />
          <Social
            href="mailto:ansellmaximilian@gmail.com"
            icon={
              <MailIcon className="text-white text-lg md:text-2xl group-hover:text-black transition-all duration-200" />
            }
            text="ansellmaximilian@gmail.com"
            className="col-span-12"
          />
        </div>
      </div>
    </div>
  );
}
