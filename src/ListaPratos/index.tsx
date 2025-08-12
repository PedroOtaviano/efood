import { useState } from 'react'
import { useDispatch } from 'react-redux'

import PratoCard from '../PratoCard'
import {
  ContainerModal,
  ListaContainer,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTexto
} from './styles'
import { Menu } from '../ListaRestaurantes'
import imgClose from '../assets/images/close.png'
import { add, open } from '../store/reducers/cart'
import { Botao } from '../PratoCard/styles'

type Props = {
  menu: Menu[]
}

export const formatarPreco = (valor: number | string) => {
  return Number(valor).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

const ListaPratos = ({ menu }: Props) => {
  const [pratoSelecionado, setPratoSelecionado] = useState<Menu | null>(null)
  const isModalOpen = !!pratoSelecionado
  const dispatch = useDispatch()

  const addPrato = (prato: Menu) => {
    if (pratoSelecionado) {
      dispatch(add(prato))
    }
    setPratoSelecionado(null)
    dispatch(open())
  }

  return (
    <>
      <>
        {isModalOpen && (
          <>
            <ModalOverlay onClick={() => setPratoSelecionado(null)} />
            <Modal>
              <ContainerModal>
                <ModalHeader>
                  <img
                    src={imgClose}
                    alt="Fechar"
                    onClick={() => setPratoSelecionado(null)}
                  />
                </ModalHeader>
                <ModalContent>
                  <img
                    src={pratoSelecionado?.foto}
                    alt={pratoSelecionado?.nome}
                  />
                  <ModalTexto>
                    <h4>{pratoSelecionado?.nome}</h4>
                    <p>
                      {pratoSelecionado?.descricao}
                      <br />
                      <br />
                      Serve: {pratoSelecionado?.porcao}
                    </p>
                    <Botao onClick={() => addPrato(pratoSelecionado)}>
                      Adicionar ao carrinho -{' '}
                      {formatarPreco(pratoSelecionado?.preco)}
                    </Botao>
                  </ModalTexto>
                </ModalContent>
              </ContainerModal>
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
