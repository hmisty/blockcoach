all: build 

build:
	yarn build

deploy:
	cp Makefile ./build/
	cd ./build/ && make deploy
	find . -name .DS_Store -exec rm {} \;
	echo "Makefile" >> .gitignore
	git init
	git remote add origin git@github.com:hmisty/blockcoach.git
	git config user.email "hmisty@gmail.com"
	git config user.name "hmisty"
	git checkout -b main
	git add .
	git commit -m "update"
	git push -f --set-upstream origin main

clean:
	rm -rf build
