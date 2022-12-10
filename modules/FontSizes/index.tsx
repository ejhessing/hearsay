interface Props {
  fontSizes: string[];
  fontSizeIndex: number;
  setFontSizeIndex: (index: number) => void;
}

export default function FontSizes({
  fontSizes,
  fontSizeIndex,
  setFontSizeIndex,
}: Props) {
  return (
    <div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-full m-1"
        onClick={() => {
          if (fontSizeIndex + 1 < fontSizes.length) {
            setFontSizeIndex(fontSizeIndex + 1);
          }
        }}
      >
        +
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-full m-1"
        onClick={() => {
          if (fontSizeIndex > 0) {
            setFontSizeIndex(fontSizeIndex - 1);
          }
        }}
      >
        -
      </button>
    </div>
  );
}
