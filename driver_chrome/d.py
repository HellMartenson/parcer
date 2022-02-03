from bs4 import BeautifulSoup
import json

with open('Видеокарты купить в интернет магазине DNS. Видеокарты цены, большой каталог, новинки - страница 1 из 9.html', encoding='utf-8') as file:
    src = file.read()

soup = BeautifulSoup(src, "lxml")

page_goods = soup.find_all(class_="catalog-product ui-button-widget")

item_dict = {}
for i in page_goods:
    item_name = i.find(class_="catalog-product__name ui-link ui-link_black").text
    item_price = i.find(class_="product-buy__price").text

    item_dict[item_name] = item_price

with open("videocards", "w", encoding="utf-8") as file:
    json.dump(item_dict, file, indent=4, ensure_ascii=False)