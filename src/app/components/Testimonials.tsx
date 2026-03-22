import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "I had the pleasure of working with Georgi at LeadMind Agency, and I've found him to be a reliable and focused professional. He approaches tasks with clarity and pragmatism, ensuring deadlines are met and objectives are achieved. Georgi communicates clearly, collaborates well with others, and keeps his work grounded in reality.",
    image: "/assets/testimonial-avatars/Martin-Benschop.png",
    name: "Martin Benschop",
    role: "Product & Business Development at LeadMind Agency",
  },
  {
    text: "He's a strong problem-solver with a genuine dedication to making every project succeed. Georgi has a real growth mindset, he stays open to feedback, and always brings professionalism and responsibility to the team. Working with him is truly a pleasure, and I'm just really grateful to know him.",
    image: "/assets/testimonial-avatars/Mila-Pavlova.png",
    name: "Mila Pavlova",
    role: "Senior User Experience Designer",
  },
  {
    text: "George has always been highly accessible and supportive throughout our collaboration. He consistently takes the time to clearly explain product requirements and details, which has made development more efficient and helped the team avoid misunderstandings. Working with George has been a very positive experience, and I truly value his professionalism and reliability. He is a strong Product Owner who makes collaboration easy and effective.",
    image: "/assets/testimonial-avatars/Parastoo-Amini.png",
    name: "Parastoo Amini",
    role: "Senior Backend Developer",
  },
  {
    text: "His impact on our team's growth has also been significant. George helped build the very first design team. Thanks to his effort in scouting, training, and mentoring, we gained strong team members who continue to add value today. On a personal note, I know George as someone who takes his work seriously, strives for the best possible outcome, and genuinely cares about the team. And he brings value to every project he works on.",
    image: "/assets/testimonial-avatars/Tatiana-Shiftman.png",
    name: "Tatiana Shiftman",
    role: "Project Manager at LeadMind Agency",
  },
  {
    text: "Georgi is an outstanding project leader – structured, strategic, and incredibly supportive. We always understood each other perfectly and were able to find the right balance between creativity and business goals. One of the things I appreciated most was how consistently he defended and advocated for my ideas during client discussions. His ability to communicate design value and maintain trust with clients made our collaboration highly effective.",
    image: "/assets/testimonial-avatars/Ivan-Kuznetsov.png",
    name: "Ivan Kuznietsov",
    role: "UX/UI Designer | Full-stack PHP Developer",
  },
  {
    text: "George brings thoughtful creativity, strong user-centered thinking, and a willingness to explore new ideas that consistently elevates the work. His upbeat attitude makes collaboration effortless, and his ability to listen, adapt, and refine designs ensures that both the team and the final product benefit. Anyone would be lucky to have George on their team.",
    image: "/assets/testimonial-avatars/Leroy-Ng.png",
    name: "Leroy Ng",
    role: "UX/UI Designer",
  },
  {
    text: "George's relentless efforts and incredible contributions helped Breadchaser transition from vision to reality. Working together has been a great experience, and there's still so much more ahead.",
    image: "/assets/testimonial-avatars/Alexander-Krut.webp",
    name: "Alexander Krut",
    role: "Full-stack Developer",
  },
  {
    text: "I highly recommend George. During my internship, he played a great role in my growth by offering valuable guidance, thoughtful feedback, and support. I'm truly grateful for everything he taught me and the impact he had on my development as a designer.",
    image: "/assets/testimonial-avatars/Lorenzo-Jagessar.png",
    name: "Lorenzo Jagessar",
    role: "UX/UI Designer",
  },
  {
    text: "After completing the graduation project, the client was very happy with the results delivered by George. You were a nice student to work with; you were always willing to engage during our program and eager to learn. Continue to develop your skills in the field of UX design. I wish you a successful career ahead.",
    image: "/assets/testimonial-avatars/Fenne-van-Doorn.png",
    name: "Fenne van Doorn",
    role: "Lecturer and Applied Researcher",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="pt-10 pb-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-[40px] font-bold leading-tight text-[#1A2A22]">
            Backed by Results
          </h2>
        </motion.div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
