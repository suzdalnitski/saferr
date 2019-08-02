# Description
A zero-dependency JavaScript library for error handling. It is inspired by Go, and returns a tuple containing the error and the result instead of throwing an exception.

Unlike other JavaScript libraries ([await-to-js](https://github.com/scopsy/await-to-js)), supports async/await, promises and regular functions.

# Installation
```bash
npm i saferr
```

# Examples

## Async
```javascript
import saferr from "saferr";
import axios from "axios";

const safeGet = saferr(axios.get);

const testAsync = async url => {
  const [err, result] = await safeGet(url);

  if (err) {
    console.error(err.message);
    return;
  }

  console.log(result.data.results[0].email);
};


// prints: zdenka.dieckmann@example.com
testAsync("https://randomuser.me/api/?results=1");

// prints: Network Error
testAsync("https://shmoogle.com");
```

## Sync
```javascript
import saferr from "saferr";

const syncFunc = shouldThrow => {
  if (shouldThrow) {
    throw new Error("Oops...");
  }

  return "ok";
};

const safeSyncFunc = saferr(syncFunc);

const testSync = ({succeed}) => {
  const [err, result] = safeSyncFunc(succeed);

  if (err) {
     console.error(err.message);
     return;
  }

  console.log(result);
};

// prints: ok
testSync({succeed: true});

// prints: Oops...
testSync({succeed: false});
```
