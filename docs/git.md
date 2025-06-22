git clone https://github.com/MEDOYED/harmonia --> для того чтобы стянуть репозиторий с GitHub

git init git add . git commit -m " " git branch -M main git remote add origin https://github.com/MEDOYED/harmonia git push -u origin main

git init

git add .

git commit -m " "

git branch -M main

git remote add origin https://github.com/MEDOYED/harmonia

git push -u origin main

git pull origin main --> для того чтобы обновить код с ГитХаба

git log --> можно посмотреть версии комитов

git branch --> показывает в какой ветке мы находимся + список всех веток git branch --> добавить новую ветку git branch -D --> удалить ветку git checkout <nameBranch, на которую хотим переключиться> --> команда чтобы переключиться на другую ветку git branch -M main --> переименовывает ветку в main

git branch --> показывает в какой ветке мы находимся + список всех веток

git branch --> добавить новую ветку

git branch -D --> удалить ветку

git checkout <nameBranch, на которую хотим переключиться> --> команда чтобы переключиться на другую ветку

git branch -M main --> переименовывает ветку в main

git merge (nameBranch з якою треба злити) --> чтобы слить 2 ветки в одну

git checkout -- . --> Возвращает к последнему комиту

git rebase main --> Сливает изменения с ветки main на ветку на которой сейчас находишься

git reset --hard origin/main --> когда находимся на ветке main и у нас есть изминения в коде и нам надо сделать git pull и не получается. С помощью етой команди можно стянуть код с репозитория

git stash --> сохраняет локальные изменения без коммита
(используем когда нужно переключиться на другую ветку когда есть не закоммиченные изменения)

git restore --staged path/to/file --> когда сделал git add . и потом хочеш удалить што б за какимто файлом гит перестал следивать
