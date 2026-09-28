import ParticipationCTA from "@/components/auth/ParticipationCTA";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about/bg-about2.png')" }}
        role="img"
        aria-label="Dense green Indonesian rainforest canopy"
      />
      <div className="absolute inset-0 bg-[#0B160F]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B160F]/70" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:px-16">
        <div aria-hidden="true" className="hidden lg:block" />
        <AnimatedSection>
          <div className="lg:text-right">
            <h2 className="font-headline text-3xl font-bold uppercase leading-tight text-[#F4F0E8] md:text-4xl lg:text-5xl">
              A Greener Indonesia Starts With{" "}
              <span className="text-[#DDEA81]">You</span>
            </h2>
            <p className="mt-4 text-sm font-body leading-relaxed text-[#F4F0E8]/75 md:text-base lg:ml-auto lg:max-w-md">
              Every visit is a small step, but together we can create a much
              bigger impact for Indonesia&rsquo;s forests and future
              generations.
            </p>
            <div className="mt-7 lg:flex lg:justify-end">
              <ParticipationCTA />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
