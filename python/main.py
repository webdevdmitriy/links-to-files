import os
import re

# где лежат инструкции
path = "\\\\192.168.127.220\\02 Eplan\Инструкции"
# где лежит файл script с данными
pathScript = '\\\\192.168.127.220\\02 Eplan\Инструкции\links\src\data.js'
# допустимые расширения файлов
ext = [".pdf", ".mp4"]

# файл находится в папке src, нужно вернуться на уровень выше
levelUp = '..\\'

# Добавляем только папки, в именах которых вначале есть точка с цифрой
regexp = r'^\d\..*'

dirList = []
for item in os.listdir(path):
    if os.path.isdir(os.path.join(path, item)) and re.fullmatch(regexp, item):
        dirList.append(item)


# массив с объектами
result = list()

#Заполняем массив объектами с данными
for dir in dirList:
    paths = dict()
    paths['dir'] = dir
    completeFileList = list()
    namesList = list()
    for file in os.listdir(os.path.join(path, dir)):
        if file.endswith(tuple(ext)):
            completePath = os.path.join(levelUp, dir, file)
            completeFileList.append(completePath)
            namesList.append(file)
    paths['files'] =   completeFileList
    paths['names'] = namesList
    result.append(paths)


print(result)


#записываем полученные массив в файл script.js
scriptJS = open(pathScript,'w+', encoding='utf-8')
scriptJS.write("const data = " + str(result))