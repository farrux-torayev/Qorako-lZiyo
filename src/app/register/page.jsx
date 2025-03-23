"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function Login() {
  const router = useRouter();
  return (
    <>
    <Navbar/>
      <div className="w-[350px] m-auto my-20">
        <h2 className="text-xl font-bold text-center mb-4">Welcome Back!</h2>
        <p className="text-gray-600 mb-4 text-center">
          Please register in to continue.
        </p>

        <Card className="relative w-[350px] overflow-hidden">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Enter your credentials to access your.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input id="name" type="name" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {/* Register bosilganda /register sahifasiga o'tish */}
            <Button variant="outline" onClick={() => router.push("#")}>
              Register
            </Button>

            {/* Login bosilganda /login sahifasiga o'tish */}
            <Button onClick={() => router.push("/login")}>Login</Button>
          </CardFooter>
          <BorderBeam duration={8} size={100} />
        </Card>
      </div>
    </>
  );
}
