import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Hestiva Platforms",
      subtitle: "Scaling Cross-Border Living",
      description:
        "Led product, UX, and growth strategy to transform a rental platform into a scalable Benelux marketplace.",
      image: "/assets/project-thumbnails/Keyscout.png",
    },
    {
      title: "Tanaruz Boats",
      subtitle: "Building a Digital Experience for 3D-Printed Boats",
      description:
        "Designed and launched a full digital ecosystem for an emerging manufacturing category.",
      image: "/assets/project-thumbnails/LeadMind-website-project-2.webp",
    },
    {
      title: "RAW IDEA",
      subtitle: "Turning Visual Identity into a Sales Driver",
      description:
        "Crafted a bold digital identity that directly increased customer acquisition.",
      image: "/assets/project-thumbnails/Borgplaats-platform-1.webp",
    },
  ];

  return (
    <section className="pt-20 pb-0 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center py-16 ${
              "border-b border-[#F8F9FA]"
            } ${index === 0 ? "pt-0" : ""} ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-[#1A2A22]">
                  {project.title}
                </h3>
                <h4 className="text-lg font-semibold text-[#1A2A22]">
                  {project.subtitle}
                </h4>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {project.description}
                </p>
                <div className="pt-2">
                  <button className="px-6 py-3 bg-[#1A2A22] text-white rounded-xl hover:bg-[#0f1814] transition-colors font-medium text-sm">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
