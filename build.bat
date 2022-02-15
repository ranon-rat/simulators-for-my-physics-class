# solo debes de ejecutar este archivo
# es demasiado sencillo, dale 

tsc --build tsconfig.json

cd public/
sass styles

for i in "mcu-simulator"; do
  cd $i
  sass styles
  cd ..
done

cd ..

go build main.go