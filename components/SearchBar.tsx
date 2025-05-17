export default function SearchBar() {
  return (
    <div className="search__background bg-[#fff] border-b border-[#e1e7ea] h-[80px]">
      <div className="search__wrapper flex justify-between items-center px-[32px] max-w-[1070px] h-full mx-auto relative">
        <figure>

        </figure>
        <div className="search__content flex items-center gap-[24px] max-w-[340px] w-full">
          <div className="search flex items-center w-full">
            <div className="search__input--wrapper relative gap-[8px] flex items-center w-full">
              <input
                type="text"
                placeholder="Search for books"
                className="search__input h-[40px] w-full px-[16px] bg-[#f1f6f4] text-[#042330] border-[2px] border-[#e1e7ea] outline-none rounded-lg"
              />
              <div className="search__icon flex items-center absolute h-full right-[8px] pl-[8px] justify-end border-l-[#e1e7ea] border-l-[2px]">
                <svg
                  stroke="#03314b"
                  fill="#03314b"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
