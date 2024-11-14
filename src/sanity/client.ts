import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qbz0fr70",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});
