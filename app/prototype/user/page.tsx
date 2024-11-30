"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/ui/Header";
import UserManager from "@/lib/UserManager";

export default function UserProfilePage() {
  const [user, setUser] = useState(UserManager.getInstance().getCurrentUser());
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  const handleLogout = () => {
    UserManager.getInstance().logout();
    router.push("/login");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
          User Profile
        </h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-gray-900">
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Email address
                </dt>
                <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
              </div>
            </dl>
            <div className="mt-8">
              <Button onClick={handleLogout} className="w-full text-black">
                Log Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
