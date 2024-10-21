import Results from '@/components/Results';


export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `http://localhost:8000/api/athletes/`,
    //    {
    //   next: { revalidate: 10000 },
    // }
    { cache: "no-store" }
  );
  const data = await res.json();
  // const data = [
  //   {
  //     id: 2,
  //     name: "NEERAJ CHOPRA",
  //     country: "India",
  //     sports: "Athletics",
  //     gold_medals: 1,
  //     silver_medals: 2,
  //     bronze_medals: 3,
  //     biography:
  //       "At the Olympic Games Tokyo 2020 in 2021, Chopra entered the men's javelin competition amidst tough competition. Despite not being the outright favourite for gold, he led the qualifying round with an 86.65m throw, before dominating the final. He won gold with a throw of 87.58m and became his country's first track and field athlete to win gold at the Olympic stage.\r\n\r\n“My goal was always the Tokyo Olympics. I put in the hard work and trusted the process since every single effort counts when it comes to success at the highest level,” Chopra expressed after his record win.",
  //     date_of_birth: "2024-09-05",
  //     image:
  //       "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/o7jvipsa0kfv8uv9hzbm",
  //   },
  //   {
  //     id: 3,
  //     name: "USAIN BOLT",
  //     country: "Jamaica",
  //     sports: "Athletics",
  //     gold_medals: 10,
  //     silver_medals: 20,
  //     bronze_medals: 20,
  //     biography:
  //       "Usain Bolt has been, quite simply, the face of the last three Olympic Games. To win the event’s blue riband event, the 100m, just once, guarantees Olympic immortality. To do it three times at consecutive Games, and add the 200m and 4x100m relay titles to the mix, gives him a good case to be considered the greatest athlete of all time. Still only 33, he is a living legend. Add real charm and humour to the mix, and Bolt has been the superstar that the Games needed over the last decade and a bit.\r\n\r\nBolt was born on 21 August 1986 in Sherwood Content, Jamaica. He grew up as a sports-obsessed kid, excelling in football and cricket. At high school, his cricket coach encouraged him to try athletics seriously. It was a good decision, By the age of 16, in 2002, he was world junior champion.\r\n\r\nBy 2007, he was the fastest man in history, setting his first 100m world record, and a year later, at the Beijing 2008 Olympic Games, he rose to international superstardom. In China, Bolt triumphed in the men’s 100m sprint, and then added the 200m and 4x100m title to secure a legendary triple. He broke the world record in all three events.",
  //     date_of_birth: "2024-09-05",
  //     image:
  //       "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/lmusmqtktq8slg9yl1xj",
  //   },
  //   {
  //     id: 4,
  //     name: "COCO GAUFF",
  //     country: "USA",
  //     sports: "Tennis",
  //     gold_medals: 2,
  //     silver_medals: 2,
  //     bronze_medals: 1,
  //     biography:
  //       "Born Cori Dionne Gauff on March 13, 2004, in Delray Beach, Florida, USA, she hails from a family of accomplished collegiate athletes. Her father, Corey Gauff, played basketball for Georgia State University, while her mother, Candi Odom Gauff, was a track athlete for Florida State University.\r\n\r\nGauff's talent for tennis became apparent early on, and aged 10, she went to France to train under Patrick Mouratoglou, the long-time coach of tennis superstar Serena Williams.\r\n\r\nThe youngster gained widespread recognition in 2019 when she received a wildcard entry to Wimbledon. In a stunning debut, the then 15-year-old defeated her childhood idol, Venus Williams, in the first round of the competition. Gauff's became the youngest player to reach the fourth round of the grass-court Slam since Jennifer Capriati in 1991. She further solidified her reputation as a future star by reaching the third round of the US Open later that year.",
  //     date_of_birth: "2024-09-06",
  //     image:
  //       "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/dmlz3iti2v60n27qqvpp",
  //   },
  //   {
  //     id: 5,
  //     name: "SEAN MCCOLL",
  //     country: "Canada",
  //     sports: "Sport Climbing",
  //     gold_medals: 3,
  //     silver_medals: 6,
  //     bronze_medals: 1,
  //     biography:
  //       "Like many climbers who competed at Tokyo 2020, Canadian born Sean McColl has always dreamt of being an Olympian. The difference is that he played a major part in making it happen.\r\n\r\nThe announcement of sport climbing’s inclusion into the Olympic Games was particularly special for the 33-year-old, who as president of the IFSC's athlete commission had made several presentations to the IOC on behalf of the sport. He was careful to cite the young demographic of the climbers – and it paid off.\r\n\r\nMcColl has been a professional climber since he was 19, enjoying a lengthy career – and collecting a diploma from the British Columbia Institute of Technology in between. Returning to climbing, however, helped McColl realise that this is where he felt he belonged, earning over 30 World Cup medals in the course of his career – finding success in lead, and bouldering.\r\n\r\nAccording to Team Canada, he is the only athlete in IFSC history to post a top-eight finish at a World Cup finish in each of the three climbing disciplines. He has won four world titles at the IFSC World Championships in his last eight appearances – with the most recent being 2016.",
  //     date_of_birth: "2024-09-06",
  //     image:
  //       "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/v1624622322/primary/ytyn81ej8wbxemc0sj5h",
  //   },
  //   {
  //     id: 6,
  //     name: "MARCUS D'ALMEIDA",
  //     country: "Brasil",
  //     sports: "Archery",
  //     gold_medals: 0,
  //     silver_medals: 3,
  //     bronze_medals: 3,
  //     biography:
  //       "Marcus Vinicius Carvalho Lopes D'Almeida is a Brazilian athlete who competes in recurve archery. In February 2023, he became the first Brazilian to lead the world archery ranking in his category, the recurve bow.",
  //     date_of_birth: "2024-09-06",
  //     image:
  //       "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/v1698927280/primary/puhg8m8mbz3y0yfyd7k1",
  //   },
  //   {
  //     id: 7,
  //     name: "KAYLEE MCKEOWN",
  //     country: "Australia",
  //     sports: "Swimming",
  //     gold_medals: 0,
  //     silver_medals: 1,
  //     bronze_medals: 0,
  //     biography:
  //       "Kaylee McKeown first appeared on the Olympic stage at the Buenos Aires 2018 Youth Olympics, where the swimmer won women's 50m backstroke gold, alongside silver in the 100m backstroke, and bronze in the 200m backstroke.\r\n\r\nIn the run up to the Olympic Games Tokyo 2020, the Queenslander clocked a 57.45 to break the 100m backstroke world record.\r\n\r\nShe then backed up that performance at the Games, winning two individual gold medals in the 100m and 200m backstroke, and another gold as part of the all-star Australian women's 4x100m medley team that also featured Chelsea Hodges, Emma McKeon, and Cate Campbell.\r\n\r\nMcKeown is also a highly versatile athlete. In the run up to Tokyo 2020, she won the 200m individual medley at the Australian National Championships, but withdrew from the event in order to focus on the backstroke sprints.\r\n\r\nHowever, she did enter into the event instead of the 100m backstroke at the 2022 World Championships, and landed the 200m IM silver with an impressive 2:08:57. Elsewhere at the event, the 2001-born star completed her medal collection with 200m backstroke gold.",
  //     date_of_birth: "2024-09-06",
  //     image:
  //       "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/heoopmantspbzhbwwjya",
  //   },
  // ];
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // }
  const results = data;

  return (
    <div>


      <Results results={results} />
    </div>
  );
}
