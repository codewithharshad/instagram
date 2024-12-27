import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import '../../app/globals.css'
import bg from '../../../public/bg-gradient.svg'
import Image from 'next/image';

const BLUR_FADE_DELAY = 0.04;

export function WorkExperienceSection() {
  return (
    <section id="work" className="relative">
      <div className="absolute w-96 h-96 opacity-50 top-0 left-1/2 -translate-x-1/2 md:block sm:hidden">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
         <Image 
            src={bg} 
            alt="Background" 
            className="w-full" // Optional: For styling the image
      />
      </BlurFade>
      </div>
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
         
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DATA.work.map((work, id) => (
          <BlurFade
            key={work.company}
            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
          >
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
              
          </BlurFade>
        ))}
        </div>
        
      </div>
    </section>
  );
}