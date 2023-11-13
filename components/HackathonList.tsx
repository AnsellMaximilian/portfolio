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
          className="p-4 py-6 border-zinc-200 rounded-md border shadow-md col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col gap-8"
        >
          <div>
            <div className="flex gap-2 items-start">
              <div>
                <Trophy className="text-5xl lg:text-[4rem] text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold">{hack.name}</h3>
                <p className="font-semibold lg:text-lg">{hack.placement}</p>
              </div>
            </div>
            <p className="mt-4">
              <span className="font-bold">Project:</span>{" "}
              <Link
                scroll={false}
                href={`/projects/${hack.project.slug}`}
                className="hover:underline"
              >
                {hack.project.name}
              </Link>
            </p>
          </div>
          <div className="flex gap-2 justify-end mt-auto">
            <Link
              scroll={false}
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
