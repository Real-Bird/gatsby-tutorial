import Layout from "../../components/layout";
import React from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function PostDetail({ data, children }: IBlogPostProps) {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );
  return (
    <Layout title={`${data.mdx?.frontmatter?.title}`}>
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
      <div>{children}</div>
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        title
        slug
        date
        category
        author
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlogPostProps) => (
  <Seo title={`${data.mdx?.frontmatter?.title}`} />
);
