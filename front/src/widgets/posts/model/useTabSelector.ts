import { useState } from "react";

export function useTabSelector() {
  const [activeTab, setActiveTab] = useState(0);

  function tabHandler(id: number) {
    setActiveTab(id);    
  }

  return { activeTab, tabHandler };
}