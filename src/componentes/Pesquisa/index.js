import { Input } from '../Input'
import style from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = style.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;

        
`

const Titulo = style.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%;
`

const Subtitulo = style.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const ResultadoContainer = style.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 55%;
`

const Resultado = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

export function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([])
  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livo em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={evento => {
          const textoDigitado = evento.target.value
          const resultadoPesquisa = livros.filter(livro =>
            livro.nome.includes(textoDigitado)
          )
          setLivrosPesquisados(resultadoPesquisa)
        }}
      />
      <ResultadoContainer>
        {livrosPesquisados.map(livro => (
          <Resultado key={livro.id}>
            <p>{livro.nome}</p>
            <img src={livro.src} alt={livro.nome} />
          </Resultado>
        ))}
      </ResultadoContainer>
    </PesquisaContainer>
  )
}
