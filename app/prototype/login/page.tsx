"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { login } from "./auth";
import { Header } from "@/components/ui/Header";

export default function LoginPage() {
  const router = useRouter();
  const [state, setState] = useState<{
    success: boolean;
    error?: string;
  } | null>(null);
  const [isPending, setIsPending] = useState(false);

  const action = async (formData: FormData) => {
    setIsPending(true);
    const result = await login(formData);
    setState(result);
    setIsPending(false);
  };

  if (state?.success) {
    router.push("/user");
    return null;
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Header />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-900">
            Login to Psyche
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={action} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 bg-white text-gray-900"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 bg-white text-gray-900"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Logging in..." : "Log In"}
            </Button>
            {state?.error && (
              <p className="text-red-500 text-sm text-center">{state.error}</p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
