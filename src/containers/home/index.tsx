import React from "react";

import { FeaturedMovie } from "@main/components/featured-movie";
import { Categories } from "@main/components/categories";
import { MoviesSection } from "@main/components/movies-section";

function HomeContainer({
                           popularMovies,
                           topRatedMovies,
                           categories,
                           selectedCategory,
                       }) {
    return (
        <div>
            <FeaturedMovie
                movie={popularMovies[Math.floor(Math.random() * popularMovies.length)]}
            />
            <Categories categories={categories.slice(1, 6)} />
            {!!selectedCategory.movies.length && (
                <MoviesSection
                    title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
                    movies={selectedCategory.movies.slice(1, 7)}
                />
            )}
            <MoviesSection title="Popular Films" movies={popularMovies.slice(1, 7)} />
            <MoviesSection
                title="Your favorites"
                movies={topRatedMovies.slice(1, 7)}
            />
        </div>
    );
}

export { HomeContainer };
