import Head from 'next/head';
import { OpenAllianceTeam } from "../components/openallianceTeam";

export default function Home() {
  const teams = [
    {
      "name": "Team Hammond",
      "teamNumber": 71,
      "buildThreadLink": "https://www.chiefdelphi.com/t/frc-71-team-hammond-2022-build-thread/398214"
    },
    {
      "name": "The Grasshoppers",
      "teamNumber": 95,
      "buildThreadLink": "https://www.chiefdelphi.com/t/frc95-2022-build-thread/398263"
    },
    {
      "name": "The iRaiders",
      "teamNumber": 2713,
      "buildThreadLink": "https://www.chiefdelphi.com/t/frc-2713-iraiders-2022-build-thread/398350"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>The Open Alliance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to The Open Alliance
        </h1>
        {teams.map(t => {
          console.log('got team', t);
          return (
            <OpenAllianceTeam name={t.name} teamNumber={t.teamNumber} buildThreadLink={t.buildThreadLink} />
            );
        })}

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer>
    </div>
  );
}
