const BASE_URL_IMAGE_CAT = 'https://api.thecatapi.com/v1'
const BASE_URL_IMAGE_DOG = 'https://api.thedogapi.com/v1'
const BASE_URL_IMAGE_FOX = 'https://randomfox.ca';

const IMG_FALLBACK = 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'

const renderCard = ({title, image, action}) => {
  return `
        <div class="w-[194px] h-auto flex gap-2 flex-col">
            <h2 class="text-lg font-bold text-[#ffffff]">${title}</h2>
            
            <img src="${image}" class="w-full h-[288px] object-cover shadow-md rounded-lg">

            <button class="w-full h-auto text-sm py-2 px-4 bg-[#2B2B37] text-[#ffffff] rounded hover:bg-[#2B2B3775]" onclick="${action}">Atualizar imagem</button>
        </div>
    `;
}

const getCat = async () => {
  await fetch(`${BASE_URL_IMAGE_CAT}/images/search?limit=1`)
    .then((response) => response.json())
    .then((content) => {
      const image = content[0]?.url || IMG_FALLBACK

      const render = renderCard({title: 'Gato:', image, action: 'getCat()'});
      const element = document.getElementById('cat');
      element.innerHTML = render
    })
}

const getDog = async () => {
  await fetch(`${BASE_URL_IMAGE_DOG}/images/search?limit=1`)
    .then((response) => response.json())
    .then((content) => {
      const image = content[0]?.url || IMG_FALLBACK

      const render = renderCard({title: 'Cachorro:', image, action: 'getDog()'});
      const element = document.getElementById('dog');
      element.innerHTML = render
    })
}

const getFox = async () => {
  await fetch(`${BASE_URL_IMAGE_FOX}/floof/`)
    .then((response) => response.json())
    .then((content) => {
      const image = content?.image || IMG_FALLBACK

      const render = renderCard({title: 'Raposa:', image, action: 'getFox()'});
      const element = document.getElementById('fox');
      element.innerHTML = render
    })
}