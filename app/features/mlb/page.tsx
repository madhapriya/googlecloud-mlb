
// "use client"; import { useEffect, useState } from 'react'; // Define the Team type interface Team { id: number; name: string; logo: string; } const MLBPage = () => { const [teams, setTeams] = useState<Team[]>([]); const [error, setError] = useState<string | null>(null); useEffect(() => { fetchTeams(); }, []); const fetchTeams = async () => { try { const response = await fetch('/api/teams'); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); } const data = await response.json(); const formattedTeams: Team[] = data.id.map((id: number, index: number) => ({ id: data.id[index], name: data.teamName[index], logo: data.logo_link[index] })); setTeams(formattedTeams); } catch (error) { console.error('Failed to fetch teams:', error); setError(error instanceof Error ? error.message : 'An unknown error occurred'); } }; return ( <div style={{ fontFamily: 'Arial, sans-serif' }}> <header style={{ backgroundImage: 'url("/path-to-baseball-image.jpg")', backgroundSize: 'cover', padding: '40px', textAlign: 'center', color: '#fff' }}> <h1 style={{ fontSize: '48px', margin: '0' }}>All 30 MLB Team Locations</h1> <p style={{ fontSize: '20px' }}>Find out ballpark name and address, phone, and website information for all 30 Major League Baseball teams below.</p> </header> {error ? ( <p style={{ color: 'red', textAlign: 'center', padding: '20px' }}>Error: {error}</p> ) : ( <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}> <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}> {teams.map((team) => ( <div key={team.id} style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden', transition: 'transform 0.2s' }} onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'; }} onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}> <img src={team.logo} alt={team.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /> <div style={{ padding: '20px' }}> <h2 style={{ fontSize: '20px', margin: '0 0 10px' }}>{team.name}</h2> <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px', transition: 'background-color 0.3s' }} onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#0056b3'; }} onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#007bff'; }} onClick={() => alert(`You followed the ${team.name}`)}> Follow </button> </div> </div> ))} </div> </div> )} </div> ); }; export default MLBPage;


// "use client";
// import { useEffect, useState } from 'react';

// // Define the Team type
// interface Team {
//     id: number;
//     name: string;
//     logo: string;
// }

// const MLBPage = () => {
//     const [teams, setTeams] = useState<Team[]>([]);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         fetchTeams();
//     }, []);

//     const fetchTeams = async () => {
//         try {
//             const response = await fetch('/api/teams');
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const data = await response.json();
//             const formattedTeams: Team[] = data.id.map((id: number, index: number) => ({
//                 id: data.id[index],
//                 name: data.teamName[index],
//                 logo: data.logo_link[index]
//             }));
//             setTeams(formattedTeams);
//         } catch (error) {
//             console.error('Failed to fetch teams:', error);
//             setError(error instanceof Error ? error.message : 'An unknown error occurred');
//         }
//     };

//     return (
//         <div style={{ fontFamily: 'Arial, sans-serif' }}>
//             <header style={{ backgroundImage: 'url("/path-to-baseball-image.jpg")', backgroundSize: 'cover', padding: '40px', textAlign: 'center', color: '#fff' }}>
//                 <h1 style={{ fontSize: '48px', margin: '0' }}>All 30 MLB Team Locations</h1>
//                 <p style={{ fontSize: '20px' }}>Find out ballpark name and address, phone, and website information for all 30 Major League Baseball teams below.</p>
//             </header>
//             {error ? (
//                 <p style={{ color: 'red', textAlign: 'center', padding: '20px' }}>Error: {error}</p>
//             ) : (
//                 <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
//                     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
//                         {teams.map((team) => (
//                             <div key={team.id} style={{
//                                 backgroundColor: '#fff',
//                                 border: '1px solid #ddd',
//                                 borderRadius: '10px',
//                                 boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//                                 overflow: 'hidden',
//                                 transition: 'transform 0.2s'
//                             }}
//                             onMouseOver={(e) => {
//                                 (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
//                             }}
//                             onMouseOut={(e) => {
//                                 (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
//                             }}>
//                                 <img src={team.logo} alt={team.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
//                                 <div style={{ padding: '20px' }}>
//                                     <h2 style={{ fontSize: '20px', margin: '0 0 10px' }}>{team.name}</h2>
//                                     <button style={{
//                                         backgroundColor: '#007bff',
//                                         color: '#fff',
//                                         border: 'none',
//                                         padding: '10px 20px',
//                                         cursor: 'pointer',
//                                         borderRadius: '5px',
//                                         transition: 'background-color 0.3s'
//                                     }}
//                                     onMouseOver={(e) => {
//                                         (e.currentTarget as HTMLElement).style.backgroundColor = '#0056b3';
//                                     }}
//                                     onMouseOut={(e) => {
//                                         (e.currentTarget as HTMLElement).style.backgroundColor = '#007bff';
//                                     }}
//                                     onClick={() => alert(`You followed the ${team.name}`)}>
//                                         Follow
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MLBPage;


"use client";
import { useEffect, useState } from 'react';

// Define the Team type
interface Team {
    id: number;
    name: string;
    logo: string;
}

const MLBPage = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = async () => {
        try {
            const response = await fetch('/api/teams');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const formattedTeams: Team[] = data.id.map((id: number, index: number) => ({
                id: data.id[index],
                name: data.teamName[index],
                logo: data.logo_link[index]
            }));
            setTeams(formattedTeams);
        } catch (error) {
            console.error('Failed to fetch teams:', error);
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#007bff' }}>MLB Teams</h1>
            {error ? (
                <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>
            ) : (
                <ul style={{ maxWidth: '800px', margin: '0 auto', padding: '0', listStyle: 'none' }}>
                    {teams.map((team) => (
                        <li key={team.id} style={{
                            backgroundColor: '#f9f9f9',
                            margin: '15px 0',
                            padding: '20px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                        }}
                        onMouseOut={(e) => {
                            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={team.logo} alt={team.name} style={{ width: '50px', height: '50px', marginRight: '15px' }} />
                                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{team.name}</span>
                            </div>
                            <button style={{
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                padding: '10px 20px',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                transition: 'background-color 0.3s'
                            }}
                            onMouseOver={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = '#0056b3';
                            }}
                            onMouseOut={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = '#007bff';
                            }}
                            onClick={() => alert(`You followed the ${team.name}`)}>
                                Follow
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MLBPage;
