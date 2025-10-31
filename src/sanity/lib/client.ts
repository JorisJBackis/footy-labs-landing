import { ClientConfig, ClientPerspective, createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const config: ClientConfig = {
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: true,
  perspective: "published" as ClientPerspective,
};

export const client = createClient(config);
