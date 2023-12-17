import { getData } from "@utils/fetchPageData";
import { metaDataGenerator } from "./metaDataGenerator";

type Props = {
  url: string;
};

export async function GetMetaData({ url }: Props) {
  const response = await getData(url);
  const meta = response.data.meta;

  let metaData = {
    title: meta.title_en,
    description: meta.description_en,
  };
  return metaDataGenerator(metaData);
}
