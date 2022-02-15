tsc --build tsconfig.json

cd public/
sass styles

for dir in "mcu-simulator"; do
  cd $dir
  sass styles
  cd ..
done

cd ..

go build main.go