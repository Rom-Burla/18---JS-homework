let root = document.getElementById("root");
let didntRead = document.createElement("div");
let readingCurrently = document.createElement("div");
readingCurrently.innerHTML = "<h2>Currently Reading</h2>";

let library = [];
let didNotRead = [];
let alreadyRead = [];
let currentBook = [undefined];
alreadyRead.length = didNotRead.length;
let readAlready = document.createElement("div");
document.body.style.textAlign = "center";
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.justifyContent = "center";
root.style.alignItems = "center";
didntRead.style.display = "flex";
didntRead.style.flexDirection = "row";
didntRead.style.flexWrap = "wrap";
didntRead.style.justifyContent = "center";
didntRead.style.alignItems = "center";
class Books {
  constructor(title, author, pages, img) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.img = img;
  }
  putInLibrary() {
    library.push(this);
    didNotRead.push(this);
  }
  printNewBook() {
    let book = document.createElement("div");
    book.className = "book";
    book.id = this.title;
    book.style.margin = "20px";
    book.innerHTML += `
    <img src="${this.img}" alt="${this.title}" book cover>
    <h2>${this.title}</h2>
    <p>Author: ${this.author}</p>
    <p>Book length: ${this.pages} Pages</p>
    `;
    let currentBook = document.createElement("button");
    currentBook.textContent = "Current book";
    currentBook.id = this.title;
    let finishedBook = document.createElement("button");
    finishedBook.textContent = "Finished the book";
    finishedBook.id = this.title;
    didntRead.appendChild(book);
    book.style.flex = "1 0 28%";
    book.appendChild(currentBook);
    book.appendChild(finishedBook);
  }
  printCurrentBook() {
    let book = document.createElement("div");
    book.className = "current-book";
    book.id = this.title;
    book.style.margin = "20px";
    book.innerHTML = `
    <img src="${this.img}" alt="${this.title}" book cover>
    <h2>${this.title}</h2>
    <p>Author: ${this.author}</p>
    <p>Book length: ${this.pages} Pages</p>
    `;
    let finishedBook = document.createElement("button");
    finishedBook.textContent = "Finished the book";
    finishedBook.id = this.title;
    book.appendChild(finishedBook);

    readingCurrently.appendChild(book);
  }
  printOldBook() {
    let book = document.createElement("div");
    book.className = "book";
    book.id = this.title;
    book.style.margin = "20px";
    book.innerHTML += `
    <img src="${this.img}" alt="${this.title}" book cover>
    <h2>${this.title}</h2>
    <p>Author: ${this.author}</p>
    <p>Book length: ${this.pages} Pages</p>
    `;

    readAlready.style.display = "flex";
    readAlready.style.flexDirection = "column";
    book.style.flex = "1 0 28%";
    readAlready.appendChild(book);
  }
}
let harryPotter1 = new Books(
  `Harry Potter & the Philosopher's Stone`,
  "J.K. Rolling",
  223,
  "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5903/9780590353427.jpg"
);
let harryPotter2 = new Books(
  `Harry Potter and the Chamber of Secrets`,
  "J.K. Rolling",
  352,
  "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4390/9780439064873.jpg"
);
let harryPotter3 = new Books(
  `Harry Potter and the Prisoner of Azkaban`,
  "J.K. Rolling",
  435,
  "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4391/9780439136365.jpg"
);
harryPotter1.putInLibrary();
harryPotter2.putInLibrary();
harryPotter3.putInLibrary();
for (let i = 0; i < didNotRead.length; i++) {
  document.addEventListener("click", (e) => {
    if (
      e.target.id === document.getElementsByClassName("book")[i].id &&
      e.target.textContent === "Current book"
    ) {
      readingCurrently.style.display = "flex";
      readingCurrently.style.flexDirection = "column";
      currentBook.pop();
      currentBook.push(didNotRead[i]);
      let book = currentBook[0];
      console.log(book);
      book.printCurrentBook();
      console.log(currentBook);
      e.target.style.display = "none";
      midDiv.appendChild(readingCurrently);
    }
    for (let i = 0; i < currentBook.length; i++) {
      document.addEventListener("click", (e) => {
        if (
          e.target.id ===
            document.getElementsByClassName("current-book")[0].id &&
          e.target.textContent === "Finished the book"
        ) {
          readingCurrently.innerHTML = "";
          // alreadyRead.push(currentBook[i]);
          e.target.style.display = "none";
          currentBook.splice(0, 1, undefined);
          for (let i = 0; i < alreadyRead.length; i++) {
            for (let j = 0; j < alreadyRead.leangth; i++) {
              if (i !== j) {
                alreadyRead[i].printOldBook();
              }
            }
          }
          readAlready.appendChild(alreadyRead[i]);
          root.removeChild(readingCurrently);
        }
      });
    }
  });
}

for (let i = 0; i < didNotRead.length; i++) {
  document.addEventListener("click", (e) => {
    if (
      e.target.id === document.getElementsByClassName("book")[i].id &&
      e.target.textContent === "Finished the book"
    ) {
      alreadyRead.length = didNotRead.length;
      alreadyRead.splice(i, 1, didNotRead[i]);
      didNotRead.splice(i, 1, undefined);
      document.getElementsByClassName("book")[i].style.display = "none";
      e.target.style.display = "none";
      alreadyRead[i].printOldBook();
    }
  });
  didNotRead[i].printNewBook();
}
root.innerHTML += "<h2>Did not read yet</h2>";
let midDiv = document.createElement("div");
root.appendChild(didntRead);
root.appendChild(midDiv);
root.appendChild(readAlready);
console.log(readAlready);
readAlready.innerHTML = "<h2>Already read</h2>";
readAlready.style.display = "flex";
readAlready.style.flexDirection = "row";
readAlready.style.flexWrap = "wrap";
readAlready.style.justifyContent = "center";
readAlready.style.alignItems = "center";
