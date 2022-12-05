import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/Seo";

export default function IndexPage({ data }: PageProps<Queries.StickersQuery>) {
  return (
    <Layout title="Welcome to DevStickers 👋">
      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker, idx) => (
          <article key={idx}>
            <Link to={`/products/${sticker.id}`}>
              <GatsbyImage
                image={getImage(sticker.preview?.gatsbyImageData!)!}
                alt={sticker.name!}
              />
              <h2>{sticker.name}</h2>
              <h4>${sticker.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(placeholder: BLURRED, height: 250)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
