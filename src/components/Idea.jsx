import React from "react";
import idea from "../assets/The big idea.png";
import woman from "../assets/7450159 1.png";
import criteria from "../assets/8046554 1.png";
import questions from "../assets/cwok_casual_21 1.png";
import trophy from "../assets/9486889 1.png";
import rewards from "../assets/Rewards.svg";
import liberty from "../assets/Liberty company logo white.svg";
import liberty2 from "../assets/Liberty company logo white colour2.svg";
import visual from "../assets/Vizual Plus.svg";
import whisper from "../assets/wisper logo white.svg";
import winwise from "../assets/Winwise logo White colour 1.svg";
import unlock from "../assets/08 1.png";
import vector from "../assets/Vector.svg";
import list from "../assets/list terms.svg";
import star from "../assets/star pu.svg";
import starB from "../assets/starB.svg";
import starp from "../assets/star.svg";

export default function Idea() {
  return (
    <>
      <section className="my-10 flex flex-col md:flex-row items-center justify-between">
        <img src={star} alt="" />
        <div>
          <img src={idea} alt="" />
        </div>
        <div className="text-white text-center md:text-start">
          <h2 className="text-2xl md:text-4xl font-black">
            Introduction to getlinked <br />
            <span className="text-[#d434fe]"> tech hackathon 1.0</span>
          </h2>
          <p className="w-96 md:w-[35rem] my-5">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </section>
      <hr />

      <section className="my-10 text-white text-center md:text-start flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="relative">
          <img src={starB} alt="" />
          <h2 className="text-4xl font-bold my-5">
            Rules and <br /> <span className="text-[#d434fe]">Guideline</span>
          </h2>
          <p className="w-96 md:w-[35rem]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
          <img src={starp} alt="" className="absolute right-20" />
        </div>
        <div>
          <img src={woman} alt="" />
        </div>
      </section>
      <hr />

      <section className="my-10 text-white flex flex-col md:flex-row items-center justify-between text-center md:text-start">
        <div>
          <img src={criteria} alt="" />
        </div>
        <div>
          <h2 className="text-4xl font-bold my-5">
            Judging Criteria <br />
            <span className="text-[#d434fe]">Key attributes</span>
          </h2>
          <div>
            <p className="w-96 md:w-[35rem] my-2 text-[#d434fe]">
              Innovation and Creativity:
              <span className="ml-1 text-white">
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
            </p>
            <p className="w-96 md:w-[35rem] my-2 text-[#d434fe]">
              Functionality:
              <span className="ml-1 text-white">
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
            </p>
            <p className="w-96 md:w-[35rem] my-2 text-[#d434fe]">
              Impact and Relevance:
              <span className="ml-1 text-white">
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
            </p>
            <p className="w-96 md:w-[35rem] my-2 text-[#d434fe]">
              Technical Complexity:
              <span className="ml-1 text-white">
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
            </p>
            <p className="w-96 md:w-[35rem] my-2 text-[#d434fe]">
              Adherence to Hackathon Rules:
              <span className="ml-1 text-white">
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
            </p>
          </div>
          <button className="my-5 flex items-center justify-center mx-auto md:items-start bg-gradient-to-r from-[#d434fe] to-[#903aff] p-2 px-10 rounded-sm">
            Read More
          </button>
        </div>
      </section>
      <hr />

      <section className="my-10 flex flex-col-reverse md:flex-row justify-between text-white text-start">
        <div>
          <h2 className="text-4xl font-extrabold my-10">
            Frequently Asked <br />
            <span className="text-[#d434fe]">Question</span>
          </h2>
          <p className="w-[26rem]">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div className="my-10">
            <div className="flex justify-between items-center gap-10">
              <p className="my-5">
                Can I work on a project I started before the hackathon?
              </p>
              <span className="text-[#d434fe]"> +</span>
            </div>
            <div className="w-full h-[1px] bg-[#d434fe]"></div>
            <div className="flex justify-between items-center gap-10">
              <p className="my-5">
                What happens if I need help during the hackathon?
              </p>
              <span className="text-[#d434fe]"> +</span>
            </div>
            <div className="w-full h-[1px] bg-[#d434fe]"></div>
            <div className="flex justify-between items-center gap-10">
              <p className="my-5">
                What happens if I don't have an idea for a project?
              </p>
              <span className="text-[#d434fe]"> +</span>
            </div>
            <div className="w-full h-[1px] bg-[#d434fe]"></div>
            <div className="flex justify-between items-center gap-10">
              <p className="my-5">
                Can I join a team or do I have to come with one?
              </p>
              <span className="text-[#d434fe]"> +</span>
            </div>
            <div className="w-full h-[1px] bg-[#d434fe]"></div>
            <div className="flex justify-between items-center gap-10">
              <p className="my-5">What happens after the hackathon ends</p>
              <span className="text-[#d434fe]"> +</span>
            </div>
            <div className="w-full h-[1px] bg-[#d434fe]"></div>
            <div className="flex justify-between items-center gap-10">
              <p className="my-5">
                Can I work on a project I started before the hackathon?
              </p>
              <span className="text-[#d434fe]"> +</span>
            </div>
            <div className="w-full h-[1px] bg-[#d434fe]"></div>
          </div>
        </div>
        <div>
          <img src={questions} alt="" />
        </div>
      </section>
      <hr />

      <section className="text-white my-10 md:hidden">
        <div className="w-96 mx-auto">
          <h2 className="text-2xl font-bold my-2">Timeline</h2>
          <p className="w-96">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="my-5">
          <div className="flex items-start gap-4 my-5">
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-1 bg-[#d434fe]"></div>
              <p className="bg-[#d434fe] rounded-full aspect-square w-8 h-8 pt-1">
                1
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#d434fe] text-start">
                Hackathon Announcement
              </h3>
              <p className="w-72 text-start text-xs">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
              <p className="text-sm text-[#d434fe] my-2 font-semibold text-start">
                November 18, 2023
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 my-5">
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-1 bg-[#d434fe]"></div>
              <p className="bg-[#d434fe] rounded-full aspect-square w-8 h-8 pt-1">
                2
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#d434fe] text-start">
                Teams Registration begins
              </h3>
              <p className="w-72 text-start text-xs">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
              <p className="text-sm text-[#d434fe] my-2 font-semibold text-start">
                November 18, 2023
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 my-5">
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-1 bg-[#d434fe]"></div>
              <p className="bg-[#d434fe] rounded-full aspect-square w-8 h-8 pt-1">
                3
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#d434fe] text-start">
                Teams Registration ends
              </h3>
              <p className="w-64 text-start text-xs">
                Interested Participants are no longer Allowed to register
              </p>
              <p className="text-sm text-[#d434fe] mt-6 font-semibold text-start">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 my-5">
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-1 bg-[#d434fe]"></div>
              <p className="bg-[#d434fe] rounded-full aspect-square w-8 h-8 pt-1">
                4
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#d434fe] text-start">
                Announcement of the accepted teams and ideas
              </h3>
              <p className="w-80 text-start text-xs">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
              <p className="text-sm text-[#d434fe] mt-2 font-semibold text-start">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 my-5">
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-1 bg-[#d434fe]"></div>
              <p className="bg-[#d434fe] rounded-full aspect-square w-8 h-8 pt-1">
                5
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#d434fe] text-start">
                Getlinked Hackathon 1.0 Offically Begins
              </h3>
              <p className="w-64 text-start text-xs">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
              <p className="text-sm text-[#d434fe] mt-2 font-semibold text-start">
                November 18, 2023
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 my-5">
            <div className="flex flex-col items-center gap-2">
              <div className="h-16 w-1 bg-[#d434fe]"></div>
              <p className="bg-[#d434fe] rounded-full aspect-square w-8 h-8 pt-1">
                6
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#d434fe] text-start">
                Demo Day
              </h3>
              <p className="w-72 text-start text-xs">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
              <p className="text-sm text-[#d434fe] mt-2 font-semibold text-start">
                November 18, 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-white my-10 hidden md:block">
        <div className="w-96 mx-auto">
          <h2 className="text-4xl font-bold my-2">Timeline</h2>
          <p className="w-[26rem]">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="flex mt-10 justify-around">
          <div className="text-end">
            <div className="mt-24">
              <h3 className="text-2xl font-bold text-[#d434fe]">
                Hackathon Announcement
              </h3>
              <p className="w-[31rem]">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <p className="text-xl text-[#d434fe] font-semibold mt-16">
              November 18, 2023
            </p>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-[#d434fe]">
                Teams Registration ends
              </h3>
              <p className="w-[20rem] m-auto mr-0">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <p className="text-xl text-[#d434fe] font-semibold mt-24">
              November 18, 2023
            </p>
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-[#d434fe]">
                Getlinked Hackathon 1.0 Officially Begins
              </h3>
              <p className="w-[31rem]">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <p className="text-xl text-[#d434fe] font-semibold mt-20">
              November 18, 2023
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-20 w-1 bg-[#d434fe]"></div>
            <p className="bg-[#d434fe] rounded-full aspect-square w-14 h-14 pt-4">
              1
            </p>
            <div className="h-16 w-1 bg-[#d434fe]"></div>
            <p className="bg-[#d434fe] rounded-full aspect-square w-14 h-14 pt-4">
              2
            </p>
            <div className="h-16 w-1 bg-[#d434fe]"></div>
            <p className="bg-[#d434fe] rounded-full aspect-square w-14 h-14 pt-4">
              3
            </p>
            <div className="h-16 w-1 bg-[#d434fe]"></div>
            <p className="bg-[#d434fe] rounded-full aspect-square w-14 h-14 pt-4">
              4
            </p>
            <div className="h-16 w-1 bg-[#d434fe]"></div>
            <p className="bg-[#d434fe] rounded-full aspect-square w-14 h-14 pt-4">
              5
            </p>
            <div className="h-16 w-1 bg-[#d434fe]"></div>
            <p className="bg-[#d434fe] rounded-full aspect-square w-14 h-14 pt-4">
              6
            </p>
          </div>
          <div className="text-start">
            <p className="text-xl text-[#d434fe] font-semibold mt-24">
              November 18, 2023
            </p>
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-[#d434fe]">
                Teams Registration begins
              </h3>
              <p className="w-[31rem]">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <p className="text-xl text-[#d434fe] font-semibold mt-20">
              November 18, 2023
            </p>
            <div className="mt-24">
              <h3 className="text-2xl font-bold text-[#d434fe] w-[30rem]">
                Announcement of the accepted teams and ideas
              </h3>
              <p className="w-[31rem]">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
            <p className="text-xl text-[#d434fe] font-semibold mt-12">
              November 18, 2023
            </p>
            <div className="mt-24">
              <h3 className="text-2xl font-bold text-[#d434fe]">Demo Day </h3>
              <p className="w-[31rem] mt-10">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section className="my-10 text-white text-center md:text-start flex flex-col">
        <div className="my-10 lg:self-end">
          <h2 className="text-2xl font-bold my-1">
            Prizes and <br />
            <span className="text-[#d434fe]">Rewards</span>
          </h2>
          <p className="my-5 md:w-96">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className="flex justify-between flex-col md:flex-row items-center gap-4">
          <img src={trophy} alt="" className="xl:w-full w-72 lg:w-1/2" />
          <img src={rewards} alt="" className="xl:w-full w-72 lg:w-1/2" />
        </div>
      </section>
      <hr />

      <section className="text-white my-10">
        <div className="text-center w-96 md:w-[32rem] mx-auto">
          <h2 className="text-2xl font-bold my-4">Partners and Sponsors</h2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="border-2 border-[#d434fe] p-20 px-0 flex justify-center items-center my-5">
          <div>
            <div className="flex items-center gap-4">
              <img src={liberty2} alt="" className="w-28" />
              <div className="h-20 w-1 bg-[#d434fe]"></div>
              <img src={liberty} alt="" className="w-28" />
              <div className="h-20 w-1 bg-[#d434fe]"></div>
              <img src={winwise} alt="" className="w-28" />
            </div>
            <div className="flex items-center justify-center gap-16 my-5">
              <div className="h-1 w-20 bg-[#d434fe]"></div>
              <div className="h-1 w-20 bg-[#d434fe]"></div>
              <div className="h-1 w-20 bg-[#d434fe]"></div>
            </div>
            <div className="flex items-center gap-8 mt-1">
              <img src={whisper} alt="" className="w-28" />
              <div className="h-20 w-1 bg-[#d434fe]"></div>
              <p>Paybox</p>
              <div className="h-20 w-1 bg-[#d434fe]"></div>
              <img src={visual} alt="" className="w-28" />
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section className="my-10 text-white text-center md:text-start flex flex-col gap-4 md:flex-row items-center justify-between">
        <div>
          <div className="my-10">
            <h2 className="text-2xl font-bold my-5">
              Privacy Policy and <br />
              <span className="text-[#d434fe]">Terms</span>
            </h2>
            <p>Last updated on September 12, 2023</p>
            <p className="w-96 md:w-[31rem] my-5">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="border-2 border-[#d434fe] p-8 md:p-16 w-96 md:w-[35rem]">
            <p className="my-5">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div>
              <h3 className="text-[#d434fe] my-5 font-semibold">
                Licensing Policy
              </h3>
              <p className="my-5">Here are terms of our Standard License:</p>
              <div>
                <div className="flex items-start gap-2 my-8">
                  <img src={list} alt="" />
                  <p>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <img src={list} alt="" />
                  <p>
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url('${vector}')` }}
          className="bg-no-repeat bg-cover"
        >
          <img src={unlock} alt="" className="md:w-full w-64" />
        </div>
      </section>
      <hr />
    </>
  );
}
