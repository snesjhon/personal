import Image from "next/image";
import avatar from "../public/images/myavatar.jpg";

export function About() {
  return (
    <div className="px-20 py-10">
      <div className="grid grid-cols-2 gap-32 py-10">
        <div
          className="
          relative mr-10 before:absolute before:-top-4 before:-right-12 before:z-0
        before:h-[110%] before:w-full before:rounded before:border-2 before:border-black
        after:absolute after:top-52 after:-right-24 after:p-2 after:z-10 after:bg-white after:content-['About\00a0Me']"
        >
          <Image
            className="relative z-10 h-auto max-w-full rounded grayscale border border-gray"
            src={avatar}
            alt="my avatar"
          />
        </div>
        <div>
          <div className="pt-14">
            <h2 className="pb-4 text-4xl">Software Engineer</h2>
            <h2 className="text-4xl before:content-['+'] before:absolute before:-ml-8">Music Enthusiast</h2>
            <p className="pt-6">
              I specialize in creating and maintaining complex UI
              infrastructure. Oh yea, I also collect vinyls and love learning
              new things on youtube at 4am.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
