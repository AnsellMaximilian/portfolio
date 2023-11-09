import { fetchHackathons } from "@/sanity/services";
import Link from "next/link";
import { AiTwotoneTrophy as Trophy } from "react-icons/ai";

export default async function HackathonList() {
  const hackathons = await fetchHackathons();

  return (
    <div className="grid grid-cols-12 gap-4">
      {hackathons.map((hack) => (
        <div
          key={hack._id}
          className="p-4 py-6 border-zinc-200 rounded-md border shadow-md col-span-12 sm:col-span-6 lg:col-span-4"
        >
          <div className="flex gap-2 items-start">
            <Trophy className="text-[4rem] text-yellow-500" />
            <div>
              <h3 className="text-2xl font-bold">{hack.name}</h3>
              <p className="font-semibold text-lg">{hack.placement}</p>
            </div>
          </div>
          <p className="font-light mt-4">{hack.description}</p>
          <p className="mt-4">
            <span className="font-bold">Project:</span>{" "}
            <Link
              href={`/projects/${hack.project.slug}`}
              className="hover:underline"
            >
              {hack.project.name}
            </Link>
          </p>
          <div className="mt-8 flex gap-2 justify-end ">
            <Link
              href={`/projects/${hack.project.slug}`}
              className="border-[#121212] border px-4 py-2 hover:bg-zinc-100"
            >
              Project
            </Link>
            <Link
              target="_blank"
              href={hack.announcementUrl || ""}
              className="bg-[#121212] hover:bg-[#2a2a2a] px-4 py-2 text-white"
            >
              Announcement
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
