import Head from 'next/head';
import { generateRSS } from '../rssUtil';
import { PostData, loadBlogPosts } from '../loader';
import { PostCard } from '../components/PostCard';

const Home = (props: {
  posts: PostData[];
}) => {
  return (
    <div className="content">
      <Head>
        <title>John Milinovich's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="section">
        {/* <h2>My blog posts</h2>
        <p>
          This section demonstrates the power of dynamic imports. Every Markdown
          file under <code>/md/blog</code> is automatically parsed into a
          structured TypeScript object and available in the{' '}
          <code>props.posts</code> array. These blog post "cards" are
          implemented in the
          <code>/components/PostCard.tsx</code> component.
        </p> */}
        <div className="post-card-container">
          {props.posts.map((post, j) => {
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    posts,
  };

  return { props };
};
