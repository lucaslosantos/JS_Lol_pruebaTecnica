const lolGallery$$= document.querySelector(".lol-gallery")

const lolApis="https://apilol-seven.vercel.app/api/campeones";

const lolURL = async () => {
    console.log("Hola");
    const lolApi = await fetch(lolApis);
    
    const lolJSON = await lolApi.json();
    mapCharacters(lolJSON);
    
};

const mapCharacters = (array) => {
const mappedCharacters = array.map((character) => ({
    name: character.name,
    imagen:character.url,
}));

paintCharacter(mappedCharacters);
console.log(mappedCharacters);
};

const paintCharacter = (array) => {
    const characterHTML = array.map ((character)=>`
    <div class="lol">
    <h2>
    ${character.name}
    </h2>
    <img
    src=${character.imagen}
    alt=${character.name}
    >
    </div>
    `
    ).join("")
    lolGallery$$.innerHTML=characterHTML

}

lolURL();


