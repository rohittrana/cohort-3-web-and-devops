function Post() {
  const posts = [
    {
      name: "rohitrana",
      description: "Btech 4 year student",
      age: 23,
      image:
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    },
    {
      name: "rohitrana",
      description: "Btech 4 year student",
      age: 23,
      image:
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    },
    {
      name: "rohitrana",
      description: "Btech 4 year student",
      age: 23,
      image:
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    },
    {
      name: "rohitrana",
      description: "Btech 4 year student",
      age: 23,
      image:
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    },
    {
      name: "rohitrana",
      description: "Btech 4 year student",
      age: 23,
      image:
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    },
  ];

  const postItems = posts.map((post) => (
    <PostItem
      key={post.name}
      name={post.name}
      description={post.description}
      age={post.age}
      image={post.image}
    />
  ));

  return <>{postItems}</>;
}

function PostItem({ name, description, age, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{age}</p>
      <img src={image} alt={name} style={{ width: 100, height: 100 }} />
    </div>
  );
}

export default Post;
