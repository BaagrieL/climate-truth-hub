
interface NoticiaCardProps {
  title: string;
  content: string;
  type: string;
}

export default function NoticiaCard({ title, content, type }: NoticiaCardProps) {
  const bgColor = type == "noticia" ? "bg-yellow-700" : "bg-green-800";

  return (
    <div className="
      relative
      flex flex-col h-full w-full 
      pt-3
      px-6
      justify-between"
    >
      <header className="flex justify-between">
        <div
          className={`flex 
                    items-center justify-center rounded-full 
                    top-3 left-5 w-20 py-1 px-4 
                    ${bgColor} text-[12px] `
          }>
          {type}
        </div>
      </header>

      <main className="flex flex-col grow-2 pt-4">

        <h2 className="
          text-[28px] md:text-2xl 
          font-semibold 
          text-green-400 
          leading-tight"
        >
          {title.charAt(0).toUpperCase() + title.slice(1).replace(/(\r\n|\n|\r)/gm, " ").toLowerCase()}
        </h2>

        <p className="
          flex-grow-1
          text-sm md:text-base 
          text-gray-300 
          text-justify 
          overflow-y-auto
          ml-2"
        >
          {content.charAt(0).toUpperCase() + content.slice(1)}
        </p>
      </main>
    </div>
  );
}
