import React from "react";
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaTwitter as Twitter,
  FaDev as DevTo,
  FaFilePdf as Pdf,
} from "react-icons/fa";
import { SiHashnode as Hashnode } from "react-icons/si";
import { FiExternalLink as ExternalLink } from "react-icons/fi";
import { MdEmail as MailIcon } from "react-icons/md";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className="grid grid-cols-4 gap-4 text-black max-w-md w-full">
      <div className="col-span-4 bg-gradient-to-br from-white via-[#f8efd4] to-[#d4fff6] h-10 flex items-center justify-center">
        <p className="font-semibold">I am available for work.</p>
      </div>

      <div className="col-span-2 bg-white h-10 hover:bg-gray-200">
        <a
          className="flex gap-4 items-center w-full h-full p-2"
          href="https://www.linkedin.com/in/ansell-maximilian/"
          target="_blank"
        >
          <Linkedin size={24} />
          <span className="text-sm md:text-base">Linkedin</span>
          <ExternalLink size={10} className="ml-auto mb-auto" />
        </a>
      </div>
      <div className="col-span-2 bg-neutral-600 h-10"></div>
      <div className="col-span-2 bg-neutral-600 h-10"></div>
      <div className="col-span-2 bg-white h-10 hover:bg-gray-200">
        <a
          className="flex gap-4 items-center w-full h-full p-2"
          href="https://github.com/AnsellMaximilian"
          target="_blank"
        >
          <Github size={24} />
          <span className="text-sm md:text-base">Github</span>
          <ExternalLink size={10} className="ml-auto mb-auto" />
        </a>
      </div>
      <div className="col-span-2 bg-white h-10 hover:bg-gray-200">
        <a
          className="flex gap-4 items-center w-full h-full p-2"
          href="https://hashnode.com/@ansellmax"
          target="_blank"
        >
          <Hashnode size={24} />
          <span className="text-sm md:text-base">Hashnode</span>
          <ExternalLink size={10} className="ml-auto mb-auto" />
        </a>
      </div>
      <div className="col-span-2 bg-neutral-600 h-10"></div>
      <div className="col-span-2 bg-neutral-600 h-10"></div>
      <div className="col-span-2 bg-white h-10 hover:bg-gray-200">
        <a
          className="flex gap-4 items-center w-full h-full p-2"
          href="https://twitter.com/AnsellMax"
          target="_blank"
        >
          <Twitter size={24} />
          <span className="text-sm md:text-base">Twitter</span>
          <ExternalLink size={10} className="ml-auto mb-auto" />
        </a>
      </div>
      <div className="col-span-2 bg-white h-10 hover:bg-gray-200">
        <a
          className="flex gap-4 items-center w-full h-full p-2"
          href="https://dev.to/ansellmaximilian"
          target="_blank"
        >
          <DevTo size={24} />
          <span className="text-sm md:text-base">Dev.to</span>
          <ExternalLink size={10} className="ml-auto mb-auto" />
        </a>
      </div>
      <div className="col-span-2 bg-neutral-600 h-10"></div>
      <div className="col-span-2 bg-neutral-600 h-10"></div>
      <div className="col-span-2 bg-white h-10 hover:bg-gray-200">
        <Link
          className="flex gap-4 items-center w-full h-full p-2"
          href="/Ansell_Maximilian_Resume.pdf"
          target="_blank"
        >
          <Pdf size={24} />
          <span className="text-sm md:text-base">Resume</span>
          <ExternalLink size={10} className="ml-auto mb-auto" />
        </Link>
      </div>
      <div className="col-span-4 bg-white h-10 hover:bg-gray-200">
        <div className="flex gap-4 items-center w-full h-full p-2">
          <MailIcon size={24} />
          <span className="text-sm md:text-base">
            ansellmaximilian@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}
