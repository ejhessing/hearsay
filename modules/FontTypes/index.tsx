import cn from "classnames";

interface Props {
  font: string;
  setFont: (font: string) => void;
}

export const FontTypes = ({ font, setFont }: Props) => {
  console.log({ font, a: font === "sans" });
  return (
    <div>
      <button
        className={cn("font-bold px-8 py-4 rounded-lg m-1", {
          "bg-slate-100 text-slate-800 border-4 border-red-500 dark:text-slate-50 dark:border-red-500 dark:bg-slate-800":
            font == "serif",
          "bg-red-500 text-slate-50 hover:bg-red-700": font != "serif",
        })}
        onClick={() => {
          setFont("serif");
        }}
        value="serif"
      >
        Serif
      </button>
      <button
        className={cn(" font-bold px-8 py-4 rounded-lg m-1", {
          "bg-slate-100 text-slate-800 border-4 border-red-500 dark:text-slate-50 dark:border-red-500 dark:bg-slate-800":
            font == "sans",
          "bg-red-500 text-slate-50 hover:bg-red-700": font != "sans",
        })}
        onClick={() => {
          setFont("sans");
        }}
        value="sans"
      >
        Sans
      </button>
      <button
        className={cn("font-bold px-8 py-4 rounded-lg m-1", {
          "bg-slate-100 text-slate-800 border-4 border-red-500 dark:text-slate-50 dark:border-red-500 dark:bg-slate-800":
            font == "mono",
          "bg-red-500 text-slate-50 hover:bg-red-700": font != "mono",
        })}
        onClick={() => {
          setFont("mono");
        }}
        value="mono"
      >
        Mono
      </button>
    </div>
  );
};
