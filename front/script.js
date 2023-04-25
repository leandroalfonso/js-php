
fetch('https://node-react-ruby.vercel.app/dados')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    const list = document.getElementById('ul')

    data.forEach((item) => {
      const li = document.createElement('li')
      li.innerHTML = `${item.nome} ${item.descricao}`
      li.style.color = 'blue'
      li.style.fontSize = '18px'
      li.style.fontFamily = 'Arial'
      list.appendChild(li)
    })
  })

  const btn = document.getElementById('btn');

  btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const descricao = document.getElementById('descricao').value;
      const imagem = 'img.jpg';
      const dados = {
          nome,
          descricao,
          imagem
      }

      fetch('https://node-react-ruby.vercel.app/upload', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(dados)
      })
    
  });
