import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { DataProps } from "@/types";

const Project = ({ project }: Pick<DataProps, "project">) => {
  const projects = [...project].reverse();
  return (
    <>
      <div>
          <SectionTitle>Projects</SectionTitle>
          <div className="flex flex-col gap-24">
            {projects.map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
          </div>
        </div>
    </>
  );
};

export default Project;
