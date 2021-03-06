//Base url
const base_url = "https://api.rawg.io/api/";

//Getting the date

const getCurrrentMonth = () => {
       const month = new Date().getMonth();
    if(month < 10) {
        return `0${month}`;
    } else{
        return month;
    }
};

//Getting the date

const getCurrrentDay = () => {
    const day = new Date().getDate();
    if(day < 10) {
        return `0${day}`;
    } else{
        return day;
    }
};

//Currrent day/month/year

const currentYear = new Date().getFullYear();
const currentMonth = getCurrrentMonth();
const currentDay = getCurrrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

console.log(currentDate);


//Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page-size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-added&page-size=10`;



export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Game details

export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;

//Game screenshots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots`;

//Searched GAme
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9`;