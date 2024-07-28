import { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import React from "react";

type PopularProps = {
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

const Popular = () => {
  const [popularBooks, setPopularBooks] = useState<PopularProps[]>([]);
  const [literaryNews, setLiteraryNews] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPopularBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&orderBy=relevance&maxResults=10&key=
`
        );

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const data = await response.json();
        setPopularBooks(data.items);
      } catch (error: any) {
        setError(error.message);
      }
    };

    const fetchLiteraryNews = async () => {
      // Simulated fetch for literary news. Replace this with an actual API if available.
      setLiteraryNews([
        "Award-winning author releases new novel",
        "Book-to-movie adaptations to watch this year",
        "Literary festivals and events to attend",
      ]);
    };

    fetchPopularBooks();
    fetchLiteraryNews();
  }, []);

  if (error) {
    return <div>Error fetching data: {error}</div>;
  }
  return (
    <>
      <Header />
      <div className="popular-container">
        <h1>Popular Books</h1>
        <div className="book-list">
          {popularBooks.length > 0 ? (
            popularBooks.map((book) => (
              <div key={book.id} className="book-item">
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail}
                  alt={book.volumeInfo.title}
                />
                <div>
                  <h2>{book.volumeInfo.title}</h2>
                  <p>{book.volumeInfo.authors?.join(", ")}</p>
                </div>
              </div>
            ))
          ) : (
            <div>Loading popular books...</div>
          )}
        </div>

        <h1>What's Up in Literary Media</h1>
        <div className="literary-news">
          {literaryNews.length > 0 ? (
            literaryNews.map((newsItem, index) => (
              <div key={index} className="news-item">
                <p>{newsItem}</p>
              </div>
            ))
          ) : (
            <div>Loading news...</div>
          )}
        </div>
        <h2>About Our Collection</h2>
        <p>
          Our collection spans various genres and categories to cater to readers
          of all ages and interests. From contemporary fiction to classic
          literature, from thrilling mysteries to insightful non-fiction, we
          have it all. Our curated selection includes award-winning titles,
          bestsellers, and works by emerging authors.
        </p>
        <p>
          We also offer a range of children's books, young adult novels, and
          educational resources. Whether you're looking for a heartwarming story
          for bedtime or an exciting adventure to spark a child's imagination,
          our shelves are filled with books that will captivate and inspire
          young readers.
        </p>

        <h2>Literary Events and Community</h2>
        <p>
          At our bookshop, we believe in fostering a love for reading and
          building a community of book lovers. We regularly host author
          signings, book launches, reading sessions, and literary discussions.
          These events provide a platform for readers to engage with their
          favorite authors and fellow book enthusiasts.
        </p>
        <p>
          Join our book clubs to explore different genres, share your thoughts,
          and discover new perspectives. Whether you're a casual reader or a
          literary critic, our community events are designed to enrich your
          reading experience.
        </p>

        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter to stay updated on the latest arrivals,
          upcoming events, and special offers. Follow us on social media for
          book recommendations, reading tips, and behind-the-scenes glimpses
          into the world of books.
        </p>
        <p>
          Thank you for being a part of our bookshop community. We look forward
          to sharing the joy of reading with you!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Popular;
