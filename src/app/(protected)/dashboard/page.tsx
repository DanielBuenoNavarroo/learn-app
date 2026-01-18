"use client";

import { Spinner } from "@/components/ui/spinner";
import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
      } catch (error) {
        toast.error("Failed to fetch dashboard data.");
        console.log(error);
      } finally {
        setLoading(true);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!dashboardData) {
    return (
      <div className="">
        <div className="">
          <div className="">
            <TrendingUp className="" />
            <p className="">No dashboard data available.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="" />
      <div className="">
        {/* Header */}
        <div className="">
          <h1 className="">Dashboard</h1>
          <p className="">Track your learning progress and activity</p>
        </div>

        {/* Stats grid */}
      </div>
    </div>
  );
};

export default Page;
