import { books } from './query';

export default {
  // eslint-disable-next-line no-unused-vars
  addBook: (_root, _args, _context) => {
    books.push({
      title: _args.title,
      author: _args.author,
    });
    return books;
  },
};
