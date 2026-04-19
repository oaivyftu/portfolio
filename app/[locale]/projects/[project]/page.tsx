import {projects} from "@/data";
import {getLocale, getTranslations} from 'next-intl/server';
import {MultiLang} from "@/types";
import Img from "@/components/ui/Img";

export default async function Page({
                                     params,
                                   }: {
  params: Promise<{ project: string }>
}) {
  const { project: projectId } = await params
  const locale = await getLocale()
  const t = await getTranslations("projects")
  const { title, type, desc, stacks, stackImg, link, imgs, purposeAndGoal, explanation, problems, lessons } = projects[projectId]

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="mt-[120px] mb-10">
            <h1 className="heading-jumbo">{title}</h1>
            <p className="paragraph-light">{type}</p>
            <p className="paragraph-light">{desc[locale as keyof MultiLang]}</p>
          </div>
          <div className="flex gap-10 justify-start mb-10">
            <ul>
              <li className="mb-4 font-bold">Stack</li>
              {stacks.map((stack, idx) => (
                <li key={idx}>{stack}</li>
              ))}
            </ul>
            <ul>
              <li className="mb-4 font-bold">LIVE</li>
              <li><a href={link} target="_blank">{t('viewsite')}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section mb-16">
        <Img src={imgs[0]} alt="" className="w-full" width={2872} height={1974}/>
      </div>
      <div className="section">
        <div className="container">
          <div className="md:w-3/5 mb-16">
            <h2 className="heading mb-10 ">{t('purporseandgoal')}</h2>
            <p>{purposeAndGoal[locale as keyof MultiLang]}</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mb-16">
            <h2 className="heading mb-10 ">{t('webstack')}</h2>
            <div className="flex items-center flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <Img src={stackImg} className="w-full" alt="" width={2084} height={1024} />
              </div>
              <div className="flex-1">
                <p>{explanation[locale as keyof MultiLang]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="mb-16 flex justify-center items-center flex-col lg:flex-row 5">
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
          <div className="mb-16 text-center">
            <h2 className="heading mb-10 ">{t('problems')}</h2>
            <p className="mb-10">{problems[locale as keyof MultiLang]}</p>
            <Img src={imgs[3]} alt="" className="w-full" width={2164} height={2334} />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div>
            <h2 className="heading mb-10 ">{t('lessons')}</h2>
            <p>{lessons[locale as keyof MultiLang]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}