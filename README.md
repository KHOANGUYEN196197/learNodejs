b1: tạo repository git
b2: git init
b3: npm i express ( cài thư viện mới nhất) hoặc npm install --save-exect express@4.17.1
b4: tạo file .gitignore ( chứa những thứ ko cần đẩy lên git)
b5: https://expressjs.com/en/starter/hello-world.html

cài 1 số thứ
npm install --save-exact body-parser@1.19.0 nodemon@2.0.12 @babel/core@7.15.5 @babel/node@7.15.4 @babel/preset-env@7.15.6
tạo file .babelrc

{
"presets": ["@babel/preset-env"]
}

sửa script package.json để sử dụng nodemon
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon src/server.js"
}
tạo .env
tạo controller
tạo services
tạo route

người dùng -> controller -> model -> view
