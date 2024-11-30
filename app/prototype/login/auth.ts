"use server";

import { cookies } from "next/headers";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // Here you would typically validate the user credentials against your database
  // For this example, we'll just check for a demo email and password
  if (email === "user@example.com" && password === "password") {
    // Set a cookie to maintain the session
    cookies().set("user", email, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return { success: true };
  }

  return { success: false, error: "Invalid credentials" };
}

export function logout() {
  cookies().delete("user");
}

export function getUser() {
  const email = cookies().get("user")?.value;
  if (!email) return null;

  // In a real application, you would fetch this data from a database
  return {
    name: "John Doe",
    email: email,
    company: "Acme Inc.",
    position: "Software Developer",
  };
}
