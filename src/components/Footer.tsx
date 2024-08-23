import ContactItem from "./ContactItem";

const Footer = ({
  contact,
}: {
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
}) => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center bg-white h-28 text-sm text-black">
      <div className="flex gap-1">
        {contact.map((contact) => (
          <ContactItem key={contact.id} {...contact}>
            {contact.name}
          </ContactItem>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <span className="whitespace-pre-wrap text-center">{`Copyright 2024. Pablo Robin Guerrero. All rights reserved.`}</span>
      </div>
    </footer>
  );
};

export default Footer;
