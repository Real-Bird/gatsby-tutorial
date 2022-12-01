import React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";
import { graphql, PageProps } from "gatsby";

const Blog = ({ data }: PageProps<Queries.BlogTitlesQuery>) => {
  return (
    <Layout title="It's my Blog">
      <p>The most recent news from my shop</p>
      <ul>
        {data.allFile.nodes.map((file, idx) => (
          <li key={idx}>
            <h3>{file.name}</h3>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;

export const query = graphql`
  query BlogTitles {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
