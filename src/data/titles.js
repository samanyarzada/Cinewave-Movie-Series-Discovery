const poster = (path) => `https://image.tmdb.org/t/p/w500/${path}`;
const backdrop = (path) => `https://image.tmdb.org/t/p/original/${path}`;

export const titles = [
  {
    id: 'dune-part-two', title: 'Dune: Part Two', type: 'movie', year: 2024, rating: 8.5,
    duration: '2h 46m', genres: ['Sci-Fi', 'Adventure', 'Drama'], maturity: 'PG-13',
    poster: poster('1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg'), backdrop: backdrop('xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg'),
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. As he faces a choice between love and the fate of the universe, a legend begins to take shape.',
    director: 'Denis Villeneuve', cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Austin Butler'], featured: true, trending: true,
    accent: '#b9a07a', awards: 'Academy Award nominee'
  },
  {
    id: 'oppenheimer', title: 'Oppenheimer', type: 'movie', year: 2023, rating: 8.3,
    duration: '3h 00m', genres: ['Drama', 'History', 'Thriller'], maturity: 'R',
    poster: poster('ptpr0kGAckfQkJeJIt8st5dglvd.jpg'), backdrop: backdrop('fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg'),
    description: 'The story of J. Robert Oppenheimer and his role in the development of the atomic bomb, told through the ambition, moral conflict, and consequences that changed the world forever.',
    director: 'Christopher Nolan', cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'], trending: true, accent: '#bd785d'
  },
  {
    id: 'the-batman', title: 'The Batman', type: 'movie', year: 2022, rating: 7.8,
    duration: '2h 56m', genres: ['Action', 'Crime', 'Drama'], maturity: 'PG-13',
    poster: poster('74xTEgt7R36Fpooo50r9T25onhq.jpg'), backdrop: backdrop('b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg'),
    description: 'When a sadistic killer leaves a trail of clues, Batman is drawn into Gotham City’s darkest corners. The investigation forces him to confront the corruption beneath the city and the meaning of his own mission.',
    director: 'Matt Reeves', cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano', 'Jeffrey Wright'], trending: true, accent: '#b94a42'
  },
  {
    id: 'spider-verse', title: 'Across the Spider-Verse', type: 'movie', year: 2023, rating: 8.6,
    duration: '2h 20m', genres: ['Animation', 'Action', 'Adventure'], maturity: 'PG',
    poster: poster('8Vt6mWEReuyOf61Lnj5Xj704m8.jpg'), backdrop: backdrop('4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg'),
    description: 'Miles Morales is catapulted across the multiverse, where he encounters a team of Spider-People charged with protecting its existence. A clash of ideals puts his future and family on the line.',
    director: 'Joaquim Dos Santos', cast: ['Shameik Moore', 'Hailee Steinfeld', 'Brian Tyree Henry'], trending: true, accent: '#d84baf'
  },
  {
    id: 'poor-things', title: 'Poor Things', type: 'movie', year: 2023, rating: 7.8,
    duration: '2h 21m', genres: ['Romance', 'Sci-Fi', 'Drama'], maturity: 'R',
    poster: poster('kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg'), backdrop: backdrop('6fVgZ3qNSkZs8wq7YdU8y7g9T4Z.jpg'),
    description: 'The incredible tale and fantastical evolution of Bella Baxter, a young woman brought back to life by an unorthodox scientist. Curious about the world, she sets off on a journey of discovery.',
    director: 'Yorgos Lanthimos', cast: ['Emma Stone', 'Mark Ruffalo', 'Willem Dafoe'], accent: '#73a7a3'
  },
  {
    id: 'blade-runner-2049', title: 'Blade Runner 2049', type: 'movie', year: 2017, rating: 8.0,
    duration: '2h 44m', genres: ['Sci-Fi', 'Mystery', 'Drama'], maturity: 'R',
    poster: poster('gajva2L0rPYkEWjzgFlBXCAVBE5.jpg'), backdrop: backdrop('ilRyazdMJwN05exqhwK4tMKBYZs.jpg'),
    description: 'A young blade runner uncovers a long-buried secret that has the potential to plunge what remains of society into chaos. His search leads him toward a former blade runner who has been missing for decades.',
    director: 'Denis Villeneuve', cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'], accent: '#d08a68'
  },
  {
    id: 'arrival', title: 'Arrival', type: 'movie', year: 2016, rating: 7.9,
    duration: '1h 56m', genres: ['Sci-Fi', 'Drama', 'Mystery'], maturity: 'PG-13',
    poster: poster('x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg'), backdrop: backdrop('yIZ1xendyqKvY3FGeeUYUd5X9Mm.jpg'),
    description: 'A linguist is recruited by the military to communicate with mysterious spacecraft that have landed around the world. As she works to understand their language, time and memory begin to shift.',
    director: 'Denis Villeneuve', cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'], accent: '#a8c1ba'
  },
  {
    id: 'tenet', title: 'Tenet', type: 'movie', year: 2020, rating: 7.3,
    duration: '2h 30m', genres: ['Action', 'Sci-Fi', 'Thriller'], maturity: 'PG-13',
    poster: poster('k68nPLbIST6NP96JmTxmZijEvCA.jpg'), backdrop: backdrop('yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'),
    description: 'Armed with only one word, a CIA operative journeys through a twilight world of international espionage on a mission that unfolds beyond real time. The stakes are greater than he can imagine.',
    director: 'Christopher Nolan', cast: ['John David Washington', 'Robert Pattinson', 'Elizabeth Debicki'], accent: '#477d95'
  },
  {
    id: 'the-creator', title: 'The Creator', type: 'movie', year: 2023, rating: 7.0,
    duration: '2h 13m', genres: ['Sci-Fi', 'Action', 'Adventure'], maturity: 'PG-13',
    poster: poster('vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg'), backdrop: backdrop('kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg'),
    description: 'Amid a future war between humanity and artificial intelligence, a hardened ex-special forces agent is recruited to hunt down a mysterious weapon. What he finds changes the conflict forever.',
    director: 'Gareth Edwards', cast: ['John David Washington', 'Gemma Chan', 'Madeleine Yuna Voyles'], accent: '#8ea6b2'
  },
  {
    id: 'civil-war', title: 'Civil War', type: 'movie', year: 2024, rating: 7.1,
    duration: '1h 49m', genres: ['Action', 'Thriller', 'Drama'], maturity: 'R',
    poster: poster('sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg'), backdrop: backdrop('zViRwl3ySscZnbXZJ2Q9wq3SeUG.jpg'),
    description: 'In a near-future America fractured by conflict, a team of journalists races toward the capital to document a rapidly escalating crisis before the country reaches a point of no return.',
    director: 'Alex Garland', cast: ['Kirsten Dunst', 'Wagner Moura', 'Cailee Spaeny'], accent: '#b67f5e'
  },
  {
    id: 'the-fall-guy', title: 'The Fall Guy', type: 'movie', year: 2024, rating: 7.0,
    duration: '2h 06m', genres: ['Action', 'Comedy', 'Romance'], maturity: 'PG-13',
    poster: poster('tSz1qsmSJon0rqjHBxXZmrotjtM.jpg'), backdrop: backdrop('4woSOUD0equAYzvwhWBHIJDCM88.jpg'),
    description: 'A battle-scarred stuntman finds himself pulled into a mystery when the star of a mega-budget movie disappears. He has to solve the case and win back the person he loves while doing his day job.',
    director: 'David Leitch', cast: ['Ryan Gosling', 'Emily Blunt', 'Aaron Taylor-Johnson'], accent: '#c58c57'
  },
  {
    id: 'the-holdovers', title: 'The Holdovers', type: 'movie', year: 2023, rating: 8.0,
    duration: '2h 13m', genres: ['Comedy', 'Drama'], maturity: 'R',
    poster: poster('VHSzNBTwxV8vh7wylo7O9CLdac.jpg'), backdrop: backdrop('7o9eS9gY9j0u4z5oJ0kQe0dQX6.jpg'),
    description: 'A curmudgeonly instructor remains on campus during Christmas break with a troubled student and the school’s head cook. An unlikely bond develops as each learns to see the others more clearly.',
    director: 'Alexander Payne', cast: ['Paul Giamatti', 'Da’Vine Joy Randolph', 'Dominic Sessa'], accent: '#bca56b'
  },
  {
    id: 'interstellar', title: 'Interstellar', type: 'movie', year: 2014, rating: 8.7,
    duration: '2h 49m', genres: ['Sci-Fi', 'Adventure', 'Drama'], maturity: 'PG-13',
    poster: poster('gEU2QniE6Ew3Y4uY1jZQwYyV8M.jpg'), backdrop: backdrop('rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'),
    description: 'With Earth becoming uninhabitable, a team of explorers travels beyond this galaxy to discover whether mankind has a future among the stars. A journey across space becomes a journey through time and love.',
    director: 'Christopher Nolan', cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'], accent: '#8ba3c1', trending: true
  },
  {
    id: 'shogun', title: 'Shōgun', type: 'series', year: 2024, rating: 8.6,
    duration: '1 Season', episodes: '10 Episodes', genres: ['Drama', 'Adventure', 'History'], maturity: 'TV-MA',
    poster: poster('7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg'), backdrop: backdrop('dYvIUzdh6TUv4IFRq8UBk3f6P5g.jpg'),
    description: 'In 17th-century Japan, a shipwrecked English pilot becomes entangled in a struggle for power between a formidable lord and the political forces surrounding him. Honor, strategy, and survival collide.',
    director: 'Rachel Kondo & Justin Marks', cast: ['Hiroyuki Sanada', 'Cosmo Jarvis', 'Anna Sawai'], featured: false, trending: true, accent: '#a66b47'
  },
  {
    id: 'the-last-of-us', title: 'The Last of Us', type: 'series', year: 2023, rating: 8.7,
    duration: '2 Seasons', episodes: '16 Episodes', genres: ['Drama', 'Sci-Fi', 'Action'], maturity: 'TV-MA',
    poster: poster('uKvVjHNqB5VmOrAVxf9wtH3C7l9.jpg'), backdrop: backdrop('aU3Jo3f4j3g8T3c1QF8WvS0YwQw.jpg'),
    description: 'Twenty years after civilization collapses, a hardened survivor is hired to smuggle a teenage girl out of a quarantine zone. Their journey across a dangerous landscape becomes a story of trust and humanity.',
    director: 'Craig Mazin & Neil Druckmann', cast: ['Pedro Pascal', 'Bella Ramsey', 'Gabriel Luna'], trending: true, accent: '#8f9f77'
  },
  {
    id: 'severance', title: 'Severance', type: 'series', year: 2022, rating: 8.7,
    duration: '2 Seasons', episodes: '19 Episodes', genres: ['Mystery', 'Drama', 'Sci-Fi'], maturity: 'TV-MA',
    poster: poster('lFf6LLrQjYldcZItzOkGmMMigP7.jpg'), backdrop: backdrop('nA4nJ5h4C5J7V8L2V5zYv1uC.jpg'),
    description: 'At a mysterious corporation, employees undergo a procedure that separates their work memories from their personal lives. One employee begins to uncover the unsettling truth behind the arrangement.',
    director: 'Dan Erickson', cast: ['Adam Scott', 'Britt Lower', 'Patricia Arquette'], trending: true, accent: '#9aa9b7'
  },
  {
    id: 'arcane', title: 'Arcane', type: 'series', year: 2021, rating: 9.0,
    duration: '2 Seasons', episodes: '18 Episodes', genres: ['Animation', 'Action', 'Drama'], maturity: 'TV-14',
    poster: poster('fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg'), backdrop: backdrop('z59kJfcElR9eHO9rJbWp4qWMuee.jpg'),
    description: 'Amid the stark tension between a prosperous city and its oppressed undercity, two sisters find themselves on opposing sides of a conflict fueled by invention, ambition, and dangerous magic.',
    director: 'Christian Linke & Alex Yee', cast: ['Hailee Steinfeld', 'Ella Purnell', 'Kevin Alejandro'], trending: true, accent: '#9272ca'
  },
  {
    id: 'house-of-the-dragon', title: 'House of the Dragon', type: 'series', year: 2022, rating: 8.3,
    duration: '2 Seasons', episodes: '18 Episodes', genres: ['Drama', 'Fantasy', 'Action'], maturity: 'TV-MA',
    poster: poster('z2yahl2uefxDCl0nogcRBstwruJ.jpg'), backdrop: backdrop('etj8E2o0Bud0HkONVQPjyCkIvpv.jpg'),
    description: 'Set generations before the fall of the Targaryen dynasty, this epic chronicles a royal family divided by succession, loyalty, and dragons powerful enough to reshape the realm.',
    director: 'Ryan Condal & George R. R. Martin', cast: ['Emma D’Arcy', 'Olivia Cooke', 'Matt Smith'], trending: true, accent: '#bd7b71'
  },
  {
    id: 'wednesday', title: 'Wednesday', type: 'series', year: 2022, rating: 8.1,
    duration: '2 Seasons', episodes: '16 Episodes', genres: ['Comedy', 'Mystery', 'Fantasy'], maturity: 'TV-14',
    poster: poster('jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg'), backdrop: backdrop('iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg'),
    description: 'Wednesday Addams investigates a string of supernatural mysteries at her unusual academy while navigating new friendships, old secrets, and the challenges of growing into her own power.',
    director: 'Alfred Gough & Miles Millar', cast: ['Jenna Ortega', 'Emma Myers', 'Catherine Zeta-Jones'], accent: '#8e7ab3'
  },
  {
    id: 'the-queens-gambit', title: 'The Queen’s Gambit', type: 'series', year: 2020, rating: 8.5,
    duration: 'Limited Series', episodes: '7 Episodes', genres: ['Drama'], maturity: 'TV-MA',
    poster: poster('zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg'), backdrop: backdrop('34OGjFEbH4t8YvD5v1P8M3jS1A8.jpg'),
    description: 'An orphaned chess prodigy discovers the price of genius as she rises through a male-dominated world of competitive chess while struggling with loneliness and addiction.',
    director: 'Scott Frank', cast: ['Anya Taylor-Joy', 'Chloe Pirrie', 'Bill Camp'], accent: '#b39e6e'
  },
  {
    id: 'stranger-things', title: 'Stranger Things', type: 'series', year: 2016, rating: 8.7,
    duration: '4 Seasons', episodes: '34 Episodes', genres: ['Sci-Fi', 'Drama', 'Horror'], maturity: 'TV-14',
    poster: poster('49WJfeN0moxb9IPfGn8AIqMGskD.jpg'), backdrop: backdrop('56v2KjBlU4XaOv9rVYEQypROD7P.jpg'),
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one extraordinary girl who may hold the key to everything.',
    director: 'The Duffer Brothers', cast: ['Millie Bobby Brown', 'Finn Wolfhard', 'David Harbour'], trending: true, accent: '#b84b56'
  },
  {
    id: 'the-bear', title: 'The Bear', type: 'series', year: 2022, rating: 8.5,
    duration: '3 Seasons', episodes: '28 Episodes', genres: ['Drama', 'Comedy'], maturity: 'TV-MA',
    poster: poster('sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg'), backdrop: backdrop('c7xTZ9EA6GpH4g0Z0x6kV3c1.jpg'),
    description: 'A gifted young chef returns home to run his family’s sandwich shop, bringing fine-dining intensity into a chaotic kitchen. Along the way, a team learns what it means to build something together.',
    director: 'Christopher Storer', cast: ['Jeremy Allen White', 'Ayo Edebiri', 'Ebon Moss-Bachrach'], accent: '#ba8359'
  },
  {
    id: 'dark', title: 'Dark', type: 'series', year: 2017, rating: 8.7,
    duration: '3 Seasons', episodes: '26 Episodes', genres: ['Mystery', 'Sci-Fi', 'Drama'], maturity: 'TV-MA',
    poster: poster('apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg'), backdrop: backdrop('5LoHuHWA4H8jElFlZDvsmU2n63b.jpg'),
    description: 'A missing child sends four families into a frantic search that exposes a complex mystery spanning generations. In a town where time refuses to behave normally, every secret has consequences.',
    director: 'Baran bo Odar', cast: ['Louis Hofmann', 'Lisa Vicari', 'Andreas Pietschmann'], accent: '#69849a'
  },
  {
    id: 'everything-everywhere', title: 'Everything Everywhere All at Once', type: 'movie', year: 2022, rating: 7.8,
    duration: '2h 19m', genres: ['Action', 'Adventure', 'Comedy'], maturity: 'R',
    poster: poster('w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg'), backdrop: backdrop('jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg'),
    description: 'An exhausted laundromat owner is swept into an absurd, heartfelt adventure through parallel universes, where she discovers that the smallest choices can hold the greatest power.',
    director: 'Daniel Kwan & Daniel Scheinert', cast: ['Michelle Yeoh', 'Stephanie Hsu', 'Ke Huy Quan'], accent: '#b47fbd'
  },
  {
    id: 'the-menu', title: 'The Menu', type: 'movie', year: 2022, rating: 7.2,
    duration: '1h 47m', genres: ['Thriller', 'Horror', 'Comedy'], maturity: 'R',
    poster: poster('fPtUgMcLIboqlTlPrq0bQpKK8eq.jpg'), backdrop: backdrop('1XS1oqL89opfnbLl8WnZY1O1uJx.jpg'),
    description: 'A couple travels to a coastal island for an exclusive restaurant experience, where a celebrated chef has prepared a lavish menu with shocking surprises hidden between courses.',
    director: 'Mark Mylod', cast: ['Anya Taylor-Joy', 'Ralph Fiennes', 'Nicholas Hoult'], accent: '#c0a26f'
  },
  {
    id: 'knives-out', title: 'Knives Out', type: 'movie', year: 2019, rating: 7.9,
    duration: '2h 10m', genres: ['Mystery', 'Comedy', 'Crime'], maturity: 'PG-13',
    poster: poster('pThyQovXQrw2m0s9x82twj48Jq4.jpg'), backdrop: backdrop('9Rj8l6gElLpRL7Kj17iZK3A7h7j.jpg'),
    description: 'When a famous mystery novelist dies after his birthday gathering, a sharp detective interviews a wildly eccentric family. Everyone has a motive, and almost nobody is telling the whole truth.',
    director: 'Rian Johnson', cast: ['Daniel Craig', 'Ana de Armas', 'Chris Evans'], accent: '#a9b59a'
  },
];

export const getTitle = (id) => titles.find((item) => item.id === id);
export const movies = titles.filter((item) => item.type === 'movie');
export const series = titles.filter((item) => item.type === 'series');
export const genres = [...new Set(titles.flatMap((item) => item.genres))].sort();
export const getSimilarTitles = (item, limit = 6) => titles
  .filter((candidate) => candidate.id !== item?.id && candidate.genres.some((genre) => item?.genres.includes(genre)))
  .sort((a, b) => b.rating - a.rating)
  .slice(0, limit);
