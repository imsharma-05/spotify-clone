// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "141d3d0c19e74652b809b015f8653817";


    const scopes = [
        "user-read-playback-position",
        "user-read-email",
        "user-library-modify",
        "playlist-modify-public",
        "ugc-image-upload",
        "user-follow-modify",
        "user-modify-playback-state",
        "user-read-recently-played",
        "user-read-private",
        "user-library-read",
        "user-top-read",
        "playlist-modify-private",
        "user-follow-read",
        "user-read-playback-state",
        "user-read-currently-playing",
        "playlist-read-private",
        "playlist-read-collaborative",
    ];

export const getTokenfromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((intitial, item)=> {
        
        var parts = item.split("=");
        intitial[parts[0]] = decodeURIComponent(parts[1]);
        return intitial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
