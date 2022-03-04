window.onload = ()=>{
    const button = document.querySelector("button");
    button.addEventListener("click", (event)=>{
        const task = document.querySelector("#minha-tarefa");
        task.remove();
    });
    const form = document.querySelector("form");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const formData = new FormData(form);
        const data = {
            Nome: formData.get("nome"),
            Email: formData.get("e-mail"),
            Mensagem: formData.get("mensagem")
        };
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((response)=>response.json()
        ).then((json)=>{
            event.target.reset();
            console.log(json);
        });
    });
};

//# sourceMappingURL=contato.f75de5e1.js.map
