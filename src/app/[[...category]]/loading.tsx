import React from "react";

import { FeatureMovieLoading } from "@main/components/featured-movie";
import { CategoriesLoading } from "@main/components/categories";
import { MoviesSectionLoading } from "@main/components/movies-section";

function HomeLoading() {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
}

export default HomeLoading;
