import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ContactItem from "../ContactItem";
import Introduce from "./Introduce";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-8 items-center">
        <img 
          src={information.imgSrc} 
          alt={`${information.name} profile`} 
          className="w-56 h-56 object-cover rounded-xl" 
        />
        <div className="flex flex-col gap-2">
          <h1 className="leading-[1.15]">
            Hello,
            <br /> I am{" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            !
          </h1>
          <div className="flex gap-1">
            {information.contact.map((contact) => (
              <ContactItem
                key={contact.id}
                className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                {...contact}
              >
                {contact.name}
              </ContactItem>
            ))}
          </div>
        </div>
      </div>
      {information.markdown && (
          <div className="markdown mt-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{information.markdown}</ReactMarkdown>
          </div>
        )}
    </div>
  );
};

export default Information;
