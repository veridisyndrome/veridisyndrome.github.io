import { EducationProps } from "@/types";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const EducationItem = ({ name, description, period, markdown, imgSrc }: EducationProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
      {imgSrc && (
        <Image
          src={imgSrc}
          width={46}
          height={46}
          alt={`${name} logo`}
          className="object-cover rounded-lg border-[1px] border-white border-solid w-24 h-24"
        />
      )}
      <div className="flex flex-col gap-2 w-full">
        {/* Name and Period */}
        <div className="flex flex-col">
          <h3>{name}</h3>
          <span>{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
        </div>
        <span className="whitespace-pre-wrap">{description}</span>
        {markdown && (
          <div className="markdown mt-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationItem;
