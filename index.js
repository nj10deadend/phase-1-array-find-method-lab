function superbowlWin(record) {
    const foundSeason = record.find(season => season.result === "W")
        if(!foundSeason) {
            return undefined
        } else {
            return foundSeason.year
        }
}
