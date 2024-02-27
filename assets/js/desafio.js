const urlApi = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
  try {
    const response = await fetch(urlApi);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const datos = await response.json();

    mostrarPostsEnInterfaz(datos);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
}

function mostrarPostsEnInterfaz(posts) {
  const listPosts = document.getElementById("post-list");
  listPosts.innerHTML = "";

  posts.forEach((post) => {
    listPosts.innerHTML += `<li><h5>${post.title}:</h5> ${post.body}<br></li>`;
  });
}
