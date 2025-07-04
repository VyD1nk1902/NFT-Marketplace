import Inputs from "@components/Inputs";
import Buttons from "@components/Buttons";
import Photo from "@assets/Homepage/Subcribe/Photo.png";
import Photo2x from "@assets/Homepage/Subcribe/Photo@2x.png";
import { Email } from "@assets/Svg/SvgExport";

const Subcribe = () => {
  return (
    <section className="content-wrapper">
      <div className="bg-bg-secondary p-[60px] rounded-[20px] flex gap-[80px]">
        <div>
          <img src={Photo} srcSet={`${Photo} 1x , ${Photo2x}`} alt="" />
        </div>
        <div>
          <h3 className="capitalize">
            Join our weekly <br /> digest
          </h3>
          <p className="capitalize text-[22px] pt-2.5 pb-10">
            Get exclusive promotions & updates
            <br /> straight to your inbox.
          </p>
          <div className="bg-white rounded-[20px] flex gap-5">
            <div>
              <Inputs
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email here..."
                type="text"
                className=" bg-white text-bg-primary rounded-[20px] border-none  "
              />
            </div>
            <div>
              <Buttons className="w-[200px] " size="secondary" background="color" link="#">
                <Email className="fill-text w-5 h-5" /> Subcribe
              </Buttons>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subcribe;
