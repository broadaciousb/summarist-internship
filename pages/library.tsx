import BookTemplate from "@/components/BookTemplate";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import SideBarNav from "@/components/SideBarNav";
import SideBarLogo from "@/components/SideBarLogo";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";
import { auth, db } from "@/Firebase/firebase.config";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import MobileSideBarNav from "@/components/MobileSideBar";

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

export default function library() {
  const user = useAppSelector( (state) => state.user.currentUser);
  const isSideBarOpen: boolean = useAppSelector(
    (state) => state.toggleSideBar.isSideBarOpen
  );
  const [myBooks, setMyBooks] = useState<Data>([]);

  useEffect(() => {
    if (!user) return;

    const unsubscribe = onSnapshot(
      collection(db, "users", user?.uid, "library"),
      (snapshot) => {
        const books = snapshot.docs.map((doc) => ({
          id: doc.data().id,
          author: doc.data().author,
          title: doc.data().title,
          subTitle: doc.data().subTitle,
          imageLink: doc.data().imageLink,
          audioLink: doc.data().audioLink,
          totalRating: doc.data().totalRating,
          averageRating: doc.data().averageRating,
          keyIdeas: doc.data().keyIdeas,
          type: doc.data().type,
          status: doc.data().status,
          subscriptionRequired: doc.data().subscriptionRequired,
          summary: doc.data().summary,
          tags: doc.data().tags,
          bookDescription: doc.data().bookDescription,
          authorDescription: doc.data().authorDescription,
        }));
        setMyBooks(books);
      }
    );

    return unsubscribe;
  }, [user]);

  return (
    <div className="flex flex-col m-[0] md:ml-[200px] w-[calc(100% - 200px)]">
      <div className="sidebar bg-[#f7faf9] w-[200px] invisible md:visible fixed top-[0] bottom-[60px] left-[0] z-[1000]">
        <SideBarNav />
      </div>
      {/* SMALL SCREEN SIDEBAR */}
      {isSideBarOpen && <MobileSideBarNav />}
      {/* SEARCH BAR */}
      <SearchBar />
      <div className="row">
        <div className="w-full px-[40px]">
          <div className="container px-[40px]">
            <div className="saved__books">
              <div className="title text-[22px] text-[#032b41] font-[700] mb-[16px]">
                Saved Books
              </div>
              <div className="for-you__sub--title text-[#394547] mb-[16px] font-[300]">
                4 Items
              </div>
              <div className="saved__books--list flex overflow-x-auto gap-[16px] mb-[32px] snap-x">
                {myBooks?.map((book: BookProps) => (
                  <BookTemplate
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
