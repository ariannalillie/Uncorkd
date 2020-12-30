import { useState, useEffect } from 'react';


function Wineries() {
    const [query, setQuery] = useState("");
    //eventually set state to redux
    const [wineries, setWineries] = useState([]);

    useEffect(async() => {
        const res = await fetch(`http://localhost:5000/api/wineries`)
        const data = await res.json();
        setWineries(data)
    }, []);

    const submitForm = async (e) => {
        e.preventDefalt();
        try {
            const res = fetch(`http://localhost:5000/api/wineries`)
            const data = await res.json();
            setWineries(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <input placeholder="🍷 Find a Winery" value={query} onChange={(e) => setQuery(e.target.value)}></input>
            </form>
            <h1>Wineries</h1>
            {wineries.map((winery) => {
                    const { id, name, location, website } = winery;
                    console.log(website)
                    let nameMatches = name.includes(query.toString());
                    let locationMatches = location === query;
                    let websiteMatches = website.includes(query.toString());
                    if ((nameMatches || locationMatches || websiteMatches) || query === '') {
                        return (
                            <div className='winery-info-container' key={id}>
                                <h2 className='winery-name'>{name}</h2>
                                <div className='winery-state'>State: {location}</div>
                                <a className='winery-website' href={`https://${website}`}>{website}</a>
                            </div>
                        );
                    }

            })}
        </>
    )
}

export default Wineries;
