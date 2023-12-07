import React from 'react';
import ArticleHeader from './ArticleHeader';
import { AiOutlineCheck } from 'react-icons/ai';
import ImageSlider from './ImageSlider';

type Project = {
  title: string;
  date: string;
  images: string[];
  description: string;
  features: string[];
  deploymentLink: string;
  githubLink: string;
  frontendTech: string;
  backendTech: string;
  tasks: string[];
};

type Props = {
  projects: Project[];
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-lg p-8 overflow-hidden">
      <div className="text-5xl font-bold text-center mt-5">{project.title}</div>
      <div className="text-2xl font-bold text-gray-400 text-center mt-5">{project.date}</div>
      <div className="container flex flex-col mt-5 md:flex-row">
        {/* 표시 */}
        <div className="md:w-full md:order-1 bg-gray-300 p-8 mb-5 md:mb-0">
          <div className="border-black border-2">
            <ImageSlider images={project.images} />
          </div>
        </div>
        {/* 표시 */}
        <div className="md:w-full md:order-2 bg-gray-300 p-8">
          <p className="text-lg font-bold my-4" id="info">
            {project.description}
          </p>

          <div className="border-b border-gray-500 my-3"></div>

          <ul className="list-disc m-3">
            <li className="text-lg flex my-4 font-bold">
              <div className="container flex mx-auto mt-4">
                <AiOutlineCheck />
                주요기능
                <ul className="list-disc pl-4 ml-7">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ projects }: Props) => {
  return (
    <article id="projects" className="w-full py-10 bg-blue-300">
      <ArticleHeader name={'projects'} />
      <section className="flex flex-wrap justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </section>
    </article>
  );
};

export default Projects;
