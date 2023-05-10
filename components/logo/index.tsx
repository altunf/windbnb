"use client";
import Image from "next/image";
import { stays } from "@/services";
import { useFilterContext } from "@/context";

const Logo = () => {
  const { setLastFilter }: any = useFilterContext();
  return (
    <Image
      src="/logo.png"
      alt="..."
      height={21}
      width={100}
      onClick={() => setLastFilter(stays)}
    />
  );
};

export default Logo;
