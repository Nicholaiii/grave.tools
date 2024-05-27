<p align='center'>
  <img src='https://grave.tools/favicon.svg' alt='Grave Tools - Frostgrave Warband Management' width='200'/>
</p>

# Grave Tools

Making and managing warbands in Frostgrave has never been this easy.

## Usage

### Development

Just run and visit <http://localhost:3333>

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated files in `dist` that ready to be served.

### Docker Production Build

First, build the app image by opening the terminal in the project's root directory.

```bash
docker buildx build . -t grave-tools:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 grave-tools:latest
```
