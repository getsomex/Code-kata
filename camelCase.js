
String.prototype.camelCase=function(){
    return this.split(' ').map(el => el.replace(el[0],el[0].toUpperCase())).join('');

  };

 console.log('hello this is mishal'.camelCase())




