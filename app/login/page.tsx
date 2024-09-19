"use client";

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocalLogin from "@/components/social-login";

export default function LogIn() {
  const onClick = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: "kamja",
        password: "1234",
      }),
    });
    console.log(await response.json());
  };
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with Email and Password.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="email" placeholder="Email" required errors={[""]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[""]}
        />
      </form>
      <span onClick={onClick}>
        <FormButton loading={false} text="Log in" />
      </span>
      <SocalLogin />
    </div>
  );
}