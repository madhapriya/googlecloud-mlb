import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        id: [133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 158, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121],
        teamName: ["Athletics", "Pirates", "Padres", "Mariners", "Giants", "Cardinals", "Rays", "Rangers", "Blue Jays", "Twins", "Phillies", "Braves", "White Sox", "Marlins", "Yankees", "Brewers", "Angels", "D-backs", "Orioles", "Red Sox", "Cubs", "Reds", "Guardians", "Rockies", "Tigers", "Astros", "Royals", "Dodgers", "Nationals", "Mets"],
        logo_link: [
            "https://www.mlbstatic.com/team-logos/133.svg",
            "https://www.mlbstatic.com/team-logos/134.svg",
            "https://www.mlbstatic.com/team-logos/135.svg",
            "https://www.mlbstatic.com/team-logos/136.svg",
            "https://www.mlbstatic.com/team-logos/137.svg",
            "https://www.mlbstatic.com/team-logos/138.svg",
            "https://www.mlbstatic.com/team-logos/139.svg",
            "https://www.mlbstatic.com/team-logos/140.svg",
            "https://www.mlbstatic.com/team-logos/141.svg",
            "https://www.mlbstatic.com/team-logos/142.svg",
            "https://www.mlbstatic.com/team-logos/143.svg",
            "https://www.mlbstatic.com/team-logos/144.svg",
            "https://www.mlbstatic.com/team-logos/145.svg",
            "https://www.mlbstatic.com/team-logos/146.svg",
            "https://www.mlbstatic.com/team-logos/147.svg",
            "https://www.mlbstatic.com/team-logos/158.svg",
            "https://www.mlbstatic.com/team-logos/108.svg",
            "https://www.mlbstatic.com/team-logos/109.svg",
            "https://www.mlbstatic.com/team-logos/110.svg",
            "https://www.mlbstatic.com/team-logos/111.svg",
            "https://www.mlbstatic.com/team-logos/112.svg",
            "https://www.mlbstatic.com/team-logos/113.svg",
            "https://www.mlbstatic.com/team-logos/114.svg",
            "https://www.mlbstatic.com/team-logos/115.svg",
            "https://www.mlbstatic.com/team-logos/116.svg",
            "https://www.mlbstatic.com/team-logos/117.svg",
            "https://www.mlbstatic.com/team-logos/118.svg",
            "https://www.mlbstatic.com/team-logos/119.svg",
            "https://www.mlbstatic.com/team-logos/120.svg",
            "https://www.mlbstatic.com/team-logos/121.svg"
        ]
    });
}


// import { NextApiRequest, NextApiResponse } from 'next';

// const handler = (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method === 'GET') {
//         res.status(200).json({
//             id: [133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 158, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121],
//             teamName: ["Athletics", "Pirates", "Padres", "Mariners", "Giants", "Cardinals", "Rays", "Rangers", "Blue Jays", "Twins", "Phillies", "Braves", "White Sox", "Marlins", "Yankees", "Brewers", "Angels", "D-backs", "Orioles", "Red Sox", "Cubs", "Reds", "Guardians", "Rockies", "Tigers", "Astros", "Royals", "Dodgers", "Nationals", "Mets"],
//             logo_link: [
//                 "https://www.mlbstatic.com/team-logos/133.svg",
//                 "https://www.mlbstatic.com/team-logos/134.svg",
//                 "https://www.mlbstatic.com/team-logos/135.svg",
//                 "https://www.mlbstatic.com/team-logos/136.svg",
//                 "https://www.mlbstatic.com/team-logos/137.svg",
//                 "https://www.mlbstatic.com/team-logos/138.svg",
//                 "https://www.mlbstatic.com/team-logos/139.svg",
//                 "https://www.mlbstatic.com/team-logos/140.svg",
//                 "https://www.mlbstatic.com/team-logos/141.svg",
//                 "https://www.mlbstatic.com/team-logos/142.svg",
//                 "https://www.mlbstatic.com/team-logos/143.svg",
//                 "https://www.mlbstatic.com/team-logos/144.svg",
//                 "https://www.mlbstatic.com/team-logos/145.svg",
//                 "https://www.mlbstatic.com/team-logos/146.svg",
//                 "https://www.mlbstatic.com/team-logos/147.svg",
//                 "https://www.mlbstatic.com/team-logos/158.svg",
//                 "https://www.mlbstatic.com/team-logos/108.svg",
//                 "https://www.mlbstatic.com/team-logos/109.svg",
//                 "https://www.mlbstatic.com/team-logos/110.svg",
//                 "https://www.mlbstatic.com/team-logos/111.svg",
//                 "https://www.mlbstatic.com/team-logos/112.svg",
//                 "https://www.mlbstatic.com/team-logos/113.svg",
//                 "https://www.mlbstatic.com/team-logos/114.svg",
//                 "https://www.mlbstatic.com/team-logos/115.svg",
//                 "https://www.mlbstatic.com/team-logos/116.svg",
//                 "https://www.mlbstatic.com/team-logos/117.svg",
//                 "https://www.mlbstatic.com/team-logos/118.svg",
//                 "https://www.mlbstatic.com/team-logos/119.svg",
//                 "https://www.mlbstatic.com/team-logos/120.svg",
//                 "https://www.mlbstatic.com/team-logos/121.svg"
//             ]
//         });
//     } else {
//         res.setHeader('Allow', ['GET']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// };

// export default handler;
