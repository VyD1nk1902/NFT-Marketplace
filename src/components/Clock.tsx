import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

interface ClockProps {
  time: number;
  day: boolean;
  className: string;
}

const Clock = ({ className, day, time }: ClockProps) => {
  return (
    <div className="relative p-[30px] font-space-mono flex flex-col gap-[30px] ">
      <div className="absolute inset-0 bg-[#3B3B3B80] rounded-[20px]"></div>
      <div className="relative z-10">
        <p className="text-xs pb-5">Auction ends in:</p>
        <FlipClockCountdown to={time} className={className} renderMap={[day, true, true, true]}>
          Finished
        </FlipClockCountdown>
      </div>
    </div>
  );
};

export default Clock;
