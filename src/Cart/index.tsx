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
  TextItem,
  StyleForm,
  Row,
  CardRow
} from './styles'
import lixeira from '../assets/images/lixeira.png'
import { formatarPreco } from '../ListaPratos'
import { close, remove, closeCheckout, clear } from '../store/reducers/cart'

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
  const [step, setStep] = useState<'cart' | 'address' | 'payment' | 'success'>(
    'cart'
  )
  const [addressValues, setAddressValues] = useState<any>(null)
  const [orderId, setOrderId] = useState<string | null>(null)

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
      <Overlay
        onClick={() => {
          if (step === 'success') {
            dispatch(clear())
            closeCart()
          } else {
            closeCart()
          }
        }}
      />
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
              <StyleForm>
                <h3>Entrega</h3>
                <Form>
                  <Row>
                    <div>
                      <label>Quem irá receber</label>
                      <Field name="nome" />
                      <ErrorMessage name="nome" />
                    </div>
                  </Row>
                  <Row>
                    <div>
                      <label>Endereço</label>
                      <Field name="endereco" />
                      <ErrorMessage name="endereco" />
                    </div>
                  </Row>
                  <Row>
                    <div>
                      <label>Cidade</label>
                      <Field name="cidade" />
                      <ErrorMessage name="cidade" />
                    </div>
                  </Row>
                  <Row>
                    <div>
                      <label>CEP</label>
                      <Field as={InputMask} mask="99999-999" name="cep">
                        {({ field }: any) => <input {...field} />}
                      </Field>
                      <ErrorMessage name="cep" />
                    </div>
                    <div>
                      <label>Número</label>
                      <Field name="numero" />
                      <ErrorMessage name="numero" />
                    </div>
                  </Row>
                  <Row>
                    <div>
                      <label>Complemento (opcional)</label>
                      <Field name="complemento" />
                      <ErrorMessage name="complemento" />
                    </div>
                  </Row>

                  <Botao type="submit">Continuar com o pagamento</Botao>
                  <Botao type="button" onClick={() => setStep('cart')}>
                    Voltar para o carrinho
                  </Botao>
                </Form>
              </StyleForm>
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
                  const data = await response.json()
                  setOrderId(data.orderId)
                  setStep('success')
                  dispatch(closeCheckout())
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
              <StyleForm>
                <Form>
                  <h3>
                    Pagamento - Valor a pagar{' '}
                    <span>{formatarPreco(GetTotalPrice())}</span>
                  </h3>
                  <Row>
                    <div>
                      <label>Nome no cartão</label>
                      <Field name="nomeCartao" />
                      <ErrorMessage name="nomeCartao" />
                    </div>
                  </Row>
                  <CardRow>
                    <div>
                      <label>Número do cartão</label>
                      <Field
                        as={InputMask}
                        mask="9999 9999 9999 9999"
                        name="numeroCartao"
                      >
                        {({ field }: any) => <input {...field} />}
                      </Field>
                      <ErrorMessage name="numeroCartao" />
                    </div>
                    <div>
                      <label>CVV</label>
                      <Field as={InputMask} mask="999" name="cvv">
                        {({ field }: any) => <input {...field} />}
                      </Field>
                      <ErrorMessage name="cvv" />
                    </div>
                  </CardRow>
                  <Row>
                    <div>
                      <label>Mês de vencimento</label>
                      <Field as={InputMask} mask="99" name="mes">
                        {({ field }: any) => <input {...field} />}
                      </Field>
                      <ErrorMessage name="mes" />
                    </div>
                    <div>
                      <label>Ano de vencimento</label>
                      <Field as={InputMask} mask="9999" name="ano">
                        {({ field }: any) => <input {...field} />}
                      </Field>
                      <ErrorMessage name="ano" />
                    </div>
                  </Row>
                  <Botao type="submit">Finalizar pagamento</Botao>
                  <Botao type="button" onClick={() => setStep('address')}>
                    Voltar para a edição de endereço
                  </Botao>
                </Form>
              </StyleForm>
            )}
          </Formik>
        )}
        {step === 'success' && (
          <StyleForm>
            <h3>Pedido realizado - {orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <Botao
              type="button"
              onClick={() => {
                dispatch(clear())
                closeCart()
              }}
            >
              Concluir
            </Botao>
          </StyleForm>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
