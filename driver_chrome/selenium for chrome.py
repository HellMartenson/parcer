import random
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
import time

url = 'https://www.vk.com/'

# options
options = webdriver.ChromeOptions()

options.add_argument(f'user-agent=Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 YaBrowser/20.9.3.136 Yowser/2.5 Safari/537.36')

ser = Service(executable_path=r'C:\Users\martenson\Contacts\parcer\driver_chrome\chromedriver.exe')
driver = webdriver.Chrome(service=ser, options=options)

try:
    driver.get(url=url)
    time.sleep(3)

    email_input = driver.find_element(By.ID, "index_email")
    email_input.clear()
    email_input.send_keys('123353636')
    time.sleep(5)

except Exception as ex:
    print(ex)
# finally:
    # driver.close()
    # driver.quit()