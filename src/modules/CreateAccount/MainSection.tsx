import CreateAccount1x from "@assets/CreateAccount/CreateAccount1x.png";
import CreateAccount2x from "@assets/CreateAccount/CreateAccount2x.png";
import CreateAccount from "@assets/CreateAccount/CreateAccountMain.png";
import { LockIcon, Email, User } from "@assets/Export/SvgExport";

import Inputs from "@components/Inputs";
import Buttons from "@components/Buttons";

import { useResponsive } from "@hooks/useResponsive";
import clsx from "clsx";

import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";

import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

const MainSection = () => {
  // Navigate
  const navigate = useNavigate();

  // Responsive
  const { isMobileSmall: MobileS, isMobile: Mobile, isTablet: Tablet, isDesktop: Desktop } = useResponsive();
  const WrapClass = clsx({
    "grid grid-cols-2 gap-[60px]": Desktop,
    "grid grid-cols-2 gap-[40px]": Tablet,
    "grid grid-rows-[232px, 1fr] gap-[30px]": Mobile,
    "flex flex-col gap-[30px]": MobileS,
  });
  const ImgClass = clsx({
    "w-full h-full aspect-square": Desktop,
    "w-full h-full aspect-2/3 object-cover": Tablet,
    "w-full aspect-4/3 object-cover": Mobile,
    "w-full aspect-square object-cover": MobileS,
  });
  const IconPasswordClass = clsx({
    "w-4 h-4": MobileS,
    "w-5 h-5": Mobile || Tablet,
    "w-6 h-6": Desktop,
  });
  const InputClass = clsx({
    "w-[150px]": MobileS,
    "w-[220px]": Tablet || Mobile || Desktop,
  });

  const InputWrapClass =
    "pl-5 py-4 bg-white rounded-[20px] w-[330px] max-[350px]:w-[250px] 2xl:w-[500px] h-[46px] 2xl:h-[80px] flex gap-3 items-center 2xl:text-2xl";

  // Handle SweetAlert2
  const handleShowAlert: SubmitHandler<FormData> = (data) => {
    // SweetAlert Responsive
    const windowWidth = window.innerWidth;

    let swalWidth: number | string = "90%";

    if (windowWidth > 1536) swalWidth = 1500;
    else if (windowWidth > 1280) swalWidth = 650;
    else if (windowWidth > 768) swalWidth = "60%";
    else if (windowWidth > 480) swalWidth = "85%";
    else swalWidth = "100%";

    const swalPadding = windowWidth <= 480 ? "0em" : "3em";

    // Responsive backdrop (vị trí, repeat, hoặc có thể ẩn ảnh nếu mobile)
    let backdropStr = "";
    if (windowWidth > 1536) {
      // 2xl, dùng repeat-x
      backdropStr = `
      rgba(0,0,123,0.5)
      url(/src/assets/CreateAccount/cat-gif.gif) 
      repeat-x
      50% 25%
    `;
    } else if (windowWidth >= 768) {
      // Tablet, desktop, ảnh ở góc trái trên
      backdropStr = `
      rgba(0,0,123,0.5)
      url(/src/assets/CreateAccount/cat-gif.gif)
      repeat-x
      bottom
    `;
    } else {
      // Mobile, cho ảnh ra góc phải dưới hoặc ẩn hoàn toàn
      backdropStr = `
      rgba(0,0,123,0.5)
      url(/src/assets/CreateAccount/cat-gif.gif)
      bottom
      no-repeat
    `;
      // Nếu muốn mobile không có mèo, chỉ dùng màu:
      // backdropStr = "rgba(0,0,123,0.4)";
    }

    Swal.fire({
      title: "Thanks For Registering!",
      html: `
      <pre style="text-align:left; white-space: pre-wrap; word-wrap: break-word;">Your Data: ${JSON.stringify(
        data,
        null,
        2
      )}</pre>
      `,
      width: swalWidth,
      padding: swalPadding,
      color: "#716add",
      background: "#003366",
      backdrop: backdropStr,
      confirmButtonText: "Back to Home",
    }).then(() => {
      reset();
      navigate("/");
    });
  };

  // Validation
  type FormData = {
    userName: string;
    emailRegister: string;
    password: string;
    confirmPassword: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<FormData>();
  // HandleSubmit with SweetAlert2
  const onSubmit: SubmitHandler<FormData> = (data) => handleShowAlert(data);
  console.log(errors);

  // Show pasword state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="pt-[100px] w-full overflow-hidden">
      <div className={WrapClass}>
        <div>
          <img
            src={CreateAccount}
            srcSet={`${CreateAccount1x} 1x, ${CreateAccount2x} 2x`}
            className={ImgClass}
            alt=""
          />
        </div>
        <div className="pb-[40px] px-[30px] md:py-[80px] lg:py-[100px]">
          {/* Title */}
          <div className="flex flex-col justify-center md:px-0 px-[30px] pb-[30px] 2xl:pb-[60px] md:pb-[40px] max-w-[460px] 2xl:max-w-[800px] mx-auto">
            <h2 className="hidden lg:block">Create Account</h2>
            <h3 className="lg:hidden">Create Account</h3>
            <p className="text-[16px] md:text-[22px] 2xl:text-[33px] pt-5">
              Welcome! enter your details and start creating, collecting and selling NFTs.
            </p>
          </div>

          {/* Input fields */}
          {/* UserName */}
          <form className="flex flex-col gap-[15px] 2xl:gap-[30px] items-center" onSubmit={handleSubmit(onSubmit)}>
            <div className={InputWrapClass}>
              <User className="w-5 h-5" />
              <Inputs
                id="userName"
                autoComplete="username"
                placeholder="Username"
                type="text"
                className={`text-bg-primary border-none 2xl:w-[360px] ${InputClass}`}
                {...register("userName", {
                  required: "Username is required",
                  max: {
                    value: 20,
                    message: "Username must not exceed 20 characters",
                  },
                  minLength: {
                    value: 5,
                    message: "Username must be at least 5 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9-]{3,}$/,
                    message: "Username can only contain letters, numbers, and hyphens",
                  },
                })}
              />
            </div>
            {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>}

            {/* Email */}
            <div className={InputWrapClass}>
              <Email className="w-5 h-5" />
              <Inputs
                id="emailRegister"
                autoComplete="email"
                placeholder="Email Address"
                type="email"
                className={`text-bg-primary border-none 2xl:w-[360px] ${InputClass}`}
                {...register("emailRegister", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$/g,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.emailRegister && <p className="text-red-500 text-sm mt-1">{errors.emailRegister.message}</p>}

            {/* Password */}
            <div className={InputWrapClass}>
              <LockIcon className="w-5 h-5" />
              <Inputs
                id="password"
                autoComplete="new-password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                className={`text-bg-primary border-none 2xl:w-[360px] ${InputClass}`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  maxLength: {
                    value: 40,
                    message: "Password must not exceed 40 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message: "Password must contain at least one letter, one number, and one special character",
                  },
                })}
              />
              <button
                type="button"
                className="text-action cursor-pointer max-[350px]:ml-0 ml-0 sm:ml-0 2xl:ml-2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <IoEye className={IconPasswordClass} /> : <IoEyeOff className={IconPasswordClass} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

            {/* Confirm Password */}
            <div className={InputWrapClass}>
              <LockIcon className="w-5 h-5" />
              <Inputs
                id="confirmPassword"
                autoComplete="new-password"
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                className={`text-bg-primary border-none 2xl:w-[360px] ${InputClass}`}
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) => value === getValues("password") || "Passwords do not match",
                })}
              />
              <button
                type="button"
                className="text-action cursor-pointer max-[350px]:ml-0 ml-0 sm:ml-0 2xl:ml-2"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
                  <IoEye className={IconPasswordClass} />
                ) : (
                  <IoEyeOff className={IconPasswordClass} />
                )}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}

            {/* Submit Button */}
            <Buttons
              className="w-[330px] 2xl:hidden max-[350px]:w-[260px] mt-7 md:mx-[-14px] mx-auto lg:mx-auto"
              size="tertiary"
              background="color"
              type="submit"
            >
              Create account
            </Buttons>
            {/* Buttons Responsive 2xl */}
            <Buttons
              className="w-[500px] text-2xl hidden 2xl:block mx-auto mt-10 text-center"
              size="primary"
              background="color"
              type="submit"
            >
              Create account
            </Buttons>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
