'use strict'

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = {
            state: 100,
            
            set newState(bookState) {
                if (bookState === 0) {
                    this.state = 0;
                } else if (bookState > 100) {
                    this.state = 100;
                } else {
                    this.state = bookState;
                }
            },

            get newState() {
                return this.state;
            }
        };

        this.type = null;
    }
    
    fix() {
        return this.state *= 1.5;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"
    }
}
    
class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = name;
        this.type = 'Book'
    }
}
class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'novel'
    }
}
class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'detective'
    }
}
 //Задание 2
class Library {
    constructor(name, books) {
        this.name = name
        this.books = [];
    }
    addBook(book) {
        if (book.state.state > 30) {
            this.books.push(book);
        }
        
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i]
            }
        } return null
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                return this.books.splice(i, 1)
            } 
        } return null
    }    
}

