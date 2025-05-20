import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import BookTemplate from "./BookTemplate";



export default function RecommendedBooks({books}: any) {
  const api: string =
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended";

  const [books, setBooks] = useState<any[]>([]);

  async function getBooks(): Promise<any> {
    try {
      const { data } = await axios.get(api);
      console.log(data);
      setBooks(data);
    } catch (error: any) {
      console.error("Error fetching recommended books", error.message);
      throw error;
    }
  }

  

  function renderBooks() {

    // return books?.map((book: any) => (
    //   <BookTemplate
    //     key={book.title}
    //     imgLink={book.imageLink}
    //     title={book.title}
    //     author={book.author}
    //     subTitle={book.subTitle}
    //     subscriptionRequired={book.subscriptionRequired}
    // />
    // ));
  }

  // useEffect(() => {
  //   getBooks();
  // }, []);

  

  return (
    <div className="for-you__recommended--books flex overflow-x-auto gap-[16px] mb-[32px] snap-x">
      {
        books?.map((book: any) => {
      <BookTemplate
        key={book.title}
        imgLink={book.imageLink}
        title={book.title}
        author={book.author}
        subTitle={book.subTitle}
        subscriptionRequired={book.subscriptionRequired}
    />
})
        
      }
      {console.log(books)}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended");
  const data = await res.json();

  return {
    props: {
      books : data
    }
  }
}
