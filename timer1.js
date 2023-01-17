const input = process.argv.slice(2).sort((a,b) => a - b);

for (let index of input) {

  if (index > 0) {
    
    setTimeout(() => {process.stdout.write('\x07')
    }, index * 1000);

  }

}


