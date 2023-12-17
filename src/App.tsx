import { useState } from "react";
import Button from "./components/Button";

const colors = [
  { id: 14, bgColor: "bg-cyan-500", name: "Cyan" },
  { id: 3, bgColor: "bg-zinc-500", name: "Zinc" },
  { id: 20, bgColor: "bg-fuchsia-500", name: "Fuchsia" },
  { id: 11, bgColor: "bg-green-500", name: "Green" },
  { id: 10, bgColor: "bg-lime-500", name: "Lime" },
  { id: 1, bgColor: "bg-gray-500", name: "Gray" },
  { id: 9, bgColor: "bg-yellow-500", name: "Yellow" },
  { id: 2, bgColor: "bg-slate-500", name: "Slate" },
  { id: 8, bgColor: "bg-amber-500", name: "Amber" },
  { id: 6, bgColor: "bg-red-500", name: "Red" },
  { id: 13, bgColor: "bg-teal-500", name: "Teal" },
  { id: 5, bgColor: "bg-stone-500", name: "Stone" },
  { id: 7, bgColor: "bg-orange-500", name: "Orange" },
  { id: 4, bgColor: "bg-neutral-500", name: "Neutral" },
  { id: 18, bgColor: "bg-violet-500", name: "Violet" },
  { id: 17, bgColor: "bg-indigo-500", name: "Indigo" },
  { id: 12, bgColor: "bg-emerald-500", name: "Emerald" },
  { id: 22, bgColor: "bg-rose-500", name: "Rose" },
  { id: 21, bgColor: "bg-pink-500", name: "Pink" },
  { id: 19, bgColor: "bg-purple-500", name: "Purple" },
  { id: 16, bgColor: "bg-blue-500", name: "Blue" },
  { id: 15, bgColor: "bg-sky-500", name: "Sky" },
];

const App = () => {
  const [currentColor, setCurrentColor] = useState(
    colors[Math.floor(Math.random() * colors.length)].bgColor
  );

  const handleColorChange = (newColor: string) => {
    setCurrentColor(newColor);
  };

  return (
    <div className={`w-full h-screen duration-200 ${currentColor}`}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map(({ id, bgColor, name }) => (
            <Button
              key={id}
              color={{ bgColor, name }}
              onClick={handleColorChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
