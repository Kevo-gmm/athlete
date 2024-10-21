import Image from "next/image";

export default async function athletePage({ params }) {
  const athleteId = params.id;
  const res = await fetch(`http://localhost:8000/api/athletes/${athleteId}`, {
    cache: "no-store",
  });
  const athlete = await res.json();
  // console.log(athlete.image)
  // const athlete = {
  //   id: 2,
  //   name: "NEERAJ CHOPRA",
  //   country: "India",
  //   country_image:
  //     "https://gstatic.olympics.com/s1/t_s_pog_flag/f_auto/static/flag/4x3/in",
  //   sports: "Athletics",
  //   sports_image:
  //     "https://gstatic.olympics.com/s1/t_s_athlete_medal/f_auto/static/dark/pictograms/2022/ath.svg",
  //   gold_medals: 1,
  //   gold_medal_image:
  //     "https://png.pngtree.com/png-clipart/20240120/original/pngtree-gold-champion-fast-medal-png-image_14139264.png",
  //   silver_medals: 2,
  //   silver_medal_image:
  //     "https://cdn.pixabay.com/photo/2016/08/26/15/59/medal-1622529_1280.png",
  //   bronze_medals: 3,
  //   bronze_medal_image:
  //     "https://cdn.pixabay.com/photo/2016/08/26/16/04/medal-1622549_1280.png",
  //   biography:
  //     "At the Olympic Games Tokyo 2020 in 2021, Chopra entered the men's javelin competition amidst tough competition. Despite not being the outright favourite for gold, he led the qualifying round with an 86.65m throw, before dominating the final. He won gold with a throw of 87.58m and became his country's first track and field athlete to win gold at the Olympic stage.\r\n\r\n“My goal was always the Tokyo Olympics. I put in the hard work and trusted the process since every single effort counts when it comes to success at the highest level,” Chopra expressed after his record win.",
  //   date_of_birth: "2024-09-05",
  //   image:
  //     "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/o7jvipsa0kfv8uv9hzbm",
  // };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row  max-w-6xl mx-auto md:space-x-6 items-center dark:text-white text-black">
        <Image
          src={athlete.image}
          width={400}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="mt-4 md:pt-16 md:ps-10">
          <h2 className="text-4xl mb-3 font-bold sm:mt-3">{athlete.name}</h2>
          {/* <p className="text-lg mb-3">{athlete.biography}</p> */}
          <div className="mb-3 flex gap-2">
            <span className="font-semibold">Country:</span>
            <h1>{athlete.country}</h1>
            <img src={athlete.country_image} alt="" width="30" />
          </div>
          <div className="mb-3 flex gap-2">
            <span className="font-semibold">Sports:</span>
            <h1>{athlete.sports}</h1>
            <img src={athlete.sports_image} alt="" width="30" />
          </div>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date of Birth:</span>
            {athlete.date_of_birth}
          </p>
          <div className="flex gap-6">
            <div className="mb-3 flex items-center gap-1">
              <img src={athlete.gold_medal_image} alt="" width="40" />
              {/* <span className="font-semibold mr-1">Gold Medals:</span> */}
              <h1 className="text-2xl font-black">{athlete.gold_medals}</h1>
            </div>
            <div className="mb-3 flex items-center gap-1">
              <img src={athlete.silver_medal_image} alt="" width="40" />
              {/* <span className="font-semibold mr-1">Gold Medals:</span> */}
              <h1 className="text-2xl font-black">{athlete.silver_medals}</h1>
            </div>
            <div className="mb-3 flex items-center gap-1">
              <img src={athlete.bronze_medal_image} alt="" width="40" />
              {/* <span className="font-semibold mr-1">Gold Medals:</span> */}
              <h1 className="text-2xl font-black">{athlete.bronze_medals}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto md:p-8 lg:p-8 ps-8 pr-8 pt-2 dark:text-white text-black max-w-screen-2xl">
        <p className="text-lg mb-3">{athlete.biography}</p>
      </div>
    </div>
  );
}
