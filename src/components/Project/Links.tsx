import GithubIcon from "@/assets/images/github.svg";
import WebIcon from "@/assets/images/web.svg";

interface LinksProps {
  repoUrl: string;
  webUrl?: string;
}

const Links = ({ repoUrl, webUrl }: LinksProps) => {
  return (
    <div className="flex gap-2">
      <a target="_blank" rel="noreferrer" href={repoUrl} className="w-fit">
        <GithubIcon className="w-6 h-6 fill-current text-black hover:text-blue-500" />
      </a>
      
      {webUrl && (
        <a target="_blank" rel="noreferrer" href={webUrl} className="w-fit">
          <WebIcon className="w-6 h-6 fill-current text-black hover:text-blue-500" />
        </a>
      )}
    </div>
  );
};

export default Links;
