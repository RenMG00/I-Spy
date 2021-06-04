const mongoose = require('mongoose');
const Books = require('./models/books');

let connection_string = "mongodb://127.0.0.1:27017/ren_personal_collection?retryWrites=true&w=majority";

mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);

mongoose.connect(connection_string)
    .then(
        () => {
            console.log('Connection Successful!');

            find_all_books();
            update_one_book();
            delete_fakebook();
            create_book();

        }
    )
    .catch(
        (error) => {
            console.log('An error has occured: ', error);
        }
    );
function delete_fakebook() {
console.log('Deleting fake book Scrum Buddies using callback.');
    let book_id = '5e482675e4eb3b36acfe4f2e';
    Books.findByIdAndDelete(
        { _id: book_id },
        (err, deleted_book) => {
            if (err) {
                return console.log('Error.');
            }
            console.log(deleted_book);
        }
    )
}
function update_one_book() {
console.log('Updating title of Fahrenheit 451 using a callback function.');
    let book_id = '5e482675e4eb3b36acfe4f2d';
    Books.findOneAndUpdate(
        { _id: book_id },
        { title: 'Fahrenheit 451' },
        { new: true },
        (err, updated_book) => {
            if (err) {
                return console.log('Error.');
            }
            console.log(updated_book);
        }

    )
}
let books_query = Books.find({});
books_query.sort({ title: 1, author_name: 1 });
let find_promise = books_query.exec();
console.log('Is a Promise: ' + (find_promise instanceof Promise));
find_promise
    .then((books) => {
        books.map((books) => console.log(books.title));
        books.map((books) => console.log(books.author_name));
    })
    .catch((err) => {
        console.log('Error.')
    });

function find_all_books() {
    Books.find({}, (err, books) => {
        if (err) {
            return console.log('Error:', err);
        }
        console.log(books);
    })

}

function create_book() {
    console.log('Creating book test');

    const new_book = new Books({
        author_name: 'Ray Bradburry',
        author_age: 91,
        title: 'Fahrenheit_451',
        pubyear: 1953,
        category: 'Dystopian',
    });
    console.log('Creating fake book.')
    const fake_book = new Books({
        author_name: 'Ren Gian',
        author_age: 28,
        title: 'Scrum Buddies',
        pubyear: 2020,
        category: 'Non-fiction',
    });
    // Need to update title to remove _ from Fahrenheit_451.
    console.log('Creating other books.')
    const book_three = new Books({
        author_name: 'Kim Harrison',
        author_age: 54,
        title: 'Dead Witch Walking',
        pubyear: 2004,
        category: 'Horror-fiction, Fantasy',
    });
    const book_four = new Books({
        author_name: 'Frank Herbert',
        author_age: 65,
        title: 'Dune',
        pubyear: 1965,
        category: 'Science-fiction',
    });
    const book_five = new Books({
        author_name: 'Chuck Palahniuk',
        author_age: 57,
        title: 'Invisible Monsters',
        pubyear: 1999,
        category: 'Novel, Satire',
    });

    let save_promise_one = new_book.save();
    console.log('Is a promise: ' + (save_promise_one instanceof Promise));
    save_promise_one
        .then((saved_book) => {
            console.log('ID: ' + saved_book._id);
            console.log(saved_book);
        })
        .catch((err) => {
            console.log('Error: ', err);
        }
        )

    let save_promise_two = fake_book.save();
    console.log('Is a promise: ' + (save_promise_two instanceof Promise));
    save_promise_one
        .then((saved_book) => {
            console.log('ID: ' + saved_book._id);
            console.log(saved_book);
        })
        .catch((err) => {
            console.log('Error: ', err);
        }
        )
    let save_promise_three = book_three.save();
    console.log('Is a promise: ' + (save_promise_three instanceof Promise));
    save_promise_two
        .then((saved_book) => {
            console.log('ID: ' + saved_book._id);
            console.log(saved_book);
        })
        .catch((err) => {
            console.log('Error: ', err);
        }
        )
    let save_promise_four = book_four.save();
    console.log('Is a promise: ' + (save_promise_four instanceof Promise));
    save_promise_two
        .then((saved_book) => {
            console.log('ID: ' + saved_book._id);
            console.log(saved_book);
        })
        .catch((err) => {
            console.log('Error: ', err);
        }
        )
    let save_promise_five = book_five.save();
    console.log('Is a promise: ' + (save_promise_five instanceof Promise));
    save_promise_two
        .then((saved_book) => {
            console.log('ID: ' + saved_book._id);
            console.log(saved_book);
        })
        .catch((err) => {
            console.log('Error: ', err);
        }
        )
};

