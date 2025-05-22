import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import BookTemplate from "./BookTemplate";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

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

type Data = BookProps[]

export const getServerSideProps = (async () => {
  const res = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended");
  const data: Data = await res.json();

  console.log(data);

  return {
    props: {
      books : data
    }
  }
}) satisfies GetServerSideProps<{ books: BookProps[] }>

export default function RecommendedBooks({books}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  
  console.log(books)

  return (
    <div className="for-you__recommended--books flex overflow-x-auto gap-[16px] mb-[32px] snap-x">
      {
        books?.map((book: BookProps) => (
      <BookTemplate
        key={book.title}
        imgLink={book.imageLink}
        title={book.title}
        author={book.author}
        subTitle={book.subTitle}
        subscriptionRequired={book.subscriptionRequired}
    />
    ))
      }
    </div>
  );
}


