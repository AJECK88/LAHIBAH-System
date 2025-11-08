"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const TableSearchBar = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use FormData to safely grab the input value
    const formData = new FormData(e.currentTarget);
    const value = formData.get("search") as string;

    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`${window.location.pathname}?${params.toString()}`);

  };

  return (
    <form
      onKeyUp={handleSubmit}
      className="flex md:flex items-center justify-start gap-2 text-xs rounded-full ring-[1.5px] ring-gray-500 px-2"
    >
      <button type="submit">
        <Image src="/search.png" alt="search" width={14} height={14} />
      </button>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </form>
  );
};

export default TableSearchBar;
