import {projects} from "@/data";
import { getLocale } from 'next-intl/server';
import {MultiLang} from "@/types";

export default async function Page({
                                     params,
                                   }: {
  params: Promise<{ project: string }>
}) {
  const { project: projectId } = await params
  const locale = await  getLocale()
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
              <li><a href={link} target="_blank">View Site</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section mb-16">
        <img src={imgs[0]} alt="" className="w-full"/>
      </div>
      <div className="section">
        <div className="container">
          <div className="md:w-3/5 mb-16">
            <h2 className="heading mb-10 ">Project Purpose and Goal</h2>
            <p>{purposeAndGoal[locale as keyof MultiLang]}</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mb-16">
            <h2 className="heading mb-10 ">Web Stack and Explanation</h2>
            <div className="flex items-center flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <img src={stackImg} className="w-full" alt=""/>
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
            <img src={imgs[1]} alt="" className="w-full" />
          </div>
          <div className="flex-1">
            <img src={imgs[2]} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="heading mb-10 ">Problems and Thought Process</h2>
            <p className="mb-10">{problems[locale as keyof MultiLang]}</p>
            <img src={imgs[3]} alt="" className="w-full"/>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div>
            <h2 className="heading mb-10 ">Lessons Learned</h2>
            <p>{lessons[locale as keyof MultiLang]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}