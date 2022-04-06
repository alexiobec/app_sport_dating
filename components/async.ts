async function getRemoteData() {
    //GET /data
    const response = await fetch('http://example.comhtt/movies.json')
    const responseJson = await response.json() // [0, 4, 3]

    // .map(counter => counter+1)
    return responseJson.map((counter: number) => counter + 1)
}

export default getRemoteData