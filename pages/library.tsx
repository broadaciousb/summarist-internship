// NEXT
import Link from "next/link";
// REACT
import { useEffect, useState } from "react";
// REDUX
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { increment as openModal } from "@/redux/ToggleModalSlice";
// FIREBASE
import { auth, db } from "@/Firebase/firebase.config";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
// COMPONENTS
import BookTemplate from "@/components/BookTemplate";
import SideBarNav from "@/components/SideBarNav";
import SearchBar from "@/components/SearchBar";
import MobileSideBarNav from "@/components/MobileSideBar";
import LoadScreen from "@/components/LoadScreen";
import { startLoading, stopLoading } from "@/redux/LoadingSlice";
import { finished } from "stream";

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
  const user = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const isSideBarOpen: boolean = useAppSelector(
    (state) => state.toggleSideBar.isSideBarOpen
  );
  const [savedBooks, setSavedBooks] = useState<Data>([]);
  const [finishedBooks, setFinishedBooks] = useState<Data>([]);
  const loading = useAppSelector((state) => state.loading.loading);

  useEffect(() => {
  if (!user) return;

  const unsubscribeSaved = onSnapshot(
    collection(db, "users", user.uid, "library"),
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
      setSavedBooks(books);
    }
  );

  const unsubscribeFinished = onSnapshot(
    collection(db, "users", user.uid, "finished"),
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
      setFinishedBooks(books);
    }
  );

  // CLEANUP — unsubscribe both listeners
  return () => {
    unsubscribeSaved();
    unsubscribeFinished();
  };
}, [user]);


  useEffect(() => {
    dispatch(stopLoading());
  }, [dispatch]);

  return (
    <div className="flex flex-col m-[0] md:ml-[200px] w-[calc(100% - 200px)]">
      {loading && <LoadScreen />}
      <div className="sidebar bg-[#f7faf9] w-[200px] invisible md:visible fixed top-[0] bottom-[60px] left-[0] z-[1000]">
        <SideBarNav />
      </div>
      {/* SMALL SCREEN SIDEBAR */}
      {isSideBarOpen && <MobileSideBarNav />}
      {/* SEARCH BAR */}
      <SearchBar />
      <div className="row">
        <div className="container">
          {!user ? (
            <div className="settings__login--wrapper max-w-[460px] flex flex-col items-center my-0 mx-auto">
              <img
                className="w-full h-full"
                src="https://summarist.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogin.e313e580.png&w=1080&q=75"
                alt=""
              />
              <div className="settings__login--text text-2xl font-[700] text-[] text-center mb-[16px]">
                Log in to your account to read and listen to the book
              </div>
              <button
                onClick={() => {
                  dispatch(openModal());
                }}
                className="btn max-w-[180px] text-[#032b41] bg-[#2bd97c] hover:bg-[#20ba68]"
              >
                Login
              </button>
            </div>
          ) : (
            <>
            <div className="saved__books">
              <div className="title text-[22px] text-[#032b41] font-[700] mb-[16px]">
                Saved Books
              </div>
              <div className="for-you__sub--title text-[#394547] mb-[16px] font-[300]">
                {
                  savedBooks.length !== 1 ? (
                    `${savedBooks.length} Items`
                  ) : (
                    `${savedBooks.length} Item`
                  )
                }
              </div>
              <div className="saved__books--list flex overflow-x-auto gap-[16px] mb-[32px] snap-x">
                {savedBooks?.map((book: BookProps) => (
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
            <div className="saved__books">
              <div className="title text-[22px] text-[#032b41] font-[700] mb-[16px]">
                Finished Books
              </div>
              <div className="for-you__sub--title text-[#394547] mb-[16px] font-[300]">
                {
                  finishedBooks.length !== 1 ? (
                    `${finishedBooks.length} Items`
                  ) : (
                    `${finishedBooks.length} Item`
                  )
                }
              </div>
              <div className="saved__books--list flex overflow-x-auto gap-[16px] mb-[32px] snap-x">
                {finishedBooks?.map((book: BookProps) => (
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
