import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ description, title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      titleTemplate="INTELLECT | %s"
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: "google-site-verification",
          content: "it1dJOHrz1MxZWjHi968GpJ0o1eOUhyEC2byh2Ehz6g",
        },
      ]}
    />
  );
};

export default SEO;
