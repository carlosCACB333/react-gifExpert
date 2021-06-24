 export const getGifs = async(kward) => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(kward)}&limit=8&api_key=4ztOYiXOIfzZbnOmyll4DxnxoIAvrzUu`;
        const resp = await fetch(url);
        const data = await resp.json();
        const gifs = (data.data).map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized.url,
                date:img.import_datetime
            }
        })
        return(gifs);
        
    }