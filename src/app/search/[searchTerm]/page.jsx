import Results from '@/components/Results';

export default async function SearchPage({ params }) {
  const seachTerm = params.searchTerm;
  const res = await fetch(
    `http://localhost:8000/api/athletes/search/?q=${seachTerm}`,
    { cache: "no-store" }
  );
  const results = await res.json();
  // const results = [
  // {
  //   "id": 2,
  //   "name": "NEERAJ CHOPRA",
  //   "country": "India",
  //   "sports": "Athletics",
  //   "gold_medals": 1,
  //   "silver_medals": 2,
  //   "bronze_medals": 3,
  //   "biography": "At the Olympic Games Tokyo 2020 in 2021, Chopra entered the men's javelin competition amidst tough competition. Despite not being the outright favourite for gold, he led the qualifying round with an 86.65m throw, before dominating the final. He won gold with a throw of 87.58m and became his country's first track and field athlete to win gold at the Olympic stage.\r\n\r\n“My goal was always the Tokyo Olympics. I put in the hard work and trusted the process since every single effort counts when it comes to success at the highest level,” Chopra expressed after his record win.",
  //   "date_of_birth": "2024-09-05",
  //   "image": "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/o7jvipsa0kfv8uv9hzbm"
  // }
  // ];
  return (
    <div className="  ">
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}
