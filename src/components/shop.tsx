import React, { useEffect, useState } from "react";
import ShopItem from "./shopItem";
import Header from "./header";
import Footer from "./footer";

type Shop = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    imageLinks: {
      thumbnail: string;
    };
    categories?: string[];
    publishedDate?: string;
  };
};

const Shop = () => {
  const [books, setBooks] = useState<Shop[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Shop[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [booksPerPage] = useState<number>(10);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20&key="
        );
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data.items);
        setFilteredBooks(data.items);

        const allCategories = data.items
          .flatMap((book: Shop) => book.volumeInfo.categories || [])
          .filter(
            (category, index, self) =>
              category && self.indexOf(category) === index
          );

        setCategories(allCategories);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchBooks();
  }, []);

  const filterBooks = () => {
    let filtered = books;

    if (selectedCategory) {
      filtered = filtered.filter((book) =>
        book.volumeInfo.categories?.some((cat) =>
          cat.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      );
    }

    if (author) {
      filtered = filtered.filter((book) =>
        book.volumeInfo.authors?.some((auth) =>
          auth.toLowerCase().includes(author.toLowerCase())
        )
      );
    }

    if (year) {
      filtered = filtered.filter((book) =>
        book.volumeInfo.publishedDate?.includes(year)
      );
    }

    // sort
    if (sortOption === "author") {
      filtered = filtered.sort((a, b) =>
        (a.volumeInfo.authors?.[0] || "").localeCompare(
          b.volumeInfo.authors?.[0] || ""
        )
      );
    } else if (sortOption === "title") {
      filtered = filtered.sort((a, b) =>
        a.volumeInfo.title.localeCompare(b.volumeInfo.title)
      );
    }

    setFilteredBooks(filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    filterBooks();
  }, [selectedCategory, author, year, sortOption]);

  if (error) {
    return <div>Error fetching books: {error}</div>;
  }

  // pagination
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />
      <div className="book-section">
        <h1>Books</h1>
        <p>
          Welcome to Modern Reads Bookshop, your haven for discovering the
          latest and greatest in literature. Nestled in the heart of the city,
          our bookshop offers a curated collection of contemporary fiction,
          non-fiction, and children's books. Whether you're searching for the
          newest bestseller, an inspiring biography, or a captivating novel, our
          shelves are brimming with a diverse selection to satisfy every
          reader's taste. Our friendly and knowledgeable staff are always on
          hand to offer personalized recommendations and help you find your next
          favorite book. Join us for regular author events, book signings, and
          reading groups to connect with fellow book lovers. Step into Modern
          Reads Bookshop and embark on your next literary adventure today.
        </p>
        <div className="book-shop">
          <div className="filters">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="author">Author</option>
              <option value="title">Title</option>
            </select>
          </div>
          <div className="book-list">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <ShopItem
                  key={book.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  thumbnail={book.volumeInfo.imageLinks?.thumbnail}
                  onAddToCart={function (id: string): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              ))
            ) : (
              <div>Loading books...</div>
            )}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={index + 1 === currentPage ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
