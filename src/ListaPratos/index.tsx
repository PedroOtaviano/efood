import { useState } from 'react'

import PratoCard from '../PratoCard'
import {
  ListaContainer,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTexto
} from './styles'
import { Menu } from '../ListaRestaurantes'
import imgClose from '../assets/images/close.png'

type Props = {
  menu: Menu[]
}

const ListaPratos = ({ menu }: Props) => {
  const [pratoSelecionado, setPratoSelecionado] = useState<Menu | null>(null)
  const isModalOpen = !!pratoSelecionado

  const formatarPreco = (valor: number | string) => {
    return Number(valor).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  }

  return (
    <>
      <>
        {isModalOpen && (
          <>
            <ModalOverlay onClick={() => setPratoSelecionado(null)} />
            <Modal>
              <div className="containerModal">
                <ModalHeader>
                  <img
                    src={imgClose}
                    alt="Ícone de fechar"
                    onClick={() => setPratoSelecionado(null)}
                  />
                </ModalHeader>
                <ModalContent onClick={(evento) => evento.stopPropagation()}>
                  <img
                    src={pratoSelecionado?.foto}
                    alt={pratoSelecionado?.nome}
                  />
                  <ModalTexto>
                    <h4>{pratoSelecionado?.nome}</h4>
                    <p>
                      {pratoSelecionado?.descricao} <br /> <br />
                      Serve: {pratoSelecionado?.porcao}
                    </p>
                    <button>
                      Adicionar ao carrinho -{' '}
                      {formatarPreco(pratoSelecionado?.preco)}
                    </button>
                  </ModalTexto>
                </ModalContent>
              </div>
            </Modal>
          </>
        )}
      </>
      <ListaContainer>
        {menu.map((menu) => (
          <li key={menu.id}>
            <PratoCard
              id={menu.id}
              foto={menu.foto}
              nome={menu.nome}
              preco={menu.preco}
              porcao={menu.porcao}
              descricao={menu.descricao}
              onAddClick={() => setPratoSelecionado(menu)}
            />
          </li>
        ))}
      </ListaContainer>
    </>
  )
}

export default ListaPratos
