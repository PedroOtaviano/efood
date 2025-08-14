import InputMask from 'react-input-mask-next'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { RootReducer } from '../store'
import { Botao } from '../PratoCard/styles'
import * as Yup from 'yup'

import {
  Overlay,
  CartContainer,
  Sidebar,
  CartItem,
  Lixeira,
  TextItem
} from './styles'
import lixeira from '../assets/images/lixeira.png'
import { formatarPreco } from '../ListaPratos'
import { close, remove, closeCheckout } from '../store/reducers/cart'

const addressSchema = Yup.object({
  nome: Yup.string().required('Obrigatório'),
  endereco: Yup.string().required('Obrigatório'),
  cidade: Yup.string().required('Obrigatório'),
  cep: Yup.string().required('Obrigatório'),
  numero: Yup.string().required('Obrigatório'),
  complemento: Yup.string()
})

const paymentSchema = Yup.object({
  nomeCartao: Yup.string().required('Obrigatório'),
  numeroCartao: Yup.string().required('Obrigatório'),
  cvv: Yup.string().required('Obrigatório'),
  mes: Yup.string().required('Obrigatório'),
  ano: Yup.string().required('Obrigatório')
})

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [step, setStep] = useState<'cart' | 'address' | 'payment'>('cart')
  const [addressValues, setAddressValues] = useState<any>(null)

  const closeCart = () => {
    dispatch(close())
    setStep('cart')
  }

  const removePrato = (id: number) => {
    dispatch(remove(id))
  }

  const GetTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => closeCart()} />
      <Sidebar>
        {step === 'cart' && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} />
                  <TextItem>
                    <h3>{item.nome}</h3>
                    <span>{formatarPreco(item.preco)}</span>
                  </TextItem>
                  <Lixeira onClick={() => removePrato(item.id)}>
                    <img src={lixeira} />
                  </Lixeira>
                </CartItem>
              ))}
            </ul>
            <p>
              <span>Valor total</span>
              <span>{formatarPreco(GetTotalPrice())}</span>
            </p>
            <Botao onClick={() => setStep('address')}>
              Continuar com a entrega
            </Botao>
          </>
        )}

        {step === 'address' && (
          <Formik
            initialValues={{
              nome: '',
              endereco: '',
              cidade: '',
              cep: '',
              numero: '',
              complemento: ''
            }}
            validationSchema={addressSchema}
            onSubmit={(values) => {
              setAddressValues(values)
              setStep('payment')
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <label>Quem irá receber</label>
                <Field name="nome" />
                <ErrorMessage name="nome" />

                <label>Endereço</label>
                <Field name="endereco" />
                <ErrorMessage name="endereco" />

                <label>Cidade</label>
                <Field name="cidade" />
                <ErrorMessage name="cidade" />

                <label>CEP</label>
                <InputMask
                  mask="99999-999"
                  name="cep"
                  value={values.cep}
                  onChange={handleChange}
                />
                <ErrorMessage name="cep" />

                <label>Número</label>
                <Field name="numero" />
                <ErrorMessage name="numero" />

                <label>Complemento (opcional)</label>
                <Field name="complemento" />
                <ErrorMessage name="complemento" />

                <Botao type="submit">Continuar com o pagamento</Botao>
                <Botao type="button" onClick={() => setStep('cart')}>
                  Voltar para o carrinho
                </Botao>
              </Form>
            )}
          </Formik>
        )}

        {step === 'payment' && (
          <Formik
            initialValues={{
              nomeCartao: '',
              numeroCartao: '',
              cvv: '',
              mes: '',
              ano: ''
            }}
            validationSchema={paymentSchema}
            onSubmit={async (values, { setSubmitting }) => {
              // Monta o payload para a API
              const payload = {
                products: items.map((item) => ({
                  id: item.id,
                  price: item.preco
                })),
                delivery: {
                  receiver: addressValues.nome,
                  address: {
                    description: addressValues.endereco,
                    city: addressValues.cidade,
                    zipCode: addressValues.cep,
                    number: Number(addressValues.numero),
                    complement: addressValues.complemento
                  }
                },
                payment: {
                  card: {
                    name: values.nomeCartao,
                    number: values.numeroCartao,
                    code: Number(values.cvv),
                    expires: {
                      month: Number(values.mes),
                      year: Number(values.ano)
                    }
                  }
                }
              }

              try {
                const response = await fetch(
                  'https://ebac-fake-api.vercel.app/api/efood/checkout',
                  {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                  }
                )
                if (response.ok) {
                  alert('Pagamento realizado!')
                  dispatch(closeCheckout())
                  closeCart()
                } else {
                  alert('Erro ao processar pagamento!')
                }
              } catch (error) {
                alert('Erro de conexão!')
              }
              setSubmitting(false)
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <p>
                  <span>Pagamento - Valor a pagar</span>
                  <span>{formatarPreco(GetTotalPrice())}</span>
                </p>
                <label>Nome no cartão</label>
                <Field name="nomeCartao" />
                <ErrorMessage name="nomeCartao" />

                <label>Número do cartão</label>
                <InputMask
                  mask="9999 9999 9999 9999"
                  name="numeroCartao"
                  value={values.numeroCartao}
                  onChange={handleChange}
                />
                <ErrorMessage name="numeroCartao" />

                <label>CVV</label>
                <InputMask
                  mask="999"
                  name="cvv"
                  value={values.cvv}
                  onChange={handleChange}
                />
                <ErrorMessage name="cvv" />

                <label>Mês de vencimento</label>
                <InputMask
                  mask="99"
                  name="mes"
                  value={values.mes}
                  onChange={handleChange}
                />
                <ErrorMessage name="mes" />

                <label>Ano de vencimento</label>
                <InputMask
                  mask="9999"
                  name="ano"
                  value={values.ano}
                  onChange={handleChange}
                />
                <ErrorMessage name="ano" />

                <Botao type="submit">Finalizar pagamento</Botao>
                <Botao type="button" onClick={() => setStep('address')}>
                  Voltar para a edição de endereço
                </Botao>
              </Form>
            )}
          </Formik>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
