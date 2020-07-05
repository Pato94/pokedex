import scrapy

class PokemonSpider(scrapy.Spider):
    name = 'pokespider'
    start_urls = map(lambda n: 'https://www.pokemon.com/el/pokedex/' + str(n+1), range(151))

    def parse(self, response):
        name = str(response.css('.pokedex-pokemon-pagination-title').css('div::text')[1].get()).strip()
        id = int(response.css('.pokedex-pokemon-pagination-title .pokemon-number ::text').get().encode('utf8')[-3:])

        yield {
            'id': id,
            'name': name
        }
