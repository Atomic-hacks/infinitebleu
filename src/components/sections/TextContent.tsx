import React from "react"

// Define the types for the props
interface TextContentProps {
  subtitle: string;
  title: string;
  description: string;
  list: string[];
  cta: {
    text: string;
    link: string;
  };
}

const TextContent: React.FC<TextContentProps> = ({
  subtitle,
  title,
  description,
  list,
  cta,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-blue-800">{subtitle}</p>
      <h2 className="text-2xl text-black font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <ul className="list-disc pl-5 space-y-1">
        {list.map((item, i) => (
          <li key={i} className="text-gray-600">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-left ">
        <a
          href={cta.link}
          className="mt-4 align-center bg-blue-800 border-br-20 text-xl text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {cta.text}
        </a>
      </div>
    </div>
  );
};

export default TextContent;
