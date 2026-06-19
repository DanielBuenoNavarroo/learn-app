"use client";

import { KANJIS } from "@/lib/constants";
import { KanjisInfo } from "@/types";
import { getStroke } from "perfect-freehand";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import HanziWriter from "hanzi-writer";
import KanjiDisplay from "./KanjiDisplay";

// https://kanjidraw.com

const Kanji = () => {
  const [selectedKanji, setSelectedKanji] = useState<KanjisInfo>(KANJIS[8]);
  const [writer, setWriter] = useState<HanziWriter | null>(null);

  const targetDiv = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { theme } = useTheme();

  useEffect(() => {
    if (!targetDiv.current) return;

    let isDark = theme === "dark";

    if (theme === "system")
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (writer) {
      writer.updateColor("outlineColor", isDark ? "#444" : "#ccc");
      writer.updateColor("strokeColor", isDark ? "#fff" : "#000");
      writer.updateColor("radicalColor", isDark ? "#fff" : "#000");

      writer.hideCharacter();
      writer.showCharacter();

      return;
    }

    const newWriter = HanziWriter.create(
      targetDiv.current,
      selectedKanji.kanji,
      {
        width: 100,
        height: 100,
        padding: 5,
        showOutline: true,
        strokeAnimationSpeed: 1, // 5x normal speed
        delayBetweenStrokes: 200,
        outlineColor: isDark ? "#444" : "#ccc",
        strokeColor: isDark ? "#fff" : "#000",
      },
    );

    setWriter(newWriter);
  }, [selectedKanji.kanji, theme]);

  return (
    <div className="w-full">
      {/* 
      <div className="flex items-center justify-center" ref={targetDiv}></div>
      <canvas ref={canvasRef} />
      <Button
        onClick={() => {
          writer?.animateCharacter();
        }}
      >
        Animate
      </Button>
      */}
      {/* Level */}
      <>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="size-9 aspect-square rounded-full bg-linear-to-r from-orange-700 to-amber-400 flex items-center justify-center">
            <p className="text-xl font-extrabold">1</p>
          </div>
          <div className="rounded-full w-full h-8 bg-slate-900 border border-slate-800 flex flex-row items-center justify-center">
            <p className="text-xs font-bold">0/18</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full pt-3">
          <p className="text-sm text-stone-400 font-semibold">
            Level 1 - Basic kanji
          </p>
        </div>
      </>

      {/* KanjiShow */}
      <>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[1, 2, 3].map((x) => (
            <KanjiDisplay key={x} />
          ))}
        </div>
      </>
    </div>
  );
};

export default Kanji;
