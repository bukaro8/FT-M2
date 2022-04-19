var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]==='.')return 'class';
  if(selector[0]==='#')return 'id';
  if(selector.indexOf('.',1)>0)return 'tag.class'
  return 'tag'
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction=(par)=>par.id=== selector.slice(1)?true:false
  } else if (selectorType === "class") {
    matchFunction=(par)=>{ 
      let aux=[...par.classList];
      if(aux.length===0){return false;}
      else if(aux.indexOf(selector.slice(1)> -1)){
      return  true}
      else return false
    }
  } else if (selectorType === "tag.class") {
    
  } else if (selectorType === "tag") {
    
  }
  
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
