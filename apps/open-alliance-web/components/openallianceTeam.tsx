import React from "react";

export interface OpenAllianceTeamProps {
  name: string,
  teamNumber: number,
  buildThreadLink: string,
}

export function OpenAllianceTeam(props: OpenAllianceTeamProps) {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex items-start px-6 py-4">
        <div className="font-bold text-xl mb-2 mr-2">{props.teamNumber}</div>
        <p className="text-gray-700 text-base">
          {props.name}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" href={props.buildThreadLink}>Build Blog</a>
      </div>
    </div>
  );
}