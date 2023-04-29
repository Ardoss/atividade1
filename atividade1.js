const frutas = ['abacate', 'amora', 'ameixa', 'acerola', 'abacaxi', 'açai', 'banana', 'carambola', 'caju', 'cereja', 'cacau', 'caqui', 'cupuaçu', 'damasco', 'figo', 'framboesa', 'graviola', 'goiaba', 'groselia', 'guarana', 'jaca', 'kiwi', 'laranja', 'limao', 'lima', 'lixia', 'melancia', 'mamao', 'melao', 'maracuja', 'manga', 'maça', 'mexerica', 'morango', 'nectarina', 'pera', 'pessego', 'pitanga', 'pinha', 'quina', 'roma', 'tangerina', 'uva'];
  
 
  
// transforma todas as frutas em maiúsculas
const frutasMaiusculas = frutas.map(f => f.toUpperCase());

// filtra apenas as frutas que contêm a letra R e as adiciona a um novo array
const frutasComR = frutasMaiusculas.filter(f => f.includes('R'));


console.log(frutasMaiusculas)
console.log(frutasComR)