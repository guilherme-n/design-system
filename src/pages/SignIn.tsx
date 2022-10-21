import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";

import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import axios from "axios";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();

    await axios.post("/sessions", {
      email: "myemail@gmail.com",
      password: "12345678",
    });

    setIsUserSignedIn(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <header className="flex items-center flex-col">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>
        <Text size="lg" className="text-gray-400 mt-1">
          Sign in and get started
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
      >
        {isUserSignedIn && <Text>You are signed in</Text>}

        <label htmlFor="email" className="flex flex-col gap-2">
          <Text className="font-semibold">Email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-2">
          <Text className="font-semibold">Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="********"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Remember me for 30 days
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Log in to the platform
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text size="sm" asChild>
          <a href="#" className="underline hover:text-gray-200 text-gray-400">
            Forgot your password?
          </a>
        </Text>
        <Text size="sm" asChild>
          <a href="#" className="underline hover:text-gray-200 text-gray-400">
            No account? create yours now!
          </a>
        </Text>
      </footer>
    </div>
  );
}
