interface NoticiaCardProps {
  title: string;
  content: string;
}

export default function NoticiaCard({ title, content }: NoticiaCardProps) {
  return (
    <div className="
      flex flex-col h-full w-full 
      p-6 
      justify-between 
    ">
      <h2 className="
      text-xl md:text-2xl 
      font-semibold 
      text-green-400 
      mb-3 
      leading-tight 
      ">
      {title}
      </h2>
      <p className="
      flex-grow-1
      text-sm md:text-base 
      text-gray-300 
      text-justify 
      line-clamp-5 
      ">
      {content}
      </p>
    </div>
  );
}
