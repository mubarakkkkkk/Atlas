import Image from "next/image";
import Link from "next/link";
import { WiStars } from "react-icons/wi";
import { ArrowRight, PlayIcon } from "lucide-react";

const HomePage = () => {
  return (
    <div className="bg-[#0d0f1a] w-screen">
      <section>
        <nav className="flex justify-between items-center w-fill mr-12">
          <div>
            <Image src="/images/noBg.png" alt="icon" width={200} height={80} />
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <Link href="#"> Features</Link>
              </li>
              <li>
                <Link href="#"> How it works</Link>
              </li>
              <li>
                <Link href="#"> Contacts</Link>
              </li>
              <li>
                <Link href="#">Supports</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <button>Log in</button>
            <button className="bg-primary text-white p-4 rounded-4xl">
              Get started
            </button>
          </div>
        </nav>
      </section>
      <section className="flex items-start gap-12 px-12 pt-8">
        <div className="flex-1 pt-16">
          <div className="flex border border-white/10 px-2 rounded-4xl h-fit w-fit">
            <WiStars className="text-primary" size={30} />
            <p>Your Ai Assistant. Your Productivity Engine</p>
          </div>
          <div>
            <h1 className="text-white text-7xl font-semibold">
              Plan.Focus.
              <br />
              <span className="text-primary">Get Done More</span>
            </h1>
            <p>
              Atlas is your Ai Powered Assistant and productivity hub that help
              you plan your day, manage tasks, track progress, and find the
              right oportunities. All in one
            </p>
            <div className="flex gap-4">
              <button className="flex gap-3 p-2 bg-primary text-white rounded-xl align-middle items-center">
                Get Started For Free
                <ArrowRight size={20} />
              </button>
              <button className="flex gap-3 p-2 border border-white/8 rounded-xl align-middle items-center">
                See How It Works
                <PlayIcon size={20} />
              </button>
            </div>
          </div>
        </div>
        <div
          className="rounded-2xl flex-1"
          style={{ filter: "drop-shadow(0 0 40px rgba(37, 99, 235, 0.8))" }}
        >
          <Image
            src="/images/overview.png"
            alt="overview"
            width={900}
            height={600}
            className="border border-white/10 rounded-2xl object-contain object-top"
            style={{  width: "100%" }}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
