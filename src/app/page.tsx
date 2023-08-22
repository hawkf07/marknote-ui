"use client";
import { Button } from "@/components/ui/button";
import { FormField, Form, FormItem, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { inputChangeHandler, login } from "@/lib/utils";
import { redirect } from "next/dist/server/api-utils";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const form = useForm();
  const [formData, setFormData] = useState({});
  return (
    <main className="flex min-h-screen flex-col items-center h-screen p-3 md:p-12">
      <header className="prose text-center ">
        <h2>Welcome to MarkNote</h2>
        <h3 className="capitalize">
          Create and Manage your todos and notes with ease
        </h3>
      </header>
      <div className="bg-white border border-gray-200 p-5 md:p-24 rounded-xl w-full md:w-10/12 ">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const loginStatus = await login(formData)
              .then((response) => {
                return response;
              })
              .catch((err) => err);

            if (loginStatus) {
              document.location = "/dashboard";
            }
          }}
          className="flex flex-col  place-items-center w-full gap-2"
        >
          <header className="prose">
            <h2>Login/Register</h2>
          </header>
          <div className="flex-col flex gap-2 w-full md:w-1/2 ">
            <Input
              onChange={(e) => inputChangeHandler(e, setFormData)}
              placeholder="username"
              name="name"
            />
            <Input
              onChange={(e) => inputChangeHandler(e, setFormData)}
              placeholder="password"
              name="password"
              type="password"
            />
            <Button>Login</Button>
            <Button type="button" variant={"secondary"}>
              Create New Account
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
