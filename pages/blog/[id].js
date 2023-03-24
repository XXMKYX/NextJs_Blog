import Layout from "./layout";

export default function Post({ dataPost }) {
  return (
    <Layout>
      <h2>{dataPost.title}</h2>
      <div>{dataPost.content}</div>
    </Layout>
  );
}

//Obtencion de id's
async function getAllPostsIds() {
  const data = await fetch("http://localhost:3000/api/hello");
  const jsondata = await data.json();

  return jsondata.map((item) => {
    return {
      params: {
        id: item.url,
      },
    };
  });
}
//Filtrado de los post por id
async function getPostData(id) {
  const data = await fetch("http://localhost:3000/api/hello");
  const jsondata = await data.json();
  const post = jsondata.find((item) => item.url.toString() === id);

  return post;
}
//Ruteo dinamico (funcion predefinida de NextJs)
export async function getStaticPaths() {
  const posts = await getAllPostsIds();

  return {
    paths: posts,
    fallback: false,
  };
}
//Inyeccion de los props en nuestros componentes
export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);

  return {
    props: {
      dataPost: post,
    },
  };
}
