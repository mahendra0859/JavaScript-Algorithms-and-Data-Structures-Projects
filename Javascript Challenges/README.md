# Javascript Challenges

[Click here for the playlist in youtube](https://www.youtube.com/watch?v=yG03EvfHSIU&list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA)

- Installing TypeScript

```
$ sudo npm i typescript -g
$ tsc --version
```

- TypeScript compiler

```
$ tsc file_name.ts --target es6 --outDir "../Javascript"
```

- TypeScript compiler with watch mode

```
$ tsc -w file_name.ts
```

- Install 'ts-node' package globally to execute TypeScript file without compiling

```
$ npm i -g ts-node
$ ts-node file_name.ts
```

##### Supported options for target are:

- Argument for '--target' option must be: 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'esnext'.
