"use client";

import styles from "./TabButton.module.scss";
export const TabButton = ({
  day,
  tabList,
  onClickTab,
}: {
  day: string;
  tabList: string[];
  onClickTab: any;
}) => {
  return (
    <div className={styles.tab}>
      {tabList.map((tab, index) => (
        <button
          key={index}
          type="button"
          onClick={onClickTab}
          role="tab"
          aria-selected={tab === day}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
