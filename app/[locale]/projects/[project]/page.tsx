import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getLocale, getTranslations} from 'next-intl/server';
import {getProject} from "@/data";
import {MultiLang} from "@/types";
import Img from "@/components/ui/Img";
import {Link} from "@/i18n/navigation";

type Params = Promise<{ locale: string; project: string }>

export async function generateMetadata({params}: { params: Params }): Promise<Metadata> {
  const {locale, project: projectId} = await params;
  const project = getProject(projectId);
  if (!project) {
    return {};
  }
  return {
    title: project.title,
    description: project.desc[locale as keyof MultiLang] ?? project.desc.en,
    alternates: {canonical: `/${locale}/projects/${projectId}`},
    openGraph: {images: [project.img]},
  };
}

export default async function Page({params}: { params: Params }) {
  const {project: projectId} = await params
  const project = getProject(projectId)
  if (!project) {
    notFound()
  }

  const locale = (await getLocale()) as keyof MultiLang
  const t = await getTranslations("project")
  const s = await getTranslations("services.items")
  const c = await getTranslations("caseStudies")
  const {title, kind, industry, services, desc, stacks, stackImg, link, imgs, challenge, solution, results} = project
  const hasLiveLink = Boolean(link?.trim())

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="mt-[80px] lg:mt-[100px] mb-10">
            <Link href="/projects" className="paragraph-small paragraph-light no-underline mb-6">← {t('back')}</Link>
            <div className="accent-label">{kind === "delivered" ? c('delivered') : c('concept')}</div>
            <h1 className="heading-jumbo mb-6">{title}</h1>
            <p className="paragraph-bigger paragraph-light max-w-[820px] mx-auto md:mx-0">{desc[locale]}</p>
          </div>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10 text-left">
            <div>
              <dt className="label opacity-60 mb-2">{t('industry')}</dt>
              <dd className="m-0">{industry[locale]}</dd>
            </div>
            <div>
              <dt className="label opacity-60 mb-2">{t('services')}</dt>
              <dd className="m-0">{services.map((key) => s(`${key}.title`)).join(", ")}</dd>
            </div>
            <div>
              <dt className="label opacity-60 mb-2">{t('stack')}</dt>
              <dd className="m-0">{stacks.join(", ")}</dd>
            </div>
            {hasLiveLink && (
              <div>
                <dt className="label opacity-60 mb-2">{t('live')}</dt>
                <dd className="m-0"><a href={link} target="_blank" rel="noreferrer">{t('viewsite')}</a></dd>
              </div>
            )}
          </dl>
        </div>
      </div>
      <div className="section mb-16">
        <Img src={imgs[0]} alt="" className="w-full" width={2872} height={1974}/>
      </div>
      <div className="section">
        <div className="container">
          <div className="md:w-3/5 mb-16">
            <h2 className="heading mb-6">{t('challenge')}</h2>
            <p>{challenge[locale]}</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mb-16">
            <h2 className="heading mb-6">{t('solution')}</h2>
            <div className="flex items-center flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <Img src={stackImg} className="w-full" alt="" width={2084} height={1024} />
              </div>
              <div className="flex-1">
                <p>{solution[locale]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="mb-16 flex justify-center items-center flex-col lg:flex-row">
          <div className="flex-1">
            <Img src={imgs[1]} alt="" className="w-full" width={2164} height={2334} />
          </div>
          <div className="flex-1">
            <Img src={imgs[2]} alt="" className="w-full" width={2164} height={2334} />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mb-16 text-center md:text-left">
            <h2 className="heading mb-6">{t('results')}</h2>
            <p className="mb-10 md:w-3/5">{results[locale]}</p>
            <Img src={imgs[3]} alt="" className="w-full" width={2164} height={2334} />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="card text-center mb-16">
            <h3 className="mt-0">{t('ctaTitle')}</h3>
            <p className="paragraph-light">{t('ctaDescription')}</p>
            <Link href="/#contact" className="button button-large button-accent">{t('ctaButton')}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
