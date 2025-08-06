import clsx from "clsx";

interface TabItemProps<T extends string> {
  title: string;
  tabBaseClass?: string;
  count?: number | null | undefined;
  tabKey: T;
  activeTab: T;
  onTabClick: (tabName: T) => void;
}

const TabItem = <T extends string>({ title, tabBaseClass, count, onTabClick, tabKey, activeTab }: TabItemProps<T>) => {
  const isActive = activeTab === tabKey;
  return (
    <div
      className={clsx(tabBaseClass, {
        "border-b-4 border-b-caption-label text-white font-[600]": isActive,
        "border-none text-caption-label font-normal": !isActive,
      })}
    >
      <button onClick={() => onTabClick(tabKey)} className="w-full flex gap-4 justify-center">
        <h5 className="xl:block hidden">{title}</h5>
        <p className="block xl:hidden">{title}</p>
        {typeof count === "number" && (
          <div
            className={clsx(
              "font-space-mono rounded-[20px] px-1.5 py-[1px] xl:px-2.5 xl:py-[5px] text-white max-sm:hidden",
              {
                "bg-caption-label": isActive,
                "bg-bg-secondary": !isActive,
              }
            )}
          >
            {count ?? 0}
          </div>
        )}
      </button>
    </div>
  );
};

export default TabItem;
