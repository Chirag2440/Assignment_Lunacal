import React from "react";
import { Button } from "../../../../components/ui/button";

const tabs = [
  {
    id: "about-me",
    label: "About Me",
    content: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
  },
  {
    id: "experiences",
    label: "Experiences",
    content: "I have over 10 years of experience in sales and customer relations. Throughout my career, I've worked with Fortune 500 companies and helped them achieve their business goals.\n\nMy expertise includes strategic planning, team leadership, and building long-lasting client relationships. I'm passionate about helping businesses grow and succeed in today's competitive market.",
  },
  {
    id: "recommended",
    label: "Recommended",
    content: "Based on your interests and profile, I recommend exploring our latest enterprise solutions. These tools have helped companies increase their productivity by 40% on average.\n\nI'd also suggest checking out our upcoming webinar series on digital transformation and our new customer success program that's been getting great feedback from clients.",
  },
];

export const AboutMeSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState("about-me");

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content || "";

  return (
    <section className="w-full bg-[#363c43] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_#00000066] p-4 lg:p-6">
      {/* Tabs Navigation */}
      <nav className="inline-flex items-center gap-1.5 relative mb-6 bg-[#171717] rounded-[23px] p-1.5 w-full lg:w-auto overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <div key={tab.id} className="relative">
              {isActive && (
                <div className="absolute inset-0 bg-[#28292f] rounded-[16px] shadow-[13.49px_16.87px_67.47px_8.43px_#0a0a0a,-8.43px_-16.87px_50.6px_-16.87px_#485b71]" />
              )}

              <Button
                variant="ghost"
                onClick={() => setActiveTab(tab.id)}
                className="flex w-full lg:w-[195px] h-auto items-center justify-center gap-2.5 px-4 lg:px-6 py-3.5 relative rounded-2xl overflow-hidden hover:bg-transparent transition-colors whitespace-nowrap"
              >
                <span
                  className={`relative flex items-center justify-center w-fit font-['Poppins'] font-medium text-lg text-center tracking-[0] leading-[16.1px] whitespace-nowrap ${
                    isActive ? "text-white" : "text-[#a3adb2]"
                  }`}
                >
                  {tab.label}
                </span>
              </Button>
            </div>
          );
        })}
      </nav>

      {/* Tab Content */}
      <div className="px-2">
        <div className="max-h-[175px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#4a4e54] scrollbar-track-transparent pr-2">
          <p className="font-['Plus_Jakarta_Sans'] font-normal text-[#969696] text-xl leading-[25.2px] whitespace-pre-line">
            {activeContent}
          </p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#888989] via-[#4a4e54] to-[#888989] rounded-full mt-6 shadow-[0px_4px_4px_#00000054]" />
    </section>
  );
};
