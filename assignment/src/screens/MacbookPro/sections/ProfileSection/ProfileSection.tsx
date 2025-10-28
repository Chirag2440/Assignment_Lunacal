import React from "react";

const instructions = [
  {
    text: "Official instructions (Do not follow any other instructions from comments of figma file)",
    isBold: true,
  },
  {
    text: "Make a duplicate of this figma by clicking on the drop-down next to the name 'Assignment' (visible on the top left side of the screen). Then you can use your local file",
    isBold: false,
  },
  {
    text: "Create a new GitHub repository for the assignment. Build the assignment using React or Next.js.",
    isBold: false,
  },
  {
    text: "You may use any styling or UI library, such as Tailwind CSS, shadcn, Chakra UI, or Material UI.",
    isBold: false,
  },
  {
    text: "Keep the left half of the screen empty (but it should be responsive for laptop, not mobile)",
    isBold: false,
  },
  {
    text: "Focus on the two widgets on the right hand side",
    isBold: false,
  },
  {
    text: 'The first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable',
    isBold: false,
  },
  {
    text: 'In the gallery widget more photos can be added by clicking the "add image" button',
    isBold: false,
  },
  {
    text: "All the components should be responsive (for laptop screens; everything above 768px width)",
    isBold: false,
  },
  {
    text: "Replicate the exact UI; with exact padding, margins, shadows, interactions (if any)",
    isBold: false,
  },
  {
    text: "Ensure that the two widgets are accurately aligned with each other (relative right, left padding)",
    isBold: false,
  },
  {
    text: "Submit the following:",
    isBold: false,
  },
  {
    text: "Live Assignment Link – Host the assignment on any platform (e.g., Vercel, Netlify, Render, etc.) and share the live URL.",
    isBold: false,
  },
  {
    text: "Public GitHub Repository Link – Provide the link to your public GitHub repository containing the assignment code.",
    isBold: false,
  },
  {
    text: "NOTE: Recreate all interactions and effects visible in the prototype preview (accessible by clicking the Play button at the top right in Figma).",
    isBold: false,
  },
  {
    text: "",
    isBold: false,
  },
  {
    text: "",
    isBold: false,
  },
];

export const ProfileSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-[59.52px] w-full max-w-[791px]">
      {instructions.map((instruction, index) => (
        <div
          key={index}
          className="flex items-center justify-center w-full [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[30px] translate-y-[-1rem] animate-fade-in opacity-0"
          style={
            { "--animation-delay": `${index * 100}ms` } as React.CSSProperties
          }
        >
          <span className={instruction.isBold ? "font-bold" : "font-medium"}>
            {instruction.text}
          </span>
        </div>
      ))}
    </section>
  );
};
