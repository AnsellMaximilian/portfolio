import { createClient, groq } from "next-sanity";
import { cache } from "react";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;

export const config = {
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  //   useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
};

const client = createClient(config);

// Wrap the cache function in a way that reuses the TypeScript definitions
export const clientFetch = cache(client.fetch.bind(client));
