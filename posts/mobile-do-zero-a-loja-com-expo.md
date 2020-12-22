---
title: 'Mobile do zero à loja com Expo'
date: '2020-12-22'
---

# Mobile do zero à loja com Expo

# Por que utilizar o Expo?

Com Expo podemos desenvolver aplicativos mobile usando somente JavaScript e temos fácil acesso às APIs nativas dos dispositivos como câmera, microfone, entre outros, sem precisar mexer com código nativo ou instalar outras dependências, possibilitando começarmos o desenvolvimento de um novo aplicativo em minutos e com o mesmo código, compilar para Android, IOS, Web e também Desktop se integrar com o framework Electron.

# Workflows

As duas abordagens para desenvolver utilizando Expo se chamam "managed" e "bare" workflows.

- Com "managed workflow" só desenvolveremos utilizando JavaScript e as ferramentas e serviços do Expo cuidarão de todo o resto.
- Com o "bare workflow" teremos total controle sobre o projeto, podendo escrever código em linguagem nativa também utilizando Xcode e Android Studio, mas as ferramentas e serviços do Expo, nesse caso, serão mais limitadas.

Neste artigo veremos como utilizar a primeira abordagem.

# Managed Workflow

O "Managed workflow" é quando iniciamos uma aplicação utilizando as ferramentas do Expo.

Como o acesso as APIs nativas é abstraido pelo Expo, algumas coisas o Expo não dá suporte, como, por exemplo, o bluetooth ou coisas bem específicas. Mas se esbarrarmos em limitações e quisermos continuar a aplicação utilizando código nativo, o Expo tem o comando de "eject" que transforma a aplicação Expo em uma aplicação comum React Native, então não ficaremos limitados escolhendo o Managed Workflow.

Aqui podemos ver as limitações e o que estará disponível em breve:

[Expo Feedback](https://expo.canny.io/)

# Instalação

Para instalar a CLI do Expo precisaremos do Node instalado. E então executar:

```bash
npm install --global expo-cli
```

# Criar um novo projeto

Para iniciar um projeto:

```bash
expo init my-app
```

Ao executar esse comando, poderemos escolher um template para começar com JavaScript ou TypeScript.

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled.png)

```bash
# Navegar para a pasta do projeto
cd my-app
```

Com o template "blank" serão criados esses arquivos:

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled1.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled1.png)

O arquivo **App.js** é o inicial onde vamos começar nossa aplicação:

```jsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

# Executar

Para ver a nossa aplicação rodando, podemos utilizar o navegador ou então instalar o aplicativo Expo em nosso dispositivo Android ou IOS.

Android:

[Expo - Apps on Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

IOS:

[‎Expo Client](https://apps.apple.com/app/expo-client/id982107779)

Ao executar o comando:

```bash
Expo start
```

Abrirá essa janela no nosso navegador:

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled2.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled2.png)

Onde poderemos ver a aplicação com o navegador:

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled3.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled3.png)

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled4.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled4.png)

Ou pelo aplicativo do celular, escaneando o QRCode:

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled5.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled5.png)

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled6.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled6.png)

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled7.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled7.png)

# Modo desenvolvimento e produção

Por padrão, quando iniciamos a aplicação usando **expo start**, ela roda no modo **desenvolvimento** e quando ela é compilada ou publicada, ela roda no modo **produção**.

O modo desenvolvimento inclui algumas ferramentas de debug. Podemos ver mais sobre isso neste link:

[Debugging](https://docs.expo.io/workflow/debugging)

Se quisermos testar a aplicação em modo de produção sem ter que publicá-la podemos executar o seguinte comando:

```bash
expo start --no-dev --minify
```

Esse comando é útil para para acharmos bugs que só aparecem em modo produção ou então testar a performance da aplicação, uma vez que o modo desenvolvimento a deixa mais lenta.

# Configurações app.json

Com o arquivo **app.json** configuramos partes da aplicação que não pertencem ao código, como versão, nome, permissões, etc.

O app.json do meu projeto ficou assim:

```json
{
  "expo": {
    "name": "my-app",
    "slug": "my-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

Podemos ver todas as propriedades disponíveis aqui:

[app.json / app.config.js](https://docs.expo.io/versions/latest/config/app/)

A maior parte dessas propriedades são possíveis acessar em tempo de execução via `Constants.manifest`:

[Constants](https://docs.expo.io/versions/latest/sdk/constants/)

Informações sensíveis como chaves secretas são removidas.

# Configurações dinâmicas

Podemos também utilizar o arquivo **app.config.js** ou **app.config.ts** para setar as configurações, exportando um objeto como default:

```jsx
const myValue = 'My App';

export default {
  name: myValue,
  version: process.env.MY_CUSTOM_PROJECT_VERSION || '1.0.0',
};
```

Assim as variáveis de ambientes podem ser utilizadas. Pode ser útil, por exemplo, para mudar a versão da aplicação em um CI ou algo do tipo.

# Publicar

Para publicar a aplicação nos servidores do Expo, teremos que ter uma conta no Expo.

Podemos criar uma executando:

```bash
expo register
```

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled8.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled8.png)

Ou entrar em uma existente:

```bash
expo login
```

Depois de logar, é só utilizar o comando:

```bash
expo publish
```

Aqui teremos que enfrentar uma fila para os servidores do Expo fazerem o build. Dependendo de quantas pessoas estejam esperando, pode levar mais de meia hora.

Podemos adquirir o plano pago e não enfrentar filas. No momento (dezembro/2020) custa $29 por mês.

Ou fazer o build localmente, como será explicado mais no final do artigo.

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled9.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled9.png)

E então a aplicação será publicada nos servidores do Expo e qualquer pessoa pode acessar e executar escaneando o QRCode em um link como https://exp.host/@user/my-app.

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled10.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled10.png)

Podemos setar a propriedade `privacy` no **app.json** para `public` ou `unlisted`. Por padrão, fica como unlisted, que funciona como os vídeos não listados do youtube, que só temos acesso com o link.

# Build

Para gerarmos o apk/aab (android) ou o ipa (iOS), executamos:

```bash
expo build:android
```

ou

```bash
expo build:ios
```

No caso do android ele vai perguntar se queremos enviar uma keystore que já temos, ou deixar que o Expo gere uma para nós.

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled11.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled11.png)

E então logados na conta no site, podemos ver todos os builds que fizemos e baixá-los.

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled12.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled12.png)

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled13.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled13.png)

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled14.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled14.png)

Ao executarmos o `expo build`, o `publish` \*\*\*\*também é executado, então o último build ficará disponível para executarmos utilizando o QRCode.

# Release Channels

Podemos utilizar o Release Channels para publicar diferentes versões do app ou então usar mais de um ambiente de desenvolvimento como, por exemplo, ambiente de produção e ambiente de desenvolvimento.

Para publicar o app em outro channel, usamos:

```bash
expo publish --release-channel <your-channel>
```

E então esse novo channel ficará disponivel em https://exp.host/@username/yourApp?release-channel=<your-channel>.

Para build em outro channel:

```bash
expo build:android --type apk --release-channel <your-channel>
```

# Enviar à App Store

Antes de enviar para as lojas, é bom setarmos todas as permissões que nosso app precisa no app.json, senão todas as permissões suportadas pelo Expo serão aplicadas.

Podemos ver todas as permissões que podemos setar aqui:

[app.json / app.config.js](https://docs.expo.io/versions/latest/config/app/#permissions)

Para enviar o aplicativo Android para a Google Play, precisamos ter uma conta de desenvolvedor da Google Play, criar um app no Google Play Console:

[Redirecting...](https://play.google.com/apps/publish/)

E enviar o aplicativo manualmente pelo menos uma vez.

Depois disso, podemos executar:

```bash
expo upload:android
```

E escolher qual build vamos enviar, com uma das flags:

- `--latest` - Envia o último build encontrado nos servidores do Expo.
- `--url<url>` - Envia o build da url fornecida.
- `--path<path>` - Envia o build que está salvo localmente.
- `--id<id>` - Envia o build do id fornecido.

Esse comando só funciona no macOS. Se estivermos utilizando outro sistema operacional, precisamos passar a flag `--use-submission-service` e então o processo será executado nos servidores do Expo.

E algumas outras flags que podemos passar:

- `--type<archive-type>` - apk ou aab
- `--key<key>` - Caminho do JSON Privaty Key, que podemos baixar no Google Play Console.
- `--track<track>` - production, beta, alpha, internal, rollout (default: internal)
- `--release-status<release-status>` - completed, draft, halted, inProgress (default: completed)
- `--android-package<android-package>` - O Android package da nossa aplicação, se não passarmos, será lido do app.json.
- `--verbose` - Irá printar os logs do Submission Service.

Aqui poderemos ver com detalhes como enviar para as lojas Apple Store ou Google Play:

[Uploading Apps to the Apple App Store and Google Play](https://docs.expo.io/distribution/uploading-apps/)

# Build para Web

Podemos também fazer o build para web com o comando:

```bash
expo build:web
```

Ele criará uma pasta **web-build** com um **index.html** e o restante da aplicação:

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled15.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled15.png)

Podemos testar com o comando:

```bash
npx serve web-build
```

A aplicação ficará disponível em [http://localhost:8000](http://localhost:8000).

# Build local

Podemos também fazer o build local e não usar os servidores do Expo para armazenar nossos builds e nem esperar em filas.
Para isso, o Expo disponibiliza a ferramenta que roda nos servidores deles para os builds, que é o **Turtle-CLI**.

Funciona somente em Linux e macOS. O build para iOS só funciona no macOS.

Para instalar:

```bash
npm install -g turtle-cli
```

O Turtle CLI usa o manifesto publicado em um servidor e não os arquivos locais **app.json**/**app.config.js**.

Para criar os arquivos que o Turtle precisa, podemos usar o comando:

```bash
expo export --public-url http://127.0.0.1:8000 --dev
```

- `--public-url<url>` aqui setamos o servidor em que os arquivos estarão disponíveis.
- `--dev` para poder utilizar servidor http ao invés de https.

Por padrão, os arquivos serão gerados na pasta **dist**:

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled16.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled16.png)

Agora vamos rodar um servidor local para o Turtle poder acessar esses arquivos.

Podemos utilizar o Python3 para isso (com o Python2 utilizamos `SimpleHTTPServer` no lugar do `http.server`):

```bash
cd dist
python -m http.server 8000
```

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled17.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled17.png)

Os arquivos estarão disponíveis em [http://127.0.0.1:8000](http://127.0.0.1:8000).

No caso do Android também precisaremos dos seguintes itens:

- Keystore
- Keystore alias
- Keystore password
- key password

Podemos pegar a keystore que o próprio Expo gera pra gente na etapa do build, utilizando o comando:

```bash
expo fetch:android:keystore
```

![https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled18.png](https://rodrigog.com.br/images/posts/mobiledozeroalojacomExpo/Untitled18.png)

Ou nós mesmos gerarmos uma de outra forma.

Agora precisamos setar as variáveis de ambiente `EXPO_ANDROID_KEYSTORE_PASSWORD` e `EXPO_ANDROID_KEY_PASSWORD` com os valores da keystore password e key password.

E então executar o build com o comando `turtle build:android` e com as seguintes flags:

- `--keystore-path<keystore-path>`
- `--keystore-alias<keystore-alias>`
- `--public-urlhttp://127.0.0.1:8000/android-index.json` caminho do **android-index.json** do servidor local.
- `--typeapk` podemos escolher o **app-bundle** também, que é o default.
- `--output<file-path>` utilizamos para escolher onde vamos salvar o build.
- `--allow-non-https-public-url` por padrão, o Turtle só aceita pegar os dados de servidor https, como rodamos um servidor http local, precisamos dessa flag.

E pronto! Nosso apk será gerado no caminho em que especificamos no `--output`.

No caso do iOS o procedimento é parecido, podemos ver mais neste link:

[Building Standalone Apps on Your CI](https://docs.expo.io/distribution/turtle-cli/)
