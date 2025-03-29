const episodes = [
    { number: 13, title: "Season 2, Episode 1: You aren't E-rank, are You", season: 2, link: "https://drive.google.com/file/d/1JQfCufhVlZI5EuMZq3E3QarbFuEWiBmI/preview" },
    { number: 14, title: "Season 2, Episode 2: I Suppose You aren’t Aware", season: 2, link: "https://drive.google.com/file/d/1Lt9dnLo7NQ5MIm71qYvqayCKp8I30CMg/preview" },
    { number: 15, title: "Season 2, Episode 3: Still a Long Way to Go", season: 2, link: "https://drive.google.com/file/d/1OvZ5xv9qQ0W7nyvMzfcCd6IzjxvBzB4V/preview" },
    { number: 16, title: "Season 2, Episode 4: I Need to Stop Faking", season: 2, link: "https://drive.google.com/file/d/1R3arorfVqHotdcpVmFj8kRDrDnJoDFZ-/preview" },
    { number: 17, title: "Season 2, Episode 5: This Is What We're Trained to Do", season: 2, link: "https://drive.google.com/file/d/1W-n7sYGuccsOvCXPo1EzwHdF_t7TiFeL/preview" },
    { number: 18, title: "Season 2, Episode 6: Don't Look Down on My Guys", season: 2, link: "https://drive.google.com/file/d/1cdQSaNi81fN2Bvq-DAziNjppQ-2DNqzT/preview" },
    { number: 19, title: "Season 2, Episode 7: The 10th S-Rank Hunter", season: 2, link: "https://drive.google.com/file/d/1goXe8RcFDg4TFdbpJIbYyDdMqRTvndlY/preview" },
    { number: 20, title: "Season 2, Episode 8: Looking Up Was Tiring Me Out", season: 2, link: "https://drive.google.com/file/d/1m3l1jRtIEpqC46sHYWl2XspsdbzwEuPf/preview" },
    { number: 21, title: "Season 2, Episode 9: It was All Worth It ", season: 2, link: "https://drive.google.com/file/d/1sMAPm7XIw9-lA1TTW6FzDcIi8NiFDYEX/preview" },
    { number: 22, title: "Season 2, Episode 10: We Need a Hero ", season: 2, link: "https://drive.google.com/file/d/1yq34FgdXM3sCjdlLDFRhj2qQoVHsNwAZ/preview" },
    { number: 23, title: "Season 2, Episode 11: It's Going to Get Even More Intense", season: 2, link: "https://drive.google.com/file/d/15jzM5CgVCy6_0RYsVezDdGIajZwyndIu/preview" },
    { number: 24, title: "Season 2, Episode 12: Are You the King of Humans ", season: 2, link: "https://drive.google.com/file/d/1BwqI7HvWHFYeRqLESh-Sh9Y09--js7FO/preview" },
    { number: 25, title: "Season 2, Episode 13: Onto the Next Target ", season: 2, link: "https://drive.google.com/file/d/1DlD8KyvTVUjhBCpOcOYybkURj3Xbu18x/preview" },

  
    { number: 1, title: "Season 1, Episode 1: I'm Used To It", season: 1, link: "https://drive.google.com/file/d/1IbvAJuBMj1DDEYp0_LPy0Ff5ozaatuXv/preview" },
    { number: 2, title: "Season 1, Episode 2: If I Had One More Chance", season: 1, link: "https://drive.google.com/file/d/1JFssvn4Sq8G5K-P_EDh7voOJgF3yUBsE/preview" },
    { number: 3, title: "Season 1, Episode 3: It's Like a Game", season: 1, link: "https://drive.google.com/file/d/1JFu5l4ieSAbdonRbrC_FS8g970J2hXzm/preview" },
    { number: 4, title: "Season 1, Episode 4: I Gotta Get Stronger", season: 1, link: "https://drive.google.com/file/d/1IYdehNQumqpR19CG1VavuagO05WIfNQi/preview" },
    { number: 5, title: "Season 1, Episode 5: A Pretty Good Deal", season: 1, link: "https://drive.google.com/file/d/1IZ9KF03YCtPTzfTL7iOKTf6zUFIAwNGq/preview" },
    { number: 6, title: "Season 1, Episode 6: The Real Hunt Begins", season: 1, link: "https://drive.google.com/file/d/1J6v40j898qjNxdoPV-a4wEPvHXLurb8R/preview" },
    { number: 7, title: "Season 1, Episode 7: Let's See How Far I Can Go", season: 1, link: "https://drive.google.com/file/d/1IpNukrIqGyacgfKVDaRgLos695HAma1n/preview" },
    { number: 8, title: "Season 1, Episode 8: This is Frustrating", season: 1, link: "https://drive.google.com/file/d/1J-l-IOk2LCYcpjHguSsd2JAtdfdKno53/preview" },
    { number: 9, title: "Season 1, Episode 9: You've Been Hiding Your Skills", season: 1, link: "https://drive.google.com/file/d/1IwZ1mletCO2aAmZqyLBsw6lr3rhEVWfR/preview" },
    { number: 10, title: "Season 1, Episode 10: What Is This, a Picnic?", season: 1, link: "https://drive.google.com/file/d/1If8QMoKo9jFwISsOpmRm4vFvyNl_FYOY/preview" },
    { number: 11, title: "Season 1, Episode 11: A Knight Who Defends an Empty Throne?", season: 1, link: "https://drive.google.com/file/d/1--2xhYJlc3NmVKzRR9eQwpPs-O3vTrsQ/preview" },
    { number: 12, title: "Season 1, Episode 12: Arise", season: 1, link: "https://drive.google.com/file/d/1I_huA7mR8eAtBuZ3NuTpmvrbbNHllUtz/preview" },
    // Add more episodes here...
];

function loadSeasons() {
    const container = document.getElementById('season-container');
    const seasons = [...new Set(episodes.map(ep => ep.season))]; // Get unique seasons

    seasons.forEach(season => {
        const seasonEpisodes = episodes.filter(ep => ep.season === season);

        // Create accordion item for each season
        const seasonItem = document.createElement('div');
        seasonItem.className = 'accordion-item';
        seasonItem.innerHTML = `
            <h2 class="accordion-header" id="headingSeason${season}">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeason${season}" aria-expanded="false" aria-controls="collapseSeason${season}">
                        Season ${season}
                    </div>
                </div>
       
            </h2>
        
        <button class="btn btn-sm btn-outline-secondary sort-button" id="sortButtonSeason${season}" data-season="${season}" data-sort="desc" style="display: none;">Descending</button>
              
            <div id="collapseSeason${season}" class="accordion-collapse collapse" aria-labelledby="headingSeason${season}" data-bs-parent="#season-container">
                <div class="accordion-body">
                    <div class="row g-4" id="season-${season}-episodes">
                        </div>
                </div>
            </div>
        `;

        container.appendChild(seasonItem);

        // Load episodes for this season (initial load is ascending)
        loadEpisodesForSeason(season, 'desc');

        // Add event listener to sort button
        const sortButton = document.getElementById(`sortButtonSeason${season}`);
        sortButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent accordion collapse
            const currentSort = this.dataset.sort;
            const newSort = currentSort === 'asc' ? 'desc' : 'asc';
            this.dataset.sort = newSort;
            this.textContent = newSort === 'asc' ? 'Ascending' : 'Descending';
            loadEpisodesForSeason(season, newSort);
        });
    });

    // Event listeners to show/hide sort buttons based on accordion state
    document.getElementById('season-container').addEventListener('show.bs.collapse', function(event) {
        const season = event.target.id.replace('collapseSeason', '');
        const sortButton = document.getElementById(`sortButtonSeason${season}`);
        if (sortButton) {
            sortButton.style.display = 'block';
        }
    });

    document.getElementById('season-container').addEventListener('hide.bs.collapse', function(event) {
        const season = event.target.id.replace('collapseSeason', '');
        const sortButton = document.getElementById(`sortButtonSeason${season}`);
        if (sortButton) {
            sortButton.style.display = 'none';
        }
    });
}


function loadEpisodesForSeason(season, sortOrder) {
    const episodeGrid = document.getElementById(`season-${season}-episodes`);
    episodeGrid.innerHTML = ''; // Clear existing episodes

    let seasonEpisodes = episodes.filter(ep => ep.season === season);

    // Sort episodes
    seasonEpisodes.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.number - b.number;
        } else {
            return b.number - a.number;
        }
    });


    seasonEpisodes.forEach(episode => {
        const card = document.createElement('div');
        card.className = 'col-md-4 col-sm-6';
        card.innerHTML = `
            <div class="card">
                <img src="episode-thumbnails/${episode.number}.png" class="card-img-top" alt="${episode.title}">
                <div class="card-body">
                    <h6 class="card-title">${episode.title}</h6>
                    <a href="watch.html?episode=${episode.number}" class="btn btn-primary">Watch Now</a>
                </div>
            </div>
        `;
        episodeGrid.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', loadSeasons);
