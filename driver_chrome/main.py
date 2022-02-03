import random
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from fake_useragent import  UserAgent
from selenium.webdriver.common.by import By

url = 'https://www.vk.com/'
# user_agents = ['Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 YaBrowser/20.9.3.136 Yowser/2.5 Safari/537.36',
#                'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0',
#                'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
#                ]


useragent = UserAgent()
# options
options = webdriver.ChromeOptions()
# options.add_argument(f'user-agent={random.choice(user_agents)}')
options.add_argument(f'user-agent=Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 YaBrowser/20.9.3.136 Yowser/2.5 Safari/537.36')
ser = Service(executable_path=r'C:\Users\martenson\Contacts\parcer\driver_chrome\chromedriver.exe')
driver = webdriver.Chrome(service=ser, options=options)

try:
    driver.get(url=r'https://www.dns-shop.ru/catalog/17a89aab16404e77/videokarty/?order=6&stock=now-today-lte3&rating=1&price=4299-160000')
    # driver.get(url=url)
    time.sleep(7)
    product = driver.find_elements(By.CLASS_NAME, 'product-buy__price_active')
    print(product)
except Exception as ex:
    print(ex)
finally:
    driver.close()
    driver.quit()