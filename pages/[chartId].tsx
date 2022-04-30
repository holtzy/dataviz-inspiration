import { NextPage } from "next";
import { useRouter } from "next/router";

// This page displays the content for a specific chart type, e.g. "scatterplot"
// If several chart types are selected, user will remain on index.tsx
const IndividualChartTypePage: NextPage = () => {
  const router = useRouter();

  return <p>Hello</p>;
};

export default IndividualChartTypePage;
