// No exercicio é pedido para retornar o numero do endereço porém o viacep não retorna o numero do endereço então coloquei o bairro no lugar

const axios = require('axios')

const cep = '36045330'
const api = axios.create({
    baseURL: `https://viacep.com.br/ws/`
})
const getCEP = async (address) => {
    try {
        const response = await api.get(`${address}/json/`)
        const { logradouro, bairro, localidade, uf } = response.data
        console.log(`${logradouro}, ${bairro}, ${localidade}/${uf}`)
    } catch (error) {
        console.error("Ocorreu um erro na requisição", error)
    }
}

getCEP(cep)