import ListMovies from "@/components/listMovies";
import { Suspense } from "react";

export default function Home() {
  return (
    <section>
      <Suspense
        fallback={
          <div className="grid-movies">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="animate-pulse flex flex-col">
                <div className="rounded-md bg-slate-300 h-[19.5vw] w-full mx-auto mb-2"></div>
                <div className="rounded-md bg-slate-300 h-[28px] w-full mx-auto mb-2"></div>
                <div className="rounded-md bg-slate-300 h-[63px] w-full mx-auto mb-2"></div>
              </div>
            ))}
          </div>
        }
      >
        <ListMovies />
      </Suspense>
    </section>
  );
}
