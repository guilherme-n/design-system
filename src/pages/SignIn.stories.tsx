import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";
import { SignIn } from "./SignIn";

export default {
  title: "Pages/Sign in",
  component: SignIn,
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res) => {
          return res();
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailField = canvas.getByPlaceholderText("Enter your email");
    const passwordField = canvas.getByPlaceholderText("********");
    userEvent.type(emailField, "myemail@gmail.com");
    userEvent.type(passwordField, "12345678");
    userEvent.click(canvas.getByRole("button"));

    await waitFor(() => {
      expect(canvas.getByText("You are signed in")).toBeInTheDocument();
    });
  },
};
