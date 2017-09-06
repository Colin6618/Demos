export let render = (container, props) => {
    container.innerHTML = `
    <header>
      <h1> ${props.name} </h1>
      <h2> ${props.info} </h2>
    </header>`;
};;
