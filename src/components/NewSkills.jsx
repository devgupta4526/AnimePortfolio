import React from 'react';

const NewSkills = () => {
  const placeholderImage = "/assets/images/gojo.png";

  const skills = [
    { imageUrl: placeholderImage, name: "CSS", type: "Frontend" },
    { imageUrl: placeholderImage, name: "Express", type: "Backend" },
    { imageUrl: placeholderImage, name: "Git", type: "Version Control" },
    { imageUrl: placeholderImage, name: "GitHub", type: "Version Control" },
    { imageUrl: placeholderImage, name: "HTML", type: "Frontend" },
    { imageUrl: placeholderImage, name: "JavaScript", type: "Frontend" },
    { imageUrl: placeholderImage, name: "MongoDB", type: "Database" },
    { imageUrl: placeholderImage, name: "Motion", type: "Animation" },
    { imageUrl: placeholderImage, name: "Material-UI", type: "Frontend" },
    { imageUrl: placeholderImage, name: "Next.js", type: "Frontend" },
    { imageUrl: placeholderImage, name: "Node.js", type: "Backend" },
    { imageUrl: placeholderImage, name: "React", type: "Frontend" },
    { imageUrl: placeholderImage, name: "Redux", type: "State Management" },
    { imageUrl: placeholderImage, name: "Sass", type: "Frontend" },
    { imageUrl: placeholderImage, name: "Tailwind CSS", type: "Frontend" },
    { imageUrl: placeholderImage, name: "TypeScript", type: "Frontend" },
  ];

  return (
    <div className="py-10 flex flex-col">
      <h3 className="text-white font-semibold sm:text-3xl text-xl relative font-poppins">My Skills</h3>

      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div
            className="relative transition duration-250 perspective-[500px] w-20 h-20"
            key={skill.name}
          >
            <div className="absolute inset-0 z-[-1] w-full h-full transition duration-250 transform-style-3d origin-bottom-right rotate-[8deg] will-change-transform shadow-[5px_0_20px_#df3d3d] rounded-xl" />
            <div className="absolute inset-0 z-[1] w-full h-full bg-white/20 backdrop-blur-[20px] transition duration-250 transform-style-3d origin-top-left flex justify-center items-center rounded-xl">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewSkills;
