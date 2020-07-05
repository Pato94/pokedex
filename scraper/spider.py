import scrapy


def to_utf8_strip(u):
    return u.encode("utf8").strip()


class PokemonSpider(scrapy.Spider):
    name = 'pokespider'
    start_urls = map(lambda n: 'https://www.pokemon.com/el/pokedex/' + str(n + 1), range(151))

    def parse(self, response):
        # evolutions (maybe ids is enough?)
        name = to_utf8_strip(response.css('.pokedex-pokemon-pagination-title').css('div::text')[1].get())
        number = int(response.css('.pokedex-pokemon-pagination-title .pokemon-number ::text').get().encode('utf8')[-3:])
        image = response.css(".profile-images img::attr(src)").get().encode("utf8")
        description = response.css(".version-descriptions.active .active ::text").get().encode("utf8").strip()
        features_src = response.css(".pokemon-ability-info.active .attribute-value ::text").extract()
        features = filter(bool, map(to_utf8_strip, features_src))
        height = features[0]
        weight = features[1]
        category = features[-2]
        ability = features[-1]
        types_src = response.css(".pokedex-pokemon-attributes.active .dtm-type ul a ::text").extract()
        types = filter(bool, map(to_utf8_strip, types_src))
        weaknesses_src = response.css(".pokedex-pokemon-attributes.active .dtm-weaknesses ul a span ::text").extract()
        weaknesses = filter(bool, map(to_utf8_strip, weaknesses_src))
        stats = map(lambda x: int(to_utf8_strip(x)),
                    response.css(".pokemon-stats-info.active .gauge li::attr(data-value)").extract())
        ps = stats[0]
        attack = stats[1]
        defense = stats[2]
        special_attack = stats[3]
        special_defense = stats[4]
        speed = stats[5]
        evolutions = map(lambda x: int(to_utf8_strip(x)[-3:]), response.css(".evolution-profile .pokemon-number ::text").extract())

        yield {
            'id': number,
            'name': name,
            'image': image,
            'description': description,
            'height': height,
            'weight': weight,
            'category': category,
            'ability': ability,
            'types': types,
            'weaknesses': weaknesses,
            'ps': ps,
            'attack': attack,
            'defense': defense,
            'special_attack': special_attack,
            'special_defense': special_defense,
            'speed': speed,
            'evolutions': evolutions
        }
