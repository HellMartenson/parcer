from bs4 import BeautifulSoup
import requests

headers = {
        "Accept": "*/*",
        "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.116 YaBrowser/22.1.1.1544 Yowser/2.5 Safari/537.36"

}
url = "https://www.dns-shop.ru/catalog/17a89aab16404e77/videokarty/?price=31001-49000,49001-279999"

req = requests.get(url, headers=headers)
src = req.text
# print(src)

with open("index.html", "w") as file:
    file.write(scr)