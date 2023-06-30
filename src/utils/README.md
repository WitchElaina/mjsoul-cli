# Utils

## Update Verson

Maj-soul use protobuf to serialize data, so you need to make sure you've got the latest version of `liqi.json`. You can download the latest `liqi.json` by using Chrome DevTools simply.

If you want to update `liqi.json` automatically, you can use the `updateLiqi.ts` in this folder.

### how to use

You can use `npm run update:liqi` to update `liqi.json` automatically.

You can also import `updateLiqi` and use it in your code.

```ts
import { updateLiqi } from 'maj-soul/utils/updateLiqi';
```

### how it works

When you request maj-soul game url, the client will send a request to `http://game.maj-soul.com/1/version.json` to get `version.json` first. The response of `version.json` is like this:

```json
{
  "version": "0.10.247.w",
  "force_version": "0.10.0.w",
  "code": "v0.10.247.w/code.js"
}
```

Then the client will request a **resversion** file by sending request to `http://game.maj-soul.com/1/resversion${version}.json`. For example, if the version is `0.10.247.w`, the client will request `http://game.maj-soul.com/1/resversion0.10.247.w.json`. The response of **resversion** file is like this:

```json
{
  "res": {
    // ...
    "res/proto/liqi.json": {
      "prefix": "v0.10.237.w"
    }
    // ...
  }
}
```

Then you can get the latest `liqi.json` by sending request to `http://game.maj-soul.com/1/v0.10.237.w/res/proto/liqi.json`.
