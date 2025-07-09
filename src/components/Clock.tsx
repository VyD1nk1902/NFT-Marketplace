import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Clock = ({ className }: { className: string }) => {
  return (
    <div className={`${className} relative p-[30px] font-space-mono flex flex-col gap-[30px] `}>
      <div className="absolute inset-0 bg-[#3B3B3B80] rounded-[20px]"></div>
      <div className="relative z-10">
        <p className="text-xs pb-5">Auction ends in:</p>
        <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 * 2.5} renderMap={[true, true, true, true]}>
          Finished
        </FlipClockCountdown>
      </div>
    </div>
  );
};

export default Clock;
