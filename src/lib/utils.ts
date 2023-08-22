import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { note, notes } from "@/types";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
axios.defaults.withCredentials = true;
type formData = {
  [x: string]: string;
};
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function login(formData: formData) {
  const response = await axios({
    method: "POST",
    url: "http://localhost:8080/api/auth/login",
    withCredentials: true,
    data: formData,
  });
  console.log(response.data, response.status);

  return response.data;
}

export const inputChangeHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setter: Dispatch<SetStateAction<formData>>
) => {
  setter((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};

export const getAllNotes = async (token: RequestCookie | undefined) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/api/functions/get_notes",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllTodos = async (token: RequestCookie | undefined) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/api/functions/get_todos",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(token);
    console.log(err);
  }
};

export const getNotesById = async (
  token: RequestCookie | undefined,
  id: string
) => {
  try {
    const response = await axios({
      url: "http://localhost:8080/api/functions/notes/" + id,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
    });
    return response.data.note as note;
  } catch (err) {
    console.log(err);
  }
};
export const getAuthStatus = async () => {
  const response = await axios.get("http://localhost:8080/api/functions");
  return response.data;
};

export const logout = async () => {
  const response = await axios.get("http://localhost:8080/api/auth/logout");
  return response.data;
};
