"use client";

import { KANJIS } from "@/lib/constants";
import { KanjisInfo } from "@/types";
import { useEffect, useRef, useState } from "react";
import HanziWriter from "hanzi-writer";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const Kanji = () => {
  const [selectedKanji, setSelectedKanji] = useState<KanjisInfo>(KANJIS[8]);
  const [writer, setWriter] = useState<HanziWriter | null>(null);
  const targetDiv = useRef(null);

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
      }
    );

    setWriter(newWriter);
  }, [selectedKanji.kanji, theme, writer]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-center" ref={targetDiv}></div>
      <Button
        onClick={() => {
          writer?.animateCharacter();
        }}
      >
        Animate
      </Button>
    </div>
  );
};

export default Kanji;
