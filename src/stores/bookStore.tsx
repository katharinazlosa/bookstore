import { makeAutoObservable } from "mobx";

export type Book = {
  id: string;
  title: string;
  authors: string[];
  coverImage: string;
  subject?: string[];
  firstPublishYear?: number;
  price: number;
  quote?: string;
};

class BookStore {
  books: Book[] = [];
  filteredBooks: Book[] = [];
  categories: string[] = [];
  selectedCategory: string = "";
  author: string = "";
  year: string = "";
  sortOption: string = "";
  currentPage: number = 1;
  booksPerPage: number = 10;
  currentIndex: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchBooks() {
    try {
      const response = await fetch(
        "https://openlibrary.org/search.json?q=fiction&limit=60"
      );
      if (!response.ok) throw new Error("Failed to fetch books");

      const data = await response.json();
      if (!data.docs) throw new Error("No books found");

      this.books = data.docs.map((book: any) => ({
        id: book.key,
        title: book.title,
        authors: book.author_name || ["Unknown"],
        coverImage: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/128x192?text=No+Image",
        subject: book.subject || [],
        firstPublishYear: book.first_publish_year,
        quote: book.first_sentence || "No quote available",
        price: parseFloat((Math.random() * 20 + 5).toFixed(2)), // Random price
      }));

      this.categories = [
        ...new Set(this.books.flatMap((b) => b.subject || [])),
      ];
      this.applyFilters();
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  setFilters(category: string, author: string, year: string, sort: string) {
    this.selectedCategory = category;
    this.author = author;
    this.year = year;
    this.sortOption = sort;
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.books];

    // Filter by selected category
    if (this.selectedCategory) {
      filtered = filtered.filter((b) =>
        b.subject?.some((subject) =>
          subject.toLowerCase().includes(this.selectedCategory.toLowerCase())
        )
      );
    }

    // Filter by author name (case insensitive)
    if (this.author) {
      filtered = filtered.filter((b) =>
        b.authors.some((a) =>
          a.toLowerCase().includes(this.author.toLowerCase())
        )
      );
    }

    // Filter by year
    if (this.year) {
      filtered = filtered.filter((b) =>
        b.firstPublishYear?.toString().includes(this.year)
      );
    }

    // Sort by author or title
    if (this.sortOption === "author") {
      filtered.sort((a, b) =>
        (a.authors[0] || "").localeCompare(b.authors[0] || "")
      );
    } else if (this.sortOption === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    this.filteredBooks = filtered;
    this.currentPage = 1; // Reset to the first page after filtering
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  get paginatedBooks() {
    const startIndex = (this.currentPage - 1) * this.booksPerPage;
    return this.filteredBooks.slice(startIndex, startIndex + this.booksPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredBooks.length / this.booksPerPage);
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    // Directly calculate and update the index
    this.setCurrentIndex((this.currentIndex + 1) % this.books.length);
  }

  prevSlide() {
    // Directly calculate and update the index
    this.setCurrentIndex(
      (this.currentIndex - 1 + this.books.length) % this.books.length
    );
  }
}

const bookStore = new BookStore();
export default bookStore;
