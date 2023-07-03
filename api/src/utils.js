module.exports = (data) => {
    if(Array.isArray(data)) {
      const clean =  data?.results.map(el => {
        return {
            id: el.id,
            name: el.name,
            description: el.description ? el.description : "",
            platforms: el.platforms.map(i => i.platform.name),
            image: el.background_image,
            releaseDate: el.released,
            rating: el.rating
        }
      })
      return clean;
    }
    return {
        name: data.name,
        description: data.description ? data.description : "" ,
        platforms: data.platforms.map(el => el.platform.name),
        image: data.image,
        releaseDate: data.released,
        rating: data.rating
    }
}