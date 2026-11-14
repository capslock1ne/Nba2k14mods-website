
import React, { useMemo, useState } from "react";
import players from "./data/cyberface";
import "./cyberface.css";
import Credits from "../components/credits/credit";




function Cyberface() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const [search, setSearch] = useState("");
    const [selectedLetter, setSelectedLetter] = useState("ALL");

    const filteredPlayers = useMemo(() => {
        const keyword = search.trim().toLowerCase();

        return players.filter((player) => {
            const firstName = String(player.firstName ?? "").toLowerCase();
            const lastName = String(player.lastName ?? "").toLowerCase();
            const id = String(player.cyberfaceId ?? "").toLowerCase();

            const matchesLetter =
                selectedLetter === "ALL" ||
                lastName.startsWith(selectedLetter.toLowerCase());

            const fullName = `${firstName} ${lastName}`;

            const matchesSearch =
                !keyword ||
                firstName.includes(keyword) ||
                lastName.includes(keyword) ||
                fullName.includes(keyword) ||
                id.includes(keyword);

            return matchesLetter && matchesSearch;
        });
    }, [search, selectedLetter]);

    return (
        <div className="cyberface">

            <div className="cyberface-container">

                <div className="cyberface-heading">
                    <h2>NBA PLAYERS CYBERFACE LOOKUP</h2>
                    <p>
                        Find your favorite NBA players and their
                        corresponding cyberface IDs.
                    </p>
                </div>

                <hr className="divider" />

                <div className="search-players">

                    <div className="search-header">
                        <p>SEARCH BY NAME, ID, OR LETTER</p>

                        <span className="player-count">
                            {filteredPlayers.length.toLocaleString()} PLAYERS FOUND
                        </span>
                    </div>

                    <div className="search-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search for players..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        {search && (
                            <button
                                type="button"
                                className="clear-search"
                                onClick={() => setSearch("")}
                                aria-label="Clear search"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    <div className="alphabet-section">

                        <div className="alphabet-heading">
                            <span>FILTER BY LAST NAME</span>
                        </div>

                        <div className="alphabet-filter">

                            <button
                                type="button"
                                className={
                                    selectedLetter === "ALL" ? "active" : ""
                                }
                                onClick={() => setSelectedLetter("ALL")}
                            >
                                ALL
                            </button>

                            {alphabet.map((letter) => (
                                <button
                                    type="button"
                                    key={letter}
                                    className={
                                        selectedLetter === letter
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() => setSelectedLetter(letter)}
                                >
                                    {letter}
                                </button>
                            ))}

                        </div>
                    </div>

                    <div className="cyberface-table-container">

                        <table className="cyberface-table">

                            <thead>
                                <tr>
                                    <th>LAST NAME</th>
                                    <th>FIRST NAME</th>
                                    <th>CYBERFACE ID</th>
                                </tr>
                            </thead>

                            <tbody>

                                {filteredPlayers.length > 0 ? (
                                    filteredPlayers.map((player, index) => (
                                        <tr
                                            key={`${player.firstName}-${player.lastName}-${player.cyberfaceId}-${index}`}
                                        >
                                            <td>{player.lastName}</td>
                                            <td>{player.firstName}</td>
                                            <td className="cyberface-id">
                                                {player.cyberfaceId}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="3"
                                            className="empty-results"
                                        >
                                            <div className="empty-results-content">
                                                <span>NO PLAYERS FOUND</span>
                                                <p>
                                                    Try another player name,
                                                    cyberface ID, or letter.
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setSearch("");
                                                        setSelectedLetter("ALL");
                                                    }}
                                                >
                                                    RESET FILTERS
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                            

                        </table>
                        

                    </div>
                    

                </div>

            </div>
        <Credits /> 
        </div>

        
    );
}

export default Cyberface;
