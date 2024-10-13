import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";

interface InputProps {
  name: string;
  errors?: string[];
}

// export default function Input({
const _Input = (
  {
    errors = [],
    name,
    ...rest
  }: InputProps & InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) => {
  // console.log(rest);
  return (
    <div className="flex flex-col gap-2">
      <input
        ref={ref}
        name={name}
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
};

export default forwardRef(_Input);
