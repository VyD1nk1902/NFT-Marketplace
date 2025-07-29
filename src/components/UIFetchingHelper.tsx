import { TbFidgetSpinner } from "react-icons/tb";

export const Spinner = ({ className, classNameIcon }: { className: string; classNameIcon: string }) => (
  <section className={className}>
    <TbFidgetSpinner className={classNameIcon} />
  </section>
);

export const ErrorBox = ({ message, className }: { className: string; message: string }) => (
  <section className={className}>
    <p className="text-xl">{message}</p>
  </section>
);

export const EmptyBox = ({ message, className }: { className: string; message: string }) => (
  <section className={className}>
    <p className="text-xl text-caption-label">{message}</p>
  </section>
);
