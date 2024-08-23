import SectionTitle from "../SectionTitle";
import AwardItem from "./AwardItem";

import { DataProps } from "@/types";

const Award = ({ award }: Pick<DataProps, "award">) => {
  const hasAwards = award.length > 0;
  return (
    <>
      {hasAwards && (
        <div>
          <SectionTitle>Award</SectionTitle>
          <div className="flex flex-col gap-24">
            {[...award].reverse().map((award) => (
              <AwardItem key={award.id} {...award} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Award;
