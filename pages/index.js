import Link from 'next/link';
import { Image } from '../components/common/index';
import { Layout, Bio, SEO } from '@components/common';
import { getSortedPosts } from '@utils/posts';

import clsx from 'clsx';
export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio className="my-14" />
      <div className="mt-3 mb-3">
        <h4
          className={clsx(
            ' font-black leading-none text-black no-underline font-display mb-3',
            'sm:text-2xL',
            'dark:text-white'
          )}>
          You can also, follow me on
        </h4>
        <div style={{ display: 'inline-flex' }}>
          <a href="https://www.instagram.com/javascript_devv/">
            <Image
              className="flex-shrink-0 mb-0 mr-3 rounded-full w-10 h-10"
              src={require('../content/assets/instagram.png')}
              // webpSrc={require('../../../content/assets/profile.png?webp')}
              // previewSrc={require('../../../content/assets/profile.png?lqip')}
              alt="Profile"
            />
          </a>
          <a href="http://twitter.com/jesss_codes">
            <Image
              className="flex-shrink-0 mb-0 mr-3 rounded-full w-10 h-10"
              src={require('../content/assets/twitter.png')}
              // webpSrc={require('../../../content/assets/profile.png?webp')}
              // previewSrc={require('../../../content/assets/profile.png?lqip')}
              alt="Profile"
            />
          </a>
          <a href="https://www.buymeacoffee.com/jesssicaa">
            <Image
              className="flex-shrink-0 mb-0 mr-3 rounded-full w-10 h-10"
              src={require('../content/assets/coffee-cup.png')}
              // webpSrc={require('../../../content/assets/profile.png?webp')}
              // previewSrc={require('../../../content/assets/profile.png?lqip')}
              alt="Profile"
            />
          </a>
        </div>
      </div>
      <div style={{ marginBottom:20}}>
        Hi <strong>Jessica</strong> Here, I am a Full Time Senior Software
        Developer, who started with 0 experience and made a lot with 5+ years of
        experience, to learn how and grow you can subscribe to my{' '}
        <strong>
          {' '}
          <a href={'https://www.getrevue.co/profile/jesss_codes'}>
            Newsletter 
          </a>{' '}
        </strong>
      </div>
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                <a className="text-4xl font-bold text-yellow-600 font-display">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="text-sm">{date}</span>
          </header>
          <section>
            <p className="mb-8 text-lg">{description}</p>
          </section>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
