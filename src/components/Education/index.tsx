import SectionTitle from "../SectionTitle";
import EducationItem from "./EducationItem";

import { DataProps } from "@/types";
import Project from '../Project/index';

const Education = ({ education }: Pick<DataProps, "education">) => {
  return (
    <div>
      <SectionTitle>Education</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...education].reverse().map((education) => (
          <EducationItem
            key={education.id} {...education}/>
        ))}
      </div>
    </div>
  );
};

export default Education;