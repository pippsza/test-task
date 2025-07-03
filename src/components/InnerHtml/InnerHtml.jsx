"use client";

import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

import React from "react";

export const InnerHtml = ({ data }) => {
  const html = convertLexicalToHTML({ data });

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
