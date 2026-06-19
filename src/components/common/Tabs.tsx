import { Dispatch, SetStateAction } from "react";
import { Button } from "../ui/button";

interface Props {
  tabs: {
    name: string;
    label: string;
    content: string;
  }[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const Tabs = ({ activeTab, setActiveTab, tabs }: Props) => {
  return (
    <div className="">
      <div className="">
        <nav className="">
          {tabs.map((tab) => (
            <Button key={tab.name} onClick={() => setActiveTab(tab.name)}>
              <span className="">{tab.label}</span>
              {activeTab === tab.name && <div className="" />}
              {activeTab === tab.name && <div className="" />}
            </Button>
          ))}
        </nav>
      </div>
      <div className="">
        {tabs.map((tab) => {
          if (tab.name === activeTab) {
            return (
              <div className="" key={tab.name}>
                {tab.content}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Tabs;
