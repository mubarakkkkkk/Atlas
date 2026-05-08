import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsStars } from "react-icons/bs";
import { ArrowRight, PlayIcon } from "lucide-react";

const HomePage = () => {
  return (
    <div className="m-6">
      <div className="bg-background-dark h-screen w-screen">
        <nav className="flex justify-between items-center ">
          <div>
            <Image src="/images/noBg.png" alt="Logo" width={200} height={80} />
          </div>
          <div className="flex justify-center items-center gap-8">
            <ul className="flex gap-6">
              <li>
                <h1>
                  <Link href="/">Features</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link href="/">How It Works</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link href="/">Contact</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link href="/">Support</Link>
                </h1>
              </li>
            </ul>
          </div>
          <div className="flex gap-4 h-fit">
            <button className="text-white ">Log In</button>
            <button className="px-2 py-1 bg-primary text-white rounded-full">
              Get Started
            </button>
          </div>
        </nav>
        <div className="flex items-center gap-2 border-[0.5px] border-white/10 w-fit rounded-xl p-2">
          <span>
            <BsStars className="text-primary" />
          </span>
          <span>
            <p>Your Assistant. Your Productivity Engine.</p>
          </span>
        </div>
        <div>
          <h1 className="text-7xl font-black">
            Plan.Focus. <br />
            <span className="text-primary">
              Get more done
            </span>
          </h1>
          <div>
            <p>
              Atlas is a Ai powered and productivity hub that helps you plan your day, manage tasks, track progress, and find the right opportuninties. all in one place
            </p>
          </div>
        </div>
        <div>
          <button className="flex">
            Get started for free 
            <ArrowRight />
          </button>
          <button className="flex">
            See hoe it works
            <PlayIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
