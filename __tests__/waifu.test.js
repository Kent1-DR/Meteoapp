/*
// Importez fetch-mock pour simuler les appels réseau
import fetchMock from 'fetch-mock';

// Importez la fonction que vous souhaitez tester depuis votre fichier waifu.js
import { fetchWaifuImages } from './waifu';

// Décrivez votre suite de tests avec describe()
describe('fetchWaifuImages function', () => {
  // Avant chaque test, configurez fetchMock pour intercepter les appels réseau
  beforeEach(() => {
    fetchMock.get('https://api.waifu.im/search', {
      // Mockez une réponse aléatoire de l'API
      images: [
        { url: 'https://example.com/image1.jpg', image_id: 1 },
        { url: 'https://example.com/image2.jpg', image_id: 2 },
      ],
    });
  });

  // Après chaque test, restaurez fetch à son état d'origine
  afterEach(() => {
    fetchMock.restore();
  });

  // Définissez votre test avec test() ou it()
  test('should fetch waifu images from API', async () => {
    // Appelez la fonction à tester
    const images = await fetchWaifuImages();

    // Vérifiez que la fonction effectue un appel à l'API attendue
    expect(fetchMock.calls()).toHaveLength(1);
    expect(fetchMock.calls()[0][0]).toBe('https://api.waifu.im/search');

    // Vérifiez que la fonction traite correctement la réponse de l'API
    expect(images).toEqual([
      { url: 'https://example.com/image1.jpg', image_id: 1 },
      { url: 'https://example.com/image2.jpg', image_id: 2 },
    ]);
  });
});
*/
