// No exercicio é pedido para retornar o numero do endereço porém o viacep não retorna o numero do endereço então coloquei o bairro no lugar

const axios = require('axios')

const cep = '36016530'
const api = axios.create({
    baseURL: `https://viacep.com.br/ws/${cep}/json/`
})
const getCEP = async () => {
    try {
        const response = await api.get()
        const { logradouro, bairro, localidade, uf } = response.data
        return console.log(`${logradouro}, ${bairro}, ${localidade}/${uf}`)
    } catch (error) {
        console.error("Ocorreu um erro na requisição", error)
    }
}

getCEP()