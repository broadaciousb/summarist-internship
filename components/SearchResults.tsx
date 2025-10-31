import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import SearchBookLink from "./SearchBookLink";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import LoadingSkeleton from "./LoadingSkeleton";

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

export default function SearchResults({ searchRef }: any) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(search: string) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${search}`
      );
      const data = await res.json();
      console.log(data);
      setResults(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  }

  useEffect(() => {
    handleSearch(searchRef);
  }, [searchRef]);

  return (
    <div className="search__books--wrapper z-[100] ml-auto flex flex-col absolute right-[24px] top-[104px] overflow-y-auto w-full max-w-[440px] max-h-[640px] p-[16px] bg-[#fff] border border-[#e1e7ea]">
      {loading
        ? new Array(5).fill(0).map(() => (
            <div className="p-[16px] gap-[24px] h-[120px]">
              <LoadingSkeleton />
            </div>
          ))
        : results?.map((book: BookProps) => (
            <SearchBookLink
              id={book.id}
              author={book.author}
              title={book.title}
              subTitle={book.subTitle}
              imageLink={book.imageLink}
              audioLink={book.audioLink}
              totalRating={book.totalRating}
              averageRating={book.averageRating}
              keyIdeas={book.keyIdeas}
              type={book.type}
              status={book.status}
              subscriptionRequired={book.subscriptionRequired}
              summary={book.summary}
              tags={book.tags}
              bookDescription={book.bookDescription}
              authorDescription={book.authorDescription}
              key={book.title}
            />
          ))}
    </div>
  );
}
