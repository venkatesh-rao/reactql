export const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

export default {
  // eslint-disable-next-line no-unused-vars
  books: (_root, _args, _context) => {
    return books;
  },
};
