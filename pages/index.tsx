import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useFetch } from "../hooks/api/useFetch";
import { SearchForm } from "../components/Search";
import { Spinner } from "../components/Spinner";
import ListView from "../components/ListView";
const PAGE = 50;
const Home: NextPage = () => {
  const [search, setSearch] = React.useState<string>("");
  const { data, refetch, error, isLoading, isFetching } = useFetch(
    "bikes",
    `/search?query=${search}&stolenness=non&per_page=${PAGE}`,
    {
      enabled: false,
    }
  );
  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
  };
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  if (error) return <div>An error has occurred</div>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Bike Index</title>
        <meta name="description" content="meta search for bikes " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="my-6 text-4xl text-blue-500">
          Welcome to <a href="https://bikeindex.org/">Bike Index!</a>
        </h1>
        <SearchForm
          value={search}
          onSubmit={onFormSubmit}
          onSearchChange={onSearchChange}
        />
        <section className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {isFetching && <Spinner />}
          {data?.bikes && data.bikes.length === 0 && (
            <div>
              <p className="text-center text-red-400">
                No result found for <b>{search}</b> query
              </p>
            </div>
          )}
          {data?.bikes && data.bikes.length > 0 && (
            <ListView items={data.bikes} />
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
