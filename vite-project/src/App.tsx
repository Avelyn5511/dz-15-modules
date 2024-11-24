import React, { useState } from "react";
import styled from "styled-components";
import PostCard from "./PostCard/PostCard.tsx";

const Container = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  padding: 16px;
  background-color: #f8f9fa;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

interface Post {
  id: number;
  title: string;
  content: string;
  isFavorite: boolean;
}

const postsCard: Post[] = [
  {
    id: 1,
    title: "Пост 1",
    content: "Это содержимое поста номер 1.",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Пост 2",
    content: "Это содержимое поста номер 2.",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Пост 3",
    content: "Это содержимое поста номер 3.",
    isFavorite: false,
  },
];

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(postsCard);

  const handleEdit = (id: number) => {
    const newTitle = prompt("Введите новый заголовок:");
    const newContent = prompt("Введите новый соодержание поста");
    setPosts(
      posts.map((post) =>
        post.id === id
          ? {
              ...post,
              title: newTitle || post.title,
              content: newContent || post.content,
            }
          : post,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleFavorite = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isFavorite: !post.isFavorite } : post,
      ),
    );
  };

  return (
    <Container>
      {posts.map((post: Post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          isFavorite={post.isFavorite}
          onEdit={() => handleEdit(post.id)}
          onDelete={() => handleDelete(post.id)}
          onFavorite={() => handleFavorite(post.id)}
        />
      ))}
    </Container>
  );
};

export default App;
