interface NoticiaCardProps {
  title: string;
  content: string;
}

export default function NoticiaCard({ title, content }: NoticiaCardProps) {
  return (
    <div className="flex flex-col h-full w-full items-center justify-between">
      <h2 className="text-[2rem] font-bold">{title}</h2>
      <p className="">{content}</p>
    </div>
  );
}
