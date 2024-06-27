async function fetchDataPlayer(name, playerId, arrayId, countryId) {
    try {
        let response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${name}`);
        const data = await response.json();
        console.log(data)

        let image = document.getElementById(playerId)
        image.src = data.player[arrayId].strCutout

        let country = document.getElementById(countryId);

        country.innerHTML = data.player[arrayId].strPlayer + " from: " + data.player[arrayId].strNationality
            + "<br>" + "<br>" + " this player is currently playing at: " + data.player[arrayId].strTeam;
    } catch (error) {
        console.error(error);
    }
}

async function fetchDataClub(name, logoId, arrayId, clubNameId, descriptionId) {
    try {
        let response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${name}`);
        const data = await response.json();
        console.log(data)

        let image = document.getElementById(logoId)
        image.src = data.teams[arrayId].strBadge

        let clubName = document.getElementById(clubNameId);
        let description = document.getElementById(descriptionId);

        clubName.innerHTML = "club name: " + data.teams[arrayId].strTeam
        description.innerHTML = data.teams[arrayId].strDescriptionEN;
    } catch (error) {
        console.error(error);
    }
}

fetchDataPlayer('Rafael_Nadal', 'player1', 0, 'country1')
fetchDataPlayer('roger_federer', 'player2', 0, 'country2')
fetchDataClub('ATP_Mens', 'logo1', 0, 'clubName1', 'description1')
fetchDataClub('Spain_Tennis', 'logo2', 0, 'clubName2', 'description2')