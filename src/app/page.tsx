'use client'
import { About } from "@/components/About";
import { FormSection } from "@/components/Form";
import { Projects } from "@/components/Projects";
import { SocialMedia } from "@/components/SocialMedia";
import { Title } from "@/components/ui/title";
import { useLanguage } from "@/context/languageContext";

export default function Home() {
  const { translate } = useLanguage();

  return (
    <main className=" bg-slate-100 px-3 py-7 sm:p-10 flex flex-col">
      <div className="max-[539px]:max-w-100 min-[767px]:min-w-165 xl:min-w-300 xl-mx-auto flex flex-col gap-15">
      <About />
      <section>
      <Title>{translate('projects', 'titleA')}</Title>
      <Projects />
      </section>
      <section className="bg-neutral-50 p-5 rounded-2xl">
        <Title>{translate('contact', 'title')}</Title>
        <div className="grid md:grid-cols-2 gap-25 sm:gap-0 ">
          <FormSection />
          <SocialMedia/>
        </div>
      </section>
      </div>
    </main>
  );
}
