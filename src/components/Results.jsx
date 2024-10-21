import Card from './Card';

export default function Results({ results }) {
  return (
    <div className="relative ">
      {/* Gradient background */}
      {/* <div className="fixed inset- z-[-10] dark:-z-0 "> */}
      {/* Ensures the background is behind everything else */}
      {/* <div
          className="circlePosition w-[460px] h-[400px]
          bg-cyan-600 rounded-[100%] fixed top-[50%] left-[20%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"
        ></div>
        <div
          className="circlePosition w-[460px] h-[400px]
          bg-black rounded-[100%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"
        ></div>
        <div
          className="circlePosition w-[460px] h-[400px]
          bg-rose-600 rounded-[100%] fixed top-[50%] left-[80%] translate-x-[-50%] translate-y-[-50%] blur-[90px]"
        ></div>
        <div
          className="circlePosition w-[460px] h-[400px]
          bg-yellow-600 rounded-[100%] fixed top-[70%] left-[40%] translate-x-[-70%] translate-y-[-50%] blur-[100px]"
        ></div>
        <div
          className="circlePosition w-[460px] h-[400px]
          bg-emerald-600 rounded-[100%] fixed top-[70%] left-[75%] translate-x-[-70%] translate-y-[-50%] blur-[100px]"
        ></div> */}
      {/* </div> */}

      {/* Results content */}
      <div className="relative sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 max-w-6xl mx-auto pt-4 pb-11">
        {results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
}
