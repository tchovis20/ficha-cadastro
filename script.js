document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form")

    formulario.addEventListener("submit", function(event){
        event.preventDefault()

        let dados = ""

        const inputs = document.querySelectorAll("input")

        inputs.forEach(function(input){
            dados += input.value + "\n"
        })

        const blob = new Blob([dados], {
            type: "text/plain"
        })

        const link = document.createElement("a")

        link.href = URL.createObjectURL(blob)
        link.download = "cadastro.txt"

        link.click()
    })
})