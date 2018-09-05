try {
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      // throw new Error('or nah'); // won't work, cannot be caught by try catch
      // return Promise.reject('or nah'); // also won't work
      reject('or nah') // can be caught by chain catch
    }, 1000);
  }).catch(function (e) {
    console.log(e); 
  });
} catch (err) {
  console.log('in catch with sync type'); // won't work!!!!!! 
  console.log(typeof err);
  console.log(err);
}

process.on('uncaughtException', (err) => {
  console.log(`Caught uncaughtException: ${err}\n`);
});