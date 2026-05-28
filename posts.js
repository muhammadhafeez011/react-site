const posts = Array.from({ length: 200 }, (_, i) => ({
  id: i,
  title: `Post ${i}`,
  caption: `This is caption ${i}`,
}));

export default posts;
