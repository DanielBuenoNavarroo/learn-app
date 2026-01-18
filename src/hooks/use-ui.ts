"use client";

import { useContext } from "react";
import { UIContext } from "@/components/providers/main-context";

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within <MainContext>");
  return ctx;
}