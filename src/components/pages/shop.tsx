import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import bookStore from "../../stores/bookStore";
import cartStore from "../../stores/cartStore";
import ShopItem from "../ui/shopItem";
import Header from "../layout/header";
import Footer from "../layout/footer";

const Shop = observer(() => {
  useEffect(() => {
    bookStore.fetchBooks();
  }, []);

  return (
    <>
      <Header />
      <div className="shop">
        <h1 className="shop__title">Books</h1>
        <p className="shop__description">Welcome to Modern Reads Bookshop...</p>

        <div className="shop__filters">
          <select
            value={bookStore.selectedCategory}
            onChange={(e) =>
              bookStore.setFilters(
                e.target.value,
                bookStore.author,
                bookStore.year,
                bookStore.sortOption
              )
            }
          >
            <option value="">All Categories</option>
            {bookStore.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Author"
            value={bookStore.author}
            onChange={(e) =>
              bookStore.setFilters(
                bookStore.selectedCategory,
                e.target.value,
                bookStore.year,
                bookStore.sortOption
              )
            }
          />
          <input
            type="text"
            placeholder="Year"
            value={bookStore.year}
            onChange={(e) =>
              bookStore.setFilters(
                bookStore.selectedCategory,
                bookStore.author,
                e.target.value,
                bookStore.sortOption
              )
            }
          />

          <select
            value={bookStore.sortOption}
            onChange={(e) =>
              bookStore.setFilters(
                bookStore.selectedCategory,
                bookStore.author,
                bookStore.year,
                e.target.value
              )
            }
          >
            <option value="">Sort By</option>
            <option value="author">Author</option>
            <option value="title">Title</option>
          </select>
        </div>

        <div className="shop__list">
          {bookStore.paginatedBooks.length > 0 ? (
            bookStore.paginatedBooks.map((book) => (
              <ShopItem
                key={book.id}
                title={book.title}
                authors={book.authors}
                id={book.id}
                price={book.price}
                thumbnail={book.coverImage}
                onAddToCart={() =>
                  cartStore.addToCart({
                    id: book.id,
                    title: book.title,
                    price: book.price,
                    quantity: 1,
                    image: book.coverImage,
                  })
                }
              />
            ))
          ) : (
            <div>Loading books...</div>
          )}
        </div>

        {bookStore.totalPages > 1 && (
          <div className="shop__pagination">
            {Array.from({ length: bookStore.totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => bookStore.setPage(index + 1)}
                className={index + 1 === bookStore.currentPage ? "active" : ""}
                aria-label={`Go to page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
});

export default Shop;
