import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { NextPage } from 'next';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

interface CodeBlockProps {
  value: string;
  language: string;
}

const CodeBlock: NextPage<CodeBlockProps> = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {value}
    </SyntaxHighlighter>
  );
};

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown
          source={postData.matterResult.content}
          renderers={{ code: CodeBlock }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
