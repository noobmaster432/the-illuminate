import Link from "next/link";
import { notFound } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

type Props = {
  searchParams?: Article;
};

function ArticlePage({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  const article: Article = searchParams;

  return (
    <article>
      <section className="flex flex-col lg:flex-row pb-12 px-0 lg:px-10 pt-10">
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          />
        )}

        <div className="px-10">
          <h1 className="px-0 no-underline pb-2 headerTitle">
            {article.title}
          </h1>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {article.author}</h2>
            <h2 className="font-bold pl-4">Source: {article.source}</h2>
            <p className="pl-4">
              <LiveTimestamp time={article.published_at} />
            </p>
          </div>

          <p className="pt-4">{article.description}</p>
        </div>
      </section>
      <Link href={article.url} className="pb-12 flex justify-center" target="_blank">
        <button className=" bg-zinc-900 px-5 py-3 rounded-full text-white dark:bg-slate-200 dark:text-zinc-900 transition duration-500 transform hover:translate-y-1 text-center font-serif ">Read in Detail...</button>
      </Link>
    </article>
  );
}

export default ArticlePage;
