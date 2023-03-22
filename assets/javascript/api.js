

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/gabriellevita/portfolio-profissional/main/data/profile.json';
    fetch(url); 
    const fetching = await fetch(url);
    return await fetching.json()
}