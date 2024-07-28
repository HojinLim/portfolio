import ArticleHeader from './ArticleHeader'
import { AiOutlineCheck } from 'react-icons/ai'
import ImageSlider from './ImageSlider'

import { Project } from '../static/constants/type'

type Props = {
  projects: Project[]
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg p-8 overflow-hidden my-5 mx-auto w-4/5">
      <div className="text-5xl font-bold text-center mt-5 align-middle justify-center max-[560px]:text-3xl max-[710px]:text-4xl">
        {project.title}
      </div>
      <div className="text-2xl font-bold text-gray-400 text-center mt-5 max-[560px]:text-lg">{project.date}</div>
      <div className="container flex flex-col mt-5 md:flex-col">
        {/* 슬라이더 */}
        <div className="md:w-full md:order-1 bg-gray-300 p-8 mb-5 md:mb-0 align-middle border-black border-2">
          <ImageSlider images={project.images} />
        </div>

        <div className="md:w-full md:order-2 bg-gray-300 p-8">
          <p className="text-xl font-bold my-4" id="info" style={{ whiteSpace: 'pre-line' }}>
            {project.description}
          </p>

          <div className="border-b border-gray-500 my-3"></div>

          {project.features ? (
            <ul className="list-disc m-3">
              <li className="text-lg flex my-4 font-bold">
                <div className="project_container">
                  <span className="flex">
                    <AiOutlineCheck />
                    주요기능
                  </span>
                  <ul className="list-disc pl-4 ml-7">
                    {project.features?.map((feature: any, index: number) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          ) : null}
          {/* 기술 스택 */}
          <ul className="list-disc m-3">
            <li className="text-lg flex my-4 font-bold">
              <div className="project_container max-[950px]:flex-col">
                <span className="flex">
                  <AiOutlineCheck />
                  기술 스택:
                </span>
                <ul className="list-disc pl-4 ml-7">
                  <li>{project.tech}</li>
                </ul>
              </div>
            </li>
          </ul>
          {/* 사용 기술 */}
          {project.skills ? (
            <ul className="list-disc m-3">
              <li className="text-lg flex my-4 font-bold">
                <div className="project_container max-[950px]:flex-col">
                  <span className="flex">
                    <AiOutlineCheck />
                    사용 기술:
                  </span>
                  <ul className="list-disc pl-4 ml-7 overflow-hidden text-ellipsis">
                    {project.skills?.map((skills, index) => (
                      <li key={index}>{skills}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          ) : null}

          {/* 맡은 일 */}
          {project.tasks ? (
            <ul className="list-disc m-3">
              <li className="text-lg flex my-4 font-bold">
                <div className="container flex mx-auto mt-4 max-[950px]:flex-col">
                  <span className="flex">
                    <AiOutlineCheck />
                    맡은 일
                  </span>
                  <ul className="list-disc pl-4 ml-7">
                    {project.tasks?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          ) : null}

          {/* 배포링크 */}
          {project.deploymentLink ? (
            <ul className="list-disc m-3">
              <li className="text-lg flex my-4 font-bold">
                <div className="container flex mx-auto mt-4 max-[950px]:flex-col">
                  <span className="flex">
                    <AiOutlineCheck />
                    배포 링크
                  </span>
                  <ul className="list-disc pl-4 ml-3 overflow-hidden text-ellipsis whitespace-nowrap">
                    <a
                      className="hover:cursor-pointer underline text-blue-600 sm:si "
                      href={project.deploymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.deploymentLink}
                    </a>
                  </ul>
                </div>
              </li>
            </ul>
          ) : null}

          {/* Github 링크 */}

          <ul className="list-disc m-3">
            <li className="text-lg flex my-4 font-bold">
              <div className="container flex mx-auto mt-4 overflow-hidden whitespace-no-wrap max-[950px]:flex-col">
                <span className="flex">
                  <AiOutlineCheck />
                  github
                </span>
                <ul className="list-disc pl-4 ml-3 overflow-hidden text-ellipsis whitespace-nowrap">
                  <a
                    className="hover:cursor-pointer underline text-blue-600"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.githubLink}
                  </a>
                </ul>
              </div>
            </li>
          </ul>

          {/* tistory 링크 */}
          {project.tistoryLink ? (
            <ul className="list-disc m-3">
              <li className="text-lg flex my-4 font-bold">
                <div className="container flex mx-auto mt-4 overflow-hidden whitespace-no-wrap max-[950px]:flex-col">
                  <span className="flex">
                    <AiOutlineCheck />
                    tistory
                  </span>
                  <ul className="list-disc pl-4 ml-3">
                    <a
                      className="hover:cursor-pointer underline text-blue-600"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.tistoryLink}
                    </a>
                  </ul>
                </div>
              </li>
            </ul>
          ) : null}

          {project.plans ? (
            <ul className="list-disc m-3">
              <li className="text-lg flex my-4 font-bold">
                <div className="container flex mx-auto mt-4 max-[950px]:flex-col">
                  <span className="flex">
                    <AiOutlineCheck />
                    추가 기능 계획
                  </span>
                  <ul className="list-disc pl-4 ml-7">
                    {project.plans?.map((plan, index) => (
                      <li key={index}>{plan}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  )
}

const Projects = ({ projects }: Props) => {
  return (
    <article id="projects" className="w-full py-10 bg-blue-300 flex flex-col">
      <ArticleHeader name={'projects'} />
      <section className="flex flex-col justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </article>
  )
}

export default Projects
