import * as React from 'react'
import BlockHome from '../components/BlockHome'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <body className={styles.scrollingContainer}  >

      <BlockHome color={"--gray-50"} name="home" blob="1"
        title={'seja bem vindo'}
        text={'Aqui na Papel de pano voce encontrara tudo que procura no quesito de camisetas e acessorios personalizados'} />

      <BlockHome alter={true} color={"--gray-50"} name="sobre" blob="3" pos="bottom-center"
        title={'Sobre'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet porttitor purus. Duis laoreet vel lacus vitae sodales. Pellentesque porta orci .'} />

      <BlockHome color={"--gray-50"} name="contatos" blob="2" pos="left"
        title={'Contate-nos'}
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet porttitor purus. Duis laoreet vel lacus vitae sodales. Pellentesque porta orci .'} />

    </body>
  )
}