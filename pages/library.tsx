import BookTemplate from "@/components/BookTemplate";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import SideBarNav from "@/components/SideBarNav";
import SideBarLogo from "@/components/SideBarLogo";
import SearchBar from "@/components/SearchBar";
import Link from "next/link"

interface BookProps {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

type Data = BookProps[];

export const getServerSideProps = (async () => {
  const savedBooksResponse = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended');
  const savedBooksData = await savedBooksResponse.json();

  const finishedBooksResponse = await fetch('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested');
  const finishedBooksData = await finishedBooksResponse.json();

  return {
    props: {
      savedBooks: savedBooksData,
      finishedBooks: finishedBooksData,
    },
  };

}) satisfies GetServerSideProps<{
  savedBooks: BookProps[];
  finishedBooks: BookProps[];
}>;

export default function library({
  savedBooks,
  finishedBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  return (
    <div className="flex flex-col ml-[200px] w-[calc(100% - 200px)]">
      <div className="sidebar bg-[#f7faf9] w-[200px] fixed top-[0] h-[100vh] left-[0] z-[1000]">
        <SideBarNav />
      </div>
      <SearchBar />
      <div className="row">
        <div className="w-full px-[40px]">
          
        </div>
      </div>
    </div>
  )
}