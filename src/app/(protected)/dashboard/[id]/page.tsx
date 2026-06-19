"use client";

import PageHeader from "@/components/common/PageHeader";
import Tabs from "@/components/common/Tabs";
import { Spinner } from "@/components/ui/spinner";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("Content");

  useEffect(() => {
    const fetchDocumentDetails = async () => {
      try {
      } catch (error) {
        toast.error("Failed to fetch document details.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  const renderChat = () => {
    return "renderChat";
  };

  const renderFlashcardsTab = () => {
    return "renderFlashcardsTab";
  };

  const renderQuizzesTab = () => {
    return "renderQuizzesTab";
  };

  const tabs = [
    { name: "Chat", label: "Chat", content: renderChat() },
    { name: "Flashcards", label: "Flashcards", content: renderFlashcardsTab() },
    { name: "Quizzes", label: "Quizzes", content: renderQuizzesTab() },
  ];

  if (loading) {
    <Spinner />;
  }

  return (
    <div>
      <div className="mb-4">
        <Link
          href={"/documents"}
          className="inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Documents
        </Link>
      </div>
      <PageHeader title="Pruebas" />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
    </div>
  );
};

export default Page;
